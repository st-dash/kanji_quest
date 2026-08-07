// game.js - 漢字クエスト ゲームエンジン

// ===== 永続化（学習記録） =====
const STORAGE_KEY = 'kanji-quest-progress-v1';

function defaultProgress() {
    return {
        learnedIds: [],
        masteredIds: [],
        reviewQueue: {},      // { [kanjiId]: { box: 0|1|2, dueDate: "YYYY-MM-DD" } }
        clearedStages: [],
        lastPlayedDate: null,
        streak: 0,
        totalCorrect: 0,
        totalAnswered: 0,
    };
}

function loadProgress() {
    try {
        const raw = localStorage.getItem(STORAGE_KEY);
        if (!raw) return defaultProgress();
        const parsed = JSON.parse(raw);
        if (!Array.isArray(parsed.learnedIds)) return defaultProgress();
        return Object.assign(defaultProgress(), parsed);
    } catch (e) {
        return defaultProgress();
    }
}

function saveProgress() {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
}

let progress = loadProgress();

// ===== 日付ユーティリティ =====
function pad(n) { return n < 10 ? '0' + n : '' + n; }
function todayStr() {
    const d = new Date();
    return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`;
}
function addDays(dateStr, n) {
    const d = new Date(dateStr + 'T00:00:00');
    d.setDate(d.getDate() + n);
    return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`;
}

// ===== 間隔反復（まちがいノート） =====
function onReviewWrong(kanjiId) {
    progress.reviewQueue[kanjiId] = { box: 0, dueDate: addDays(todayStr(), INTERVALS[0]) };
}
function onReviewCorrect(kanjiId) {
    const rec = progress.reviewQueue[kanjiId];
    if (!rec) return;
    const nextBox = rec.box + 1;
    if (nextBox >= INTERVALS.length) {
        delete progress.reviewQueue[kanjiId];
        if (!progress.masteredIds.includes(kanjiId)) progress.masteredIds.push(kanjiId);
    } else {
        rec.box = nextBox;
        rec.dueDate = addDays(todayStr(), INTERVALS[nextBox]);
    }
}
function getDueReviewIds(limit) {
    const today = todayStr();
    return Object.entries(progress.reviewQueue)
        .filter(([, rec]) => rec.dueDate <= today)
        .sort((a, b) => a[1].dueDate.localeCompare(b[1].dueDate))
        .slice(0, limit)
        .map(([id]) => Number(id));
}
function markLearned(kanjiId) {
    if (!progress.learnedIds.includes(kanjiId)) progress.learnedIds.push(kanjiId);
}

// ===== ゲーム状態（バトル中のみ有効） =====
const gs = {
    mode: null,          // 'daily' | 'stage' | 'review'
    stageId: null,
    playerHp: 100, playerMaxHp: 100,
    enemyHp: 0, enemyMaxHp: 0,
    qIdx: 0,
    correctCount: 0,
    quizCount: 0,
    queue: [],
};

const DAILY_MIN = 5, DAILY_MAX = 10;

// ===== 汎用ユーティリティ =====
function shuffle(arr) {
    const a = arr.slice();
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
}

// ===== 画面切替 =====
function show(id) {
    document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
    document.getElementById(id).classList.add('active');
    window.scrollTo(0, 0);
}

function setHpBar(fillId, textId, hp, max) {
    const pct = Math.max(0, (hp / max) * 100);
    const fill = document.getElementById(fillId);
    fill.style.width = pct + '%';
    fill.className = 'hp-fill' + (pct < 30 ? ' danger' : pct < 60 ? ' warning' : '');
    if (textId) document.getElementById(textId).textContent = `${hp}/${max}`;
}

function showHowToPlay() { show('howToPlayScreen'); }

function exitBattle() {
    synthTimers.forEach(t => clearTimeout(t));
    synthTimers = [];
    show('titleScreen');
}

// ===== マップ =====
function openMap() {
    gs.playerHp = gs.playerMaxHp;
    renderMap();
    show('mapScreen');
}

function renderMap() {
    const grid = document.getElementById('stageGrid');
    grid.innerHTML = '';
    STAGES.forEach(stage => {
        const isBoss = stage.kanjiIds.length === 0;
        const cleared = progress.clearedStages.includes(stage.id);
        const totalInStage = isBoss ? KANJI_LIST.length : stage.kanjiIds.length;
        const learnedInStage = isBoss
            ? progress.masteredIds.length
            : stage.kanjiIds.filter(id => progress.learnedIds.includes(id)).length;

        const card = document.createElement('div');
        card.className = 'stage-card' + (cleared ? ' cleared' : '') + (isBoss ? ' boss' : '');
        card.innerHTML = `
            <div class="stage-icon">${stage.icon}</div>
            <div class="stage-name">${stage.name}</div>
            <div class="stage-skill">${isBoss ? 'まぎらわしい漢字の総まとめ' : `${totalInStage}字のエリア`}</div>
            <div class="stage-status">${cleared ? '⭐ クリア済み' : `覚えた: ${learnedInStage}/${totalInStage}`}</div>`;
        card.addEventListener('click', () => openStageIntro(stage.id));
        grid.appendChild(card);
    });

    setHpBar('mapHpFill', 'mapHpText', gs.playerHp, gs.playerMaxHp);
    document.getElementById('mapLevel').textContent = `覚えた漢字: ${progress.learnedIds.length} / ${KANJI_LIST.length}字`;
    document.getElementById('mapStreak').textContent = progress.streak;
}

// ===== ステージ紹介 =====
function openStageIntro(stageId) {
    gs.stageId = stageId;
    const s = STAGES[stageId];
    const isBoss = s.kanjiIds.length === 0;
    document.getElementById('introContent').innerHTML = `
        <div class="intro-title">${s.icon} ${s.name}</div>
        <div class="intro-enemy">${s.enemy.sprite}</div>
        <div class="intro-enemy-name">「${s.enemy.name}」が立ちふさがった！</div>
        <div class="intro-skill-box">${s.description}</div>
        <div class="intro-meta">${isBoss
            ? 'これまで学んだ漢字の中から、まぎらわしい字を集めた最終試練だ。'
            : `漢字数：${s.kanjiIds.length}字 ／ 敵HP：${s.enemy.maxHp}`}</div>`;
    show('stageIntroScreen');
}

function backToMap() { openMap(); }

// ===== ステージバトル開始 =====
function startStageBattle() {
    const s = STAGES[gs.stageId];
    gs.mode = 'stage';
    let ids;
    if (s.kanjiIds.length === 0) {
        const learnedPool = KANJI_LIST.map(k => k.id).filter(id => progress.learnedIds.includes(id));
        const pool = learnedPool.length ? learnedPool : KANJI_LIST.map(k => k.id);
        ids = shuffle(pool).slice(0, 16);
    } else {
        ids = s.kanjiIds.slice();
    }
    gs.queue = buildStageQueue(ids);
    beginBattle();
}

function buildStageQueue(ids) {
    const queue = [];
    ids.forEach(id => {
        if (!progress.learnedIds.includes(id)) queue.push(makeIntroItem(id));
        queue.push(makeQuizItem(id, 'stage'));
    });
    return queue;
}

// ===== 今日の特訓 =====
function startDailyBattle() {
    gs.mode = 'daily';
    gs.stageId = null;
    gs.queue = buildTodayQueue();
    beginBattle();
}

function buildTodayQueue() {
    const dueIds = getDueReviewIds(DAILY_MAX);
    const reviewItems = dueIds.map(id => makeQuizItem(id, 'review'));

    const targetTotal = Math.min(DAILY_MAX, Math.max(DAILY_MIN, reviewItems.length));
    const newNeeded = Math.max(0, targetTotal - reviewItems.length);
    const newIds = pickNextNewKanji(newNeeded);
    const newItems = [];
    newIds.forEach(id => {
        newItems.push(makeIntroItem(id));
        newItems.push(makeQuizItem(id, 'new'));
    });

    if (reviewItems.length === 0 && newItems.length === 0) {
        if (progress.masteredIds.length === 0) {
            pickNextNewKanji(DAILY_MIN).forEach(id => {
                newItems.push(makeIntroItem(id));
                newItems.push(makeQuizItem(id, 'new'));
            });
        } else {
            return shuffle(progress.masteredIds).slice(0, DAILY_MIN).map(id => makeQuizItem(id, 'reinforce'));
        }
    }
    return reviewItems.concat(newItems);
}

function pickNextNewKanji(n) {
    if (n <= 0) return [];
    return KANJI_LIST.filter(k => !progress.learnedIds.includes(k.id)).slice(0, n).map(k => k.id);
}

// ===== まちがいノート =====
function openNotebook() {
    renderNotebook();
    show('notebookScreen');
}

function renderNotebook() {
    const list = document.getElementById('notebookList');
    const entries = Object.entries(progress.reviewQueue);
    const btn = document.getElementById('notebookReviewBtn');

    if (entries.length === 0) {
        list.innerHTML = '<div class="notebook-empty">まちがえた漢字はありません。えらい！</div>';
        btn.disabled = true;
        btn.textContent = '今すぐ復習する 📕';
        return;
    }

    const today = todayStr();
    entries.sort((a, b) => a[1].dueDate.localeCompare(b[1].dueDate));
    list.innerHTML = entries.map(([id, rec]) => {
        const k = KANJI_BY_ID[id];
        const isDue = rec.dueDate <= today;
        return `<div class="notebook-item">
            <div class="notebook-kanji-info">
                <span class="notebook-kanji">${k.kanji}</span>
                <span class="notebook-meaning">${k.meaning}</span>
            </div>
            <span class="due-badge ${isDue ? 'today' : 'upcoming'}">${isDue ? '今すぐ復習' : rec.dueDate + 'から'}</span>
        </div>`;
    }).join('');

    const dueCount = entries.filter(([, rec]) => rec.dueDate <= today).length;
    btn.disabled = dueCount === 0;
    btn.textContent = dueCount === 0 ? 'まだ復習の時期じゃないよ' : `今すぐ復習する (${dueCount}字) 📕`;
}

function startNotebookReview() {
    const dueIds = getDueReviewIds(50);
    if (dueIds.length === 0) return;
    gs.mode = 'review';
    gs.stageId = null;
    gs.queue = dueIds.map(id => makeQuizItem(id, 'review'));
    beginBattle();
}

// ===== バトル共通処理 =====
function beginBattle() {
    if (gs.queue.length === 0) {
        openMap();
        return;
    }
    gs.qIdx = 0;
    gs.correctCount = 0;
    gs.quizCount = gs.queue.filter(i => i.type === 'quiz').length;
    gs.enemyMaxHp = Math.max(20, gs.quizCount * 20);
    gs.enemyHp = gs.enemyMaxHp;
    gs.playerHp = gs.playerMaxHp;

    const enemy = currentEnemy();
    document.getElementById('enemySprite').textContent = enemy.sprite;
    document.getElementById('enemyLabel').textContent = `👾 ${enemy.name}`;
    document.getElementById('battleStageChip').textContent = currentChipLabel();

    updateBattleHPs();
    show('battleScreen');
    renderBattleItem();
}

function currentEnemy() {
    if (gs.mode === 'stage') return STAGES[gs.stageId].enemy;
    if (gs.mode === 'daily') return { name: '今日のもののけ', sprite: '👻' };
    return { name: '思い出しの影', sprite: '🌑' };
}
function currentChipLabel() {
    if (gs.mode === 'stage') { const s = STAGES[gs.stageId]; return `${s.icon} ${s.name}`; }
    if (gs.mode === 'daily') return '🔥 今日の特訓';
    return '📕 まちがいノート復習';
}

function updateBattleHPs() {
    setHpBar('playerHpFill', 'playerHpText', gs.playerHp, gs.playerMaxHp);
    setHpBar('enemyHpFill', 'enemyHpText', gs.enemyHp, gs.enemyMaxHp);
    document.getElementById('enemyHpFill').className = 'hp-fill enemy-fill';
    document.getElementById('qProgress').textContent = `${gs.qIdx + 1} / ${gs.queue.length}`;
}

function renderBattleItem() {
    const item = gs.queue[gs.qIdx];
    document.getElementById('qProgress').textContent = `${gs.qIdx + 1} / ${gs.queue.length}`;
    const introPanel = document.getElementById('introPanel');
    const quizPanel = document.getElementById('quizPanel');
    if (item.type === 'intro') {
        introPanel.style.display = 'block';
        quizPanel.style.display = 'none';
        renderIntro(item);
    } else {
        introPanel.style.display = 'none';
        quizPanel.style.display = 'block';
        renderQuiz(item);
    }
}

// ===== 新出漢字：パーツ合成演出 =====
function makeIntroItem(kanjiId) { return { type: 'intro', kanjiId }; }

let currentIntroKanjiId = null;
let synthTimers = [];

function renderIntro(item) {
    currentIntroKanjiId = item.kanjiId;
    const k = KANJI_BY_ID[item.kanjiId];
    document.getElementById('writeOnceKanji').textContent = k.kanji;
    const card = document.getElementById('kanjiInfoCard');
    card.classList.remove('show');
    card.innerHTML = '';
    document.getElementById('synthReplayBtn').style.display = 'none';
    runSynthesisAnimation(k);
}

function replaySynthesis() {
    if (currentIntroKanjiId == null) return;
    const k = KANJI_BY_ID[currentIntroKanjiId];
    document.getElementById('kanjiInfoCard').classList.remove('show');
    document.getElementById('synthReplayBtn').style.display = 'none';
    runSynthesisAnimation(k);
}

function runSynthesisAnimation(k) {
    synthTimers.forEach(t => clearTimeout(t));
    synthTimers = [];

    const stage = document.getElementById('synthStage');
    stage.querySelectorAll('.synth-part, .synth-part-label').forEach(el => el.remove());
    const resultEl = document.getElementById('synthResult');
    resultEl.textContent = '';
    resultEl.classList.remove('show');

    const positions = [{ x: -70, y: -10 }, { x: 70, y: -10 }, { x: 0, y: 55 }];
    const partEls = k.parts.map((p, i) => {
        const el = document.createElement('div');
        el.className = 'synth-part';
        el.textContent = p.char;
        const pos = positions[i % positions.length];
        el.style.transform = `translate(${pos.x}px, ${pos.y}px)`;
        stage.insertBefore(el, resultEl);

        const label = document.createElement('div');
        label.className = 'synth-part-label';
        label.textContent = p.label;
        label.style.transform = `translate(${pos.x}px, ${pos.y + 34}px)`;
        stage.insertBefore(label, resultEl);

        return { el, label };
    });

    requestAnimationFrame(() => {
        requestAnimationFrame(() => {
            partEls.forEach(({ el, label }) => { el.style.opacity = '1'; label.style.opacity = '1'; });
        });
    });

    synthTimers.push(setTimeout(() => {
        partEls.forEach(({ el, label }) => {
            el.style.transform = 'translate(0,0) scale(0.6)';
            el.style.opacity = '0';
            label.style.opacity = '0';
        });
    }, 1800));

    synthTimers.push(setTimeout(() => {
        resultEl.textContent = k.kanji;
        resultEl.classList.add('show');
        showKanjiInfoCard(k);
        document.getElementById('synthReplayBtn').style.display = 'inline-block';
    }, 3000));
}

function showKanjiInfoCard(k) {
    const card = document.getElementById('kanjiInfoCard');
    const compoundsHtml = k.compounds
        .map(c => `<span class="compound-chip"><b>${c.word}</b>（${c.reading}）… ${c.sentence}</span>`)
        .join('');
    card.innerHTML = `
        <div class="kanji-reading-row">
            <span>音読み: ${k.onyomi.join('、') || 'なし'}</span>
            <span>訓読み: ${k.kunyomi.join('、') || 'なし'}</span>
        </div>
        <div class="kanji-meaning">${k.meaning}</div>
        <div class="kanji-story">🧩 ${k.partsStory}</div>
        <div>${compoundsHtml}</div>`;
    requestAnimationFrame(() => card.classList.add('show'));
}

function confirmWritten() { advanceQueue(); }

// ===== クイズ生成 =====
function makeQuizItem(kanjiId, source) {
    const k = KANJI_BY_ID[kanjiId];
    const types = ['reading', 'meaning', 'fillBlank'];
    const quizType = types[Math.floor(Math.random() * types.length)];
    const compound = k.compounds[Math.floor(Math.random() * k.compounds.length)];

    if (quizType === 'reading') {
        const distractors = pickDistractorReadings(compound.reading, 3);
        const choices = shuffle([compound.reading, ...distractors]);
        return {
            type: 'quiz', kanjiId, source, quizType,
            question: `「${compound.word}」の読み方は？`,
            choices, answer: compound.reading,
            explanation: `「${compound.word}」は「${compound.reading}」と読む。${compound.sentence}`,
        };
    }
    if (quizType === 'meaning') {
        const distractors = pickConfusableChars(k, 3);
        const choices = shuffle([k.kanji, ...distractors]);
        return {
            type: 'quiz', kanjiId, source, quizType,
            question: `つぎの意味を表す漢字は？\n「${k.meaning}」`,
            choices, answer: k.kanji,
            explanation: `正解は「${k.kanji}」。${k.partsStory}`,
        };
    }
    const distractors = pickConfusableChars(k, 3);
    const choices = shuffle([k.kanji, ...distractors]);
    const blanked = compound.sentence.split(k.kanji).join('＿');
    return {
        type: 'quiz', kanjiId, source, quizType,
        question: `${blanked}\n＿に入る漢字は？`,
        choices, answer: k.kanji,
        explanation: `正解は「${k.kanji}」。「${compound.word}（${compound.reading}）」だね。`,
    };
}

function pickConfusableChars(k, n) {
    const ids = k.confusables.slice();
    const pool = KANJI_LIST.map(x => x.id).filter(id => id !== k.id && !ids.includes(id));
    while (ids.length < n && pool.length) {
        const idx = Math.floor(Math.random() * pool.length);
        ids.push(pool.splice(idx, 1)[0]);
    }
    return shuffle(ids).slice(0, n).map(id => KANJI_BY_ID[id].kanji);
}

function pickDistractorReadings(correctReading, n) {
    const pool = [];
    KANJI_LIST.forEach(k => k.compounds.forEach(c => { if (c.reading !== correctReading) pool.push(c.reading); }));
    const used = new Set([correctReading]);
    const result = [];
    while (result.length < n && pool.length) {
        const idx = Math.floor(Math.random() * pool.length);
        const r = pool.splice(idx, 1)[0];
        if (!used.has(r)) { used.add(r); result.push(r); }
    }
    return result;
}

function quizTypeLabel(t) {
    if (t === 'reading') return '📖 読み方クイズ';
    if (t === 'meaning') return '💡 意味クイズ';
    return '📝 穴うめクイズ';
}

function renderQuiz(item) {
    document.getElementById('skillBadge').textContent = quizTypeLabel(item.quizType);
    document.getElementById('qText').innerText = item.question;
    const choicesEl = document.getElementById('choices');
    choicesEl.innerHTML = '';
    item.choices.forEach(text => {
        const btn = document.createElement('button');
        btn.className = 'choice-btn';
        btn.textContent = text;
        btn.addEventListener('click', () => onQuizAnswer(item, text));
        choicesEl.appendChild(btn);
    });
    document.getElementById('feedbackBox').style.display = 'none';
}

// ===== 回答処理 =====
function onQuizAnswer(item, chosen) {
    const correct = chosen === item.answer;

    document.querySelectorAll('.choice-btn').forEach(btn => {
        btn.disabled = true;
        if (btn.textContent === item.answer) btn.classList.add('correct');
        else if (btn.textContent === chosen && !correct) btn.classList.add('wrong');
    });

    markLearned(item.kanjiId);
    const dmgPerQ = Math.ceil(gs.enemyMaxHp / Math.max(1, gs.quizCount));

    if (correct) {
        gs.correctCount++;
        gs.enemyHp = Math.max(0, gs.enemyHp - dmgPerQ);
        if (item.source === 'review' || item.source === 'reinforce') onReviewCorrect(item.kanjiId);
        popDamage(`-${dmgPerQ}!!`, false);
        shakeEnemy();
    } else {
        gs.playerHp = Math.max(0, gs.playerHp - 12);
        onReviewWrong(item.kanjiId);
        popDamage('-12', true);
        flashPlayer();
    }

    progress.totalAnswered++;
    if (correct) progress.totalCorrect++;
    saveProgress();
    updateBattleHPs();
    showFeedback(correct, item.explanation);
}

function showFeedback(ok, explanation) {
    const fb = document.getElementById('feedbackBox');
    fb.className = 'feedback ' + (ok ? 'ok' : 'ng');
    fb.innerHTML = `
        <strong>${ok ? '⭕ 正解！' : '❌ まちがい！'}</strong>
        <div class="expl">${explanation}</div>
        <button class="btn btn-primary" onclick="advanceQueue()">つぎへ ▶</button>`;
    fb.style.display = 'block';
}

function advanceQueue() {
    if (gs.playerHp <= 0) { saveProgress(); show('gameOverScreen'); return; }
    gs.qIdx++;
    if (gs.qIdx >= gs.queue.length || gs.enemyHp <= 0) {
        endBattle();
    } else {
        renderBattleItem();
    }
}

// ===== バトル終了 =====
function endBattle() {
    const win = gs.playerHp > 0;
    if (win) {
        gs.playerHp = Math.min(gs.playerMaxHp, gs.playerHp + 20);
        if (gs.mode === 'stage' && !progress.clearedStages.includes(gs.stageId)) {
            progress.clearedStages.push(gs.stageId);
        }
        if (gs.mode === 'daily') updateStreak();
        saveProgress();
        showClear();
        checkAllMastered();
    } else {
        saveProgress();
        show('gameOverScreen');
    }
}

function updateStreak() {
    const today = todayStr();
    if (progress.lastPlayedDate === today) return;
    const yesterday = addDays(today, -1);
    progress.streak = (progress.lastPlayedDate === yesterday) ? progress.streak + 1 : 1;
    progress.lastPlayedDate = today;
}

function checkAllMastered() {
    if (progress.masteredIds.length >= KANJI_LIST.length && Object.keys(progress.reviewQueue).length === 0) {
        document.getElementById('masteredStreak').textContent = progress.streak + '日';
        setTimeout(() => show('allMasteredScreen'), 600);
    }
}

function showClear() {
    const newCount = gs.queue.filter(i => i.type === 'intro').length;
    const reviewCount = gs.queue.filter(i => i.type === 'quiz' && i.source === 'review').length;

    let title = '⭐ クリア！ ⭐';
    if (gs.mode === 'stage') title = `⭐ ${STAGES[gs.stageId].name} クリア！ ⭐`;
    else if (gs.mode === 'daily') title = '🔥 今日の特訓 終了！ 🔥';
    else title = '📕 復習おわり！ 📕';
    document.getElementById('clearTitle').textContent = title;

    document.getElementById('clearContent').innerHTML = `
        <div class="score-box">
            <div class="score-row"><span>正解数</span><span style="color:#2ecc71;font-weight:bold">${gs.correctCount} / ${gs.quizCount}</span></div>
            <div class="score-row"><span>新しく覚えた漢字</span><span style="color:#f7d774">${newCount}字</span></div>
            <div class="score-row"><span>復習した漢字</span><span style="color:#a8d8ea">${reviewCount}字</span></div>
            <div class="score-row"><span>HP回復</span><span style="color:#2ecc71">＋20</span></div>
        </div>
        ${gs.mode === 'daily' ? `<div class="skill-up">🔥 ${progress.streak}日連続達成！</div>` : ''}`;

    const nextBtn = document.getElementById('clearNextBtn');
    if (gs.mode === 'stage') {
        nextBtn.textContent = 'マップへもどる 🗺️';
        nextBtn.onclick = backToMap;
    } else {
        nextBtn.textContent = 'タイトルへもどる 🏠';
        nextBtn.onclick = () => show('titleScreen');
    }

    show('stageClearScreen');
}

function retryBattle() {
    gs.playerHp = Math.max(40, gs.playerHp);
    beginBattle();
}

// ===== エフェクト =====
function popDamage(text, isPlayer) {
    const el = document.getElementById(isPlayer ? 'playerDmgPop' : 'dmgPop');
    el.textContent = text;
    el.style.transition = 'none';
    el.style.opacity = '1';
    el.style.transform = 'translateY(0)';
    requestAnimationFrame(() => {
        requestAnimationFrame(() => {
            el.style.transition = 'opacity 0.9s ease, transform 0.9s ease';
            el.style.opacity = '0';
            el.style.transform = 'translateY(-50px)';
        });
    });
}

function shakeEnemy() {
    const el = document.getElementById('enemySprite');
    const frames = ['-12px', '12px', '-6px', '6px', '0'];
    frames.forEach((x, i) => setTimeout(() => el.style.transform = `translateX(${x})`, i * 80));
}

function flashPlayer() {
    const fill = document.getElementById('playerHpFill');
    fill.style.background = '#e74c3c';
    setTimeout(() => {
        const pct = (gs.playerHp / gs.playerMaxHp) * 100;
        fill.style.background = '';
        fill.className = 'hp-fill' + (pct < 30 ? ' danger' : pct < 60 ? ' warning' : '');
    }, 500);
}

// ===== 起動 =====
window.addEventListener('load', () => show('titleScreen'));
