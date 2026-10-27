// game.js - 漢字クエスト ゲームエンジン

// ===== 学年えらび =====
const GRADES = [1, 2, 3, 4, 5];
const GRADE_STORAGE_KEY = 'kanji-quest-selected-grade';

// 1〜4年生は画数の少ない字から順に学ぶ（書き順の練習がやさしい字から始まるように）
function gradeKanjiList(grade) {
    if (grade === 5) return KANJI_LIST;
    return REVIEW_KANJI_LIST.filter(k => k.grade === grade)
        .sort((a, b) => strokeCount(a.kanji) - strokeCount(b.kanji));
}
function gradeKanjiById(grade) { return grade === 5 ? KANJI_BY_ID : REVIEW_KANJI_BY_ID; }

function loadSelectedGrade() {
    try {
        const saved = Number(localStorage.getItem(GRADE_STORAGE_KEY));
        if (GRADES.includes(saved)) return saved;
        // 学年えらび導入前に5年生で遊んでいた場合は、その続きから始める
        return localStorage.getItem(progressStorageKey(5)) ? 5 : 1;
    } catch (e) {
        return 1;
    }
}

// ===== 永続化（学習記録・学年ごと） =====
// 5年生は学年えらび導入前からのキーをそのまま使い、既存の学習記録を引き継ぐ
function progressStorageKey(grade) {
    return grade === 5 ? 'kanji-quest-progress-v1' : `kanji-quest-progress-g${grade}-v1`;
}

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

function loadProgress(grade) {
    try {
        const raw = localStorage.getItem(progressStorageKey(grade));
        if (!raw) return defaultProgress();
        const parsed = JSON.parse(raw);
        if (!Array.isArray(parsed.learnedIds)) return defaultProgress();
        return Object.assign(defaultProgress(), parsed);
    } catch (e) {
        return defaultProgress();
    }
}

function saveProgress() {
    localStorage.setItem(progressStorageKey(currentGrade), JSON.stringify(progress));
}

let currentGrade = loadSelectedGrade();
let kanjiList = gradeKanjiList(currentGrade);
let kanjiById = gradeKanjiById(currentGrade);
let progress = loadProgress(currentGrade);

function selectGrade(grade) {
    currentGrade = grade;
    try { localStorage.setItem(GRADE_STORAGE_KEY, String(grade)); } catch (e) { /* 保存できなくても遊べる */ }
    kanjiList = gradeKanjiList(grade);
    kanjiById = gradeKanjiById(grade);
    progress = loadProgress(grade);
    renderTitle();
}

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
    mode: null,          // 'daily' | 'stage' | 'review' | 'reviewGrade'
    stageId: null,
    reviewGrade: null,
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

// ===== タイトル画面 =====
const TITLE_STORY_LEAD = {
    1: '漢字のなりたちと書き順を学び、',
    2: '漢字の形と書き順を身につけ、',
    3: '漢字の形と書き順を身につけ、',
    4: '漢字をパーツに分解し、',
    5: '漢字をパーツに分解し、',
};

function renderTitle() {
    const sel = document.getElementById('gradeSelect');
    sel.innerHTML = '';
    GRADES.forEach(g => {
        const btn = document.createElement('button');
        btn.className = 'grade-btn' + (g === currentGrade ? ' active' : '');
        btn.textContent = `${g}年`;
        btn.addEventListener('click', () => selectGrade(g));
        sel.appendChild(btn);
    });

    document.getElementById('titleStory').innerHTML = `
        小学${currentGrade}年生の${kanjiList.length}字が眠る<br>
        王国に、「丸暗記の霧」が<br>
        立ちこめている。<br>
        ${TITLE_STORY_LEAD[currentGrade]}<br>
        熟語で使いこなす力で<br>
        霧を晴らす勇者になろう！`;

    // ステージマップは5年生専用、成長の街道は選んだ学年より下の学年のおさらい
    document.getElementById('titleMapBtn').style.display = currentGrade === 5 ? '' : 'none';
    document.getElementById('titleReviewBtn').style.display = currentGrade >= 2 ? '' : 'none';
    document.getElementById('titleDexBtn').textContent = `📖 漢字ずかん（${kanjiList.length}字）`;
}

function exitBattle() {
    synthTimers.forEach(t => clearTimeout(t));
    synthTimers = [];
    stopIntroStrokeBox();
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

// 新出漢字は「書く」をまとめてから、そのクイズをまちがいノート復習と混ぜて
// まとめて出題する（想起までの間隔をあけるほど記憶定着が良くなる lag effect ＋
// 異なる漢字を交互に出す interleaving を狙った構成）。
function buildTodayQueue() {
    const dueIds = getDueReviewIds(DAILY_MAX);
    const reviewItems = dueIds.map(id => makeQuizItem(id, 'review'));

    const targetTotal = Math.min(DAILY_MAX, Math.max(DAILY_MIN, reviewItems.length));
    const newNeeded = Math.max(0, targetTotal - reviewItems.length);
    let newIds = pickNextNewKanji(newNeeded);

    if (reviewItems.length === 0 && newIds.length === 0) {
        if (progress.masteredIds.length === 0) {
            newIds = pickNextNewKanji(DAILY_MIN);
        } else {
            return shuffle(progress.masteredIds).slice(0, DAILY_MIN).map(id => makeQuizItem(id, 'reinforce'));
        }
    }

    const introItems = newIds.map(id => makeIntroItem(id));
    const newQuizItems = newIds.flatMap(id => makeNewKanjiQuizItems(id));
    const quizBlock = shuffleSeparatingSameKanji(reviewItems.concat(newQuizItems));

    return introItems.concat(quizBlock);
}

function pickNextNewKanji(n) {
    if (n <= 0) return [];
    return kanjiList.filter(k => !progress.learnedIds.includes(k.id)).slice(0, n).map(k => k.id);
}

// 新出漢字は読み方・穴うめ・意味の3問すべてを出題する（字↔読みを双方向で
// 想起させることで結びつきを強く定着させるため）。2つの熟語を使い分けて
// 語彙のカバー範囲も広げる。
function makeNewKanjiQuizItems(kanjiId) {
    const k = kanjiById[kanjiId];
    const readingCompound = k.compounds[0];
    const fillCompound = k.compounds[1] || k.compounds[0];

    const readingItem = {
        type: 'quiz', kanjiId, source: 'new', quizType: 'reading', inputType: 'text',
        question: `「${readingCompound.word}」の読み方は？（ひらがなで入力）`,
        answer: readingCompound.reading,
        explanation: `「${readingCompound.word}」は「${readingCompound.reading}」と読む。${readingCompound.sentence}`,
    };

    const fillDistractors = pickConfusableChars(k, 3);
    const blanked = fillCompound.sentence.split(k.kanji).join('＿');
    const fillItem = {
        type: 'quiz', kanjiId, source: 'new', quizType: 'fillBlank',
        question: `${blanked}\n＿に入る漢字は？`,
        choices: shuffle([k.kanji, ...fillDistractors]), answer: k.kanji,
        explanation: `正解は「${k.kanji}」。「${fillCompound.word}（${fillCompound.reading}）」だね。`,
    };

    const meaningDistractors = pickConfusableChars(k, 3);
    const meaningItem = {
        type: 'quiz', kanjiId, source: 'new', quizType: 'meaning',
        question: `つぎの意味を表す漢字は？\n「${k.meaning}」`,
        choices: shuffle([k.kanji, ...meaningDistractors]), answer: k.kanji,
        explanation: `正解は「${k.kanji}」。${kanjiStory(k)}`,
    };

    return [readingItem, fillItem, meaningItem];
}

// 通常のshuffleに加えて、同じ漢字の複数問が隣り合わないよう調整する。
// 直後に来ると想起の間隔効果が薄れてしまうため。数パス回して、1回のスワップで
// 別の隣接違反を生まないような交換相手を探す。
function shuffleSeparatingSameKanji(items) {
    const arr = shuffle(items);
    for (let pass = 0; pass < 3; pass++) {
        let changed = false;
        for (let i = 1; i < arr.length; i++) {
            if (arr[i].kanjiId !== arr[i - 1].kanjiId) continue;
            const swapIdx = arr.findIndex((item, j) =>
                j !== i && item.kanjiId !== arr[i - 1].kanjiId &&
                (j === 0 || arr[j - 1].kanjiId !== arr[i].kanjiId) &&
                (j === arr.length - 1 || arr[j + 1].kanjiId !== arr[i].kanjiId));
            if (swapIdx !== -1) {
                [arr[i], arr[swapIdx]] = [arr[swapIdx], arr[i]];
                changed = true;
            }
        }
        if (!changed) break;
    }
    return arr;
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
        const k = kanjiById[id];
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

// ===== 1〜4年生 漢字おさらい =====
const REVIEW_STORAGE_KEY = 'kanji-quest-review-progress-v1';
const REVIEW_BATCH_SIZE = 10;

function defaultReviewProgress() {
    return { masteredIds: [], totalCorrect: 0, totalAnswered: 0 };
}
function loadReviewProgress() {
    try {
        const raw = localStorage.getItem(REVIEW_STORAGE_KEY);
        if (!raw) return defaultReviewProgress();
        const parsed = JSON.parse(raw);
        if (!Array.isArray(parsed.masteredIds)) return defaultReviewProgress();
        return Object.assign(defaultReviewProgress(), parsed);
    } catch (e) {
        return defaultReviewProgress();
    }
}
function saveReviewProgress() {
    localStorage.setItem(REVIEW_STORAGE_KEY, JSON.stringify(reviewProgress));
}
let reviewProgress = loadReviewProgress();

function openReviewMap() {
    renderReviewMap();
    show('reviewMapScreen');
}

function renderReviewMap() {
    const grid = document.getElementById('reviewGradeGrid');
    grid.innerHTML = '';
    REVIEW_GRADES.filter(g => g.grade < currentGrade).forEach(g => {
        const pool = REVIEW_KANJI_LIST.filter(k => k.grade === g.grade);
        const masteredInGrade = pool.filter(k => reviewProgress.masteredIds.includes(k.id)).length;
        const allMastered = pool.length > 0 && masteredInGrade === pool.length;

        const card = document.createElement('div');
        card.className = 'stage-card' + (allMastered ? ' cleared' : '');
        card.innerHTML = `
            <div class="stage-icon">${g.icon}</div>
            <div class="stage-name">${g.name}</div>
            <div class="stage-skill">${pool.length}字のエリア</div>
            <div class="stage-status">${allMastered ? '⭐ マスター済み' : `覚えた: ${masteredInGrade}/${pool.length}`}</div>`;
        card.addEventListener('click', () => startGradeReviewBattle(g.grade));
        grid.appendChild(card);
    });
}

function startGradeReviewBattle(grade) {
    gs.mode = 'reviewGrade';
    gs.reviewGrade = grade;
    gs.queue = buildGradeReviewQueue(grade);
    beginBattle();
}

function buildGradeReviewQueue(grade) {
    const pool = REVIEW_KANJI_LIST.filter(k => k.grade === grade).map(k => k.id);
    const notMastered = pool.filter(id => !reviewProgress.masteredIds.includes(id));
    const source = notMastered.length ? notMastered : pool;
    const ids = shuffle(source).slice(0, Math.min(REVIEW_BATCH_SIZE, source.length));
    return ids.map(id => makeReviewQuizItem(id));
}

function makeReviewQuizItem(kanjiId) {
    const k = REVIEW_KANJI_BY_ID[kanjiId];
    const types = ['reading', 'meaning', 'fillBlank', 'writing'];
    const quizType = types[Math.floor(Math.random() * types.length)];
    const compound = k.compounds[Math.floor(Math.random() * k.compounds.length)];

    if (quizType === 'reading') {
        return {
            type: 'quiz', kanjiId, isReview: true, quizType, inputType: 'text',
            question: `「${compound.word}」の読み方は？（ひらがなで入力）`,
            answer: compound.reading,
            explanation: `「${compound.word}」は「${compound.reading}」と読む。${compound.sentence}`,
        };
    }
    if (quizType === 'writing') {
        const blanked = compound.sentence.split(k.kanji).join('＿');
        return {
            type: 'quiz', kanjiId, isReview: true, quizType, inputType: 'writing',
            question: `${blanked}\n（${compound.reading}）\n＿に入る漢字を書いてみよう`,
            answer: k.kanji,
            explanation: `正解は「${k.kanji}」。「${compound.word}（${compound.reading}）」だね。`,
        };
    }
    if (quizType === 'meaning') {
        const distractors = pickReviewConfusableChars(k, 3);
        const choices = shuffle([k.kanji, ...distractors]);
        return {
            type: 'quiz', kanjiId, isReview: true, quizType,
            question: `つぎの意味を表す漢字は？\n「${k.meaning}」`,
            choices, answer: k.kanji,
            explanation: `正解は「${k.kanji}」。音読み: ${k.onyomi.join('、') || 'なし'}／訓読み: ${k.kunyomi.join('、') || 'なし'}`,
        };
    }
    const distractors = pickReviewConfusableChars(k, 3);
    const choices = shuffle([k.kanji, ...distractors]);
    const blanked = compound.sentence.split(k.kanji).join('＿');
    return {
        type: 'quiz', kanjiId, isReview: true, quizType,
        question: `${blanked}\n＿に入る漢字は？`,
        choices, answer: k.kanji,
        explanation: `正解は「${k.kanji}」。「${compound.word}（${compound.reading}）」だね。`,
    };
}

function pickReviewConfusableChars(k, n) {
    const pool = REVIEW_KANJI_LIST.map(x => x.id).filter(id => id !== k.id);
    return shuffle(pool).slice(0, n).map(id => REVIEW_KANJI_BY_ID[id].kanji);
}

// ===== 漢字ずかん（いつでも振り返り） =====
const DEX_SYNTH_IDS = { stage: 'dexSynthStage', result: 'dexSynthResult', card: 'dexKanjiInfoCard', replayBtn: 'dexReplayBtn' };

let currentDexKanjiId = null;
let dexStrokeBox = null;

// 1〜4年生は「成長の街道」でマスターした字も覚えた扱いにする
function isDexLearned(id) {
    if (progress.learnedIds.includes(id)) return true;
    return currentGrade < 5 && reviewProgress.masteredIds.includes(id);
}

function openKanjiDex() {
    document.getElementById('dexTitle').textContent = `📖 漢字ずかん（${currentGrade}年生）`;
    document.getElementById('dexSubtitle').textContent = `${currentGrade}年生${kanjiList.length}字、いつでも見返せるよ。⭐は覚えた漢字。`;
    renderDexGrid();
    show('kanjiDexScreen');
}

function renderDexGrid() {
    const grid = document.getElementById('dexGrid');
    grid.innerHTML = '';
    kanjiList.forEach(k => {
        const learned = isDexLearned(k.id);
        const item = document.createElement('div');
        item.className = 'dex-item' + (learned ? ' learned' : '');
        item.innerHTML = `${k.kanji}${learned ? '<span class="dex-star">⭐</span>' : ''}`;
        item.addEventListener('click', () => openDexDetail(k.id));
        grid.appendChild(item);
    });
}

function openDexDetail(kanjiId) {
    currentDexKanjiId = kanjiId;
    show('kanjiDexDetailScreen');
    renderDexDetail();
}

function renderDexDetail() {
    const k = kanjiById[currentDexKanjiId];
    document.getElementById('dexKanjiInfoCard').classList.remove('show');
    document.getElementById('dexKanjiInfoCard').innerHTML = '';
    document.getElementById('dexReplayBtn').style.display = 'none';
    const idx = kanjiList.findIndex(x => x.id === currentDexKanjiId);
    document.getElementById('dexKanjiCounter').textContent = `${idx + 1} / ${kanjiList.length}`;
    runSynthesisAnimation(k, DEX_SYNTH_IDS);
    if (dexStrokeBox) dexStrokeBox.stop();
    dexStrokeBox = createStrokeBox(document.getElementById('dexStrokeArea'), k.kanji);
    dexStrokeBox.showAll();
}

function replayDexSynthesis() {
    if (currentDexKanjiId == null) return;
    const k = kanjiById[currentDexKanjiId];
    document.getElementById('dexKanjiInfoCard').classList.remove('show');
    document.getElementById('dexReplayBtn').style.display = 'none';
    runSynthesisAnimation(k, DEX_SYNTH_IDS);
}

function playDexStrokeDemo() { if (dexStrokeBox) dexStrokeBox.playDemo(); }
function startDexStrokePractice() { if (dexStrokeBox) dexStrokeBox.startPractice(); }

function prevDexKanji() {
    const idx = kanjiList.findIndex(k => k.id === currentDexKanjiId);
    openDexDetail(kanjiList[(idx - 1 + kanjiList.length) % kanjiList.length].id);
}
function nextDexKanji() {
    const idx = kanjiList.findIndex(k => k.id === currentDexKanjiId);
    openDexDetail(kanjiList[(idx + 1) % kanjiList.length].id);
}

// ===== 学習データのリセット =====
function resetAllProgress() {
    const ok = confirm('学習データを全てリセットします。\n（全学年の覚えた漢字・まちがいノート・連続日数・おさらいの進捗が全て消えます）\n\nよろしいですか？');
    if (!ok) return;
    GRADES.forEach(g => localStorage.removeItem(progressStorageKey(g)));
    localStorage.removeItem(REVIEW_STORAGE_KEY);
    progress = defaultProgress();
    reviewProgress = defaultReviewProgress();
    alert('学習データをリセットしました。');
}

// ===== バトル共通処理 =====
function beginBattle() {
    if (gs.queue.length === 0) {
        if (gs.mode === 'stage') openMap();
        else show('titleScreen');
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
    if (gs.mode === 'reviewGrade') return REVIEW_GRADES.find(g => g.grade === gs.reviewGrade).enemy;
    return { name: '思い出しの影', sprite: '🌑' };
}
function currentChipLabel() {
    if (gs.mode === 'stage') { const s = STAGES[gs.stageId]; return `${s.icon} ${s.name}`; }
    if (gs.mode === 'daily') return '🔥 今日の特訓';
    if (gs.mode === 'reviewGrade') { const g = REVIEW_GRADES.find(g => g.grade === gs.reviewGrade); return `${g.icon} ${g.name} おさらい`; }
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

const BATTLE_SYNTH_IDS = { stage: 'synthStage', result: 'synthResult', card: 'kanjiInfoCard', replayBtn: 'synthReplayBtn' };

function renderIntro(item) {
    currentIntroKanjiId = item.kanjiId;
    const k = kanjiById[item.kanjiId];
    stopIntroStrokeBox();
    document.getElementById('introLearnStep').style.display = 'block';
    document.getElementById('strokeStep').style.display = 'none';
    document.getElementById('writeOnceCompoundStep').style.display = 'none';
    document.getElementById('toStrokeStepBtn').style.display = 'none';
    const card = document.getElementById('kanjiInfoCard');
    card.classList.remove('show');
    card.innerHTML = '';
    document.getElementById('synthReplayBtn').style.display = 'none';
    runSynthesisAnimation(k, BATTLE_SYNTH_IDS, () => {
        document.getElementById('toStrokeStepBtn').style.display = 'inline-block';
    });
}

function replaySynthesis() {
    if (currentIntroKanjiId == null) return;
    const k = kanjiById[currentIntroKanjiId];
    document.getElementById('kanjiInfoCard').classList.remove('show');
    document.getElementById('synthReplayBtn').style.display = 'none';
    runSynthesisAnimation(k, BATTLE_SYNTH_IDS);
}

// 漢字の登場演出。1年生は絵→漢字のなりたち、パーツデータのある字はパーツ合体、
// それ以外はそのまま表示する。
function runSynthesisAnimation(k, ids, onReveal) {
    synthTimers.forEach(t => clearTimeout(t));
    synthTimers = [];

    const stage = document.getElementById(ids.stage);
    stage.querySelectorAll('.synth-part, .synth-part-label').forEach(el => el.remove());
    const resultEl = document.getElementById(ids.result);
    resultEl.textContent = '';
    resultEl.classList.remove('show');

    const floatEls = k.origin ? makeOriginEls(k, stage, resultEl)
        : (k.parts && k.parts.length) ? makePartEls(k, stage, resultEl)
        : [];

    requestAnimationFrame(() => {
        requestAnimationFrame(() => {
            floatEls.forEach(({ el, label }) => { el.style.opacity = '1'; if (label) label.style.opacity = '1'; });
        });
    });

    if (floatEls.length) {
        synthTimers.push(setTimeout(() => {
            floatEls.forEach(({ el, label }) => {
                el.style.transform = 'translate(0,0) scale(0.6)';
                el.style.opacity = '0';
                if (label) label.style.opacity = '0';
            });
        }, 1800));
    }

    synthTimers.push(setTimeout(() => {
        resultEl.textContent = k.kanji;
        resultEl.classList.add('show');
        showKanjiInfoCard(k, ids.card);
        document.getElementById(ids.replayBtn).style.display = floatEls.length ? 'inline-block' : 'none';
        if (onReveal) onReveal();
    }, floatEls.length ? 3000 : 300));
}

function makeOriginEls(k, stage, resultEl) {
    const el = document.createElement('div');
    el.className = 'synth-part synth-origin';
    el.textContent = k.origin.emoji;
    el.style.transform = 'translate(0,0) scale(1)';
    stage.insertBefore(el, resultEl);
    return [{ el }];
}

function makePartEls(k, stage, resultEl) {
    const positions = k.parts.length >= 4
        ? [{ x: -70, y: -25 }, { x: 70, y: -25 }, { x: -70, y: 60 }, { x: 70, y: 60 }]
        : [{ x: -70, y: -10 }, { x: 70, y: -10 }, { x: 0, y: 55 }];
    return k.parts.map((p, i) => {
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
}

// なりたち（1年生）・パーツの話（4・5年生）。どちらもない学年は読みで代用する
function kanjiStory(k) {
    if (k.origin) return k.origin.story;
    if (k.partsStory) return k.partsStory;
    return `音読み: ${k.onyomi.join('、') || 'なし'}／訓読み: ${k.kunyomi.join('、') || 'なし'}`;
}

function showKanjiInfoCard(k, cardId) {
    const card = document.getElementById(cardId);
    const compoundsHtml = k.compounds
        .map(c => `<span class="compound-chip"><b>${c.word}</b>（${c.reading}）… ${c.sentence}</span>`)
        .join('');
    const storyHtml = k.origin ? `<div class="kanji-story">🖼️ なりたち：${k.origin.story}</div>`
        : k.partsStory ? `<div class="kanji-story">🧩 ${k.partsStory}</div>`
        : '';
    card.innerHTML = `
        <div class="kanji-reading-row">
            <span>音読み: ${k.onyomi.join('、') || 'なし'}</span>
            <span>訓読み: ${k.kunyomi.join('、') || 'なし'}</span>
            <span>画数: ${strokeCount(k.kanji)}画</span>
        </div>
        <div class="kanji-meaning">${k.meaning}</div>
        ${storyHtml}
        <div>${compoundsHtml}</div>`;
    requestAnimationFrame(() => card.classList.add('show'));
}

// ===== 新出漢字：書き順（お手本アニメ → 判定つきで1画ずつ書く） =====
let introStrokeBox = null;

function stopIntroStrokeBox() {
    if (introStrokeBox) introStrokeBox.stop();
    introStrokeBox = null;
}

function openIntroStrokeStep() {
    const k = kanjiById[currentIntroKanjiId];
    synthTimers.forEach(t => clearTimeout(t));
    synthTimers = [];
    document.getElementById('introLearnStep').style.display = 'none';
    document.getElementById('strokeStep').style.display = 'block';
    document.getElementById('strokeNextBtn').style.display = 'none';
    document.getElementById('strokeStepTitle').textContent = `「${k.kanji}」の書き順（${strokeCount(k.kanji)}画）`;
    document.getElementById('introPanel').scrollIntoView({ behavior: 'smooth', block: 'start' });
    introStrokeBox = createStrokeBox(document.getElementById('introStrokeArea'), k.kanji);
    playIntroStrokeDemo();
}

function playIntroStrokeDemo() {
    introStrokeBox.playDemo(() => {
        introStrokeBox.startPractice(() => {
            document.getElementById('strokeNextBtn').style.display = 'inline-block';
        });
    });
}

function replayIntroStrokeDemo() {
    if (!introStrokeBox) return;
    document.getElementById('strokeNextBtn').style.display = 'none';
    playIntroStrokeDemo();
}

function confirmWrittenKanji() {
    const k = kanjiById[currentIntroKanjiId];
    stopIntroStrokeBox();
    const compound = k.compounds[0];
    document.getElementById('writeOnceCompound').textContent = compound.word;
    document.getElementById('writeOnceCompoundReading').textContent = `（${compound.reading}）`;
    document.getElementById('strokeStep').style.display = 'none';
    document.getElementById('writeOnceCompoundStep').style.display = 'block';
}

function confirmWrittenCompound() { advanceQueue(); }

// ===== クイズ生成 =====
function makeQuizItem(kanjiId, source) {
    const k = kanjiById[kanjiId];
    const types = ['reading', 'meaning', 'fillBlank'];
    if (progress.learnedIds.includes(kanjiId)) types.push('writing');
    const quizType = types[Math.floor(Math.random() * types.length)];
    const compound = k.compounds[Math.floor(Math.random() * k.compounds.length)];

    if (quizType === 'reading') {
        return {
            type: 'quiz', kanjiId, source, quizType, inputType: 'text',
            question: `「${compound.word}」の読み方は？（ひらがなで入力）`,
            answer: compound.reading,
            explanation: `「${compound.word}」は「${compound.reading}」と読む。${compound.sentence}`,
        };
    }
    if (quizType === 'writing') {
        const blanked = compound.sentence.split(k.kanji).join('＿');
        return {
            type: 'quiz', kanjiId, source, quizType, inputType: 'writing',
            question: `${blanked}\n（${compound.reading}）\n＿に入る漢字を書いてみよう`,
            answer: k.kanji,
            explanation: `正解は「${k.kanji}」。「${compound.word}（${compound.reading}）」だね。${k.origin || k.partsStory ? kanjiStory(k) : ''}`,
        };
    }
    if (quizType === 'meaning') {
        const distractors = pickConfusableChars(k, 3);
        const choices = shuffle([k.kanji, ...distractors]);
        return {
            type: 'quiz', kanjiId, source, quizType,
            question: `つぎの意味を表す漢字は？\n「${k.meaning}」`,
            choices, answer: k.kanji,
            explanation: `正解は「${k.kanji}」。${kanjiStory(k)}`,
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

// まぎらわしい字のデータ（5年生のみ）があれば優先し、足りない分は同じ学年の字から選ぶ
function pickConfusableChars(k, n) {
    const ids = (k.confusables || []).slice();
    const pool = kanjiList.map(x => x.id).filter(id => id !== k.id && !ids.includes(id));
    while (ids.length < n && pool.length) {
        const idx = Math.floor(Math.random() * pool.length);
        ids.push(pool.splice(idx, 1)[0]);
    }
    return shuffle(ids).slice(0, n).map(id => kanjiById[id].kanji);
}

function quizTypeLabel(t) {
    if (t === 'reading') return '📖 読み方クイズ';
    if (t === 'meaning') return '💡 意味クイズ';
    if (t === 'writing') return '✍️ 書き取りクイズ';
    return '📝 穴うめクイズ';
}

function renderQuiz(item) {
    document.getElementById('skillBadge').textContent = quizTypeLabel(item.quizType);
    document.getElementById('qText').innerText = item.question;
    document.getElementById('feedbackBox').style.display = 'none';

    const choicesEl = document.getElementById('choices');
    const textAreaEl = document.getElementById('textAnswerArea');
    const writingAreaEl = document.getElementById('writingAnswerArea');
    choicesEl.style.display = 'none';
    textAreaEl.style.display = 'none';
    writingAreaEl.style.display = 'none';
    choicesEl.innerHTML = '';

    if (item.inputType === 'text') {
        textAreaEl.style.display = 'flex';
        const input = document.getElementById('textAnswerInput');
        input.value = '';
        input.disabled = false;
        input.className = 'text-answer-input';
        document.getElementById('textAnswerSubmitBtn').disabled = false;
        setTimeout(() => input.focus(), 50);
    } else if (item.inputType === 'writing') {
        writingAreaEl.style.display = 'block';
        document.getElementById('writingReveal').style.display = 'none';
        document.getElementById('writingRevealBtn').style.display = 'inline-block';
        document.querySelectorAll('.writing-self-grade button').forEach(b => b.disabled = false);
        initWritingCanvas();
    } else {
        choicesEl.style.display = 'flex';
        item.choices.forEach(text => {
            const btn = document.createElement('button');
            btn.className = 'choice-btn';
            btn.textContent = text;
            btn.addEventListener('click', () => onQuizAnswer(item, text));
            choicesEl.appendChild(btn);
        });
    }
}

function submitTextAnswer() {
    const item = gs.queue[gs.qIdx];
    if (!item || item.inputType !== 'text') return;
    const input = document.getElementById('textAnswerInput');
    const value = input.value.trim();
    if (!value) { input.focus(); return; }
    onQuizAnswer(item, value);
}

// ===== 回答処理 =====
function onQuizAnswer(item, chosen) {
    const correct = chosen === item.answer;

    document.querySelectorAll('.choice-btn').forEach(btn => {
        btn.disabled = true;
        if (btn.textContent === item.answer) btn.classList.add('correct');
        else if (btn.textContent === chosen && !correct) btn.classList.add('wrong');
    });

    if (item.inputType === 'text') {
        const input = document.getElementById('textAnswerInput');
        input.disabled = true;
        input.classList.add(correct ? 'correct' : 'wrong');
        document.getElementById('textAnswerSubmitBtn').disabled = true;
    }
    if (item.inputType === 'writing') {
        document.getElementById('writingRevealBtn').style.display = 'none';
        document.querySelectorAll('.writing-self-grade button').forEach(b => b.disabled = true);
    }

    if (item.isReview) {
        if (correct && !reviewProgress.masteredIds.includes(item.kanjiId)) {
            reviewProgress.masteredIds.push(item.kanjiId);
        }
        reviewProgress.totalAnswered++;
        if (correct) reviewProgress.totalCorrect++;
        saveReviewProgress();
    } else {
        markLearned(item.kanjiId);
        if (correct) {
            if (item.source === 'review' || item.source === 'reinforce') onReviewCorrect(item.kanjiId);
        } else {
            onReviewWrong(item.kanjiId);
        }
        progress.totalAnswered++;
        if (correct) progress.totalCorrect++;
        saveProgress();
    }

    const dmgPerQ = Math.ceil(gs.enemyMaxHp / Math.max(1, gs.quizCount));
    if (correct) {
        gs.correctCount++;
        gs.enemyHp = Math.max(0, gs.enemyHp - dmgPerQ);
        popDamage(`-${dmgPerQ}!!`, false);
        shakeEnemy();
    } else {
        gs.playerHp = Math.max(0, gs.playerHp - 12);
        popDamage('-12', true);
        flashPlayer();
    }

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

// ===== 書き取りクイズ：手書きキャンバス =====
let writingCtx = null;
let writingDrawing = false;

function initWritingCanvas() {
    const canvas = document.getElementById('writingCanvas');
    writingCtx = canvas.getContext('2d');
    writingCtx.clearRect(0, 0, canvas.width, canvas.height);
    writingCtx.strokeStyle = '#fffffe';
    writingCtx.lineWidth = 10;
    writingCtx.lineCap = 'round';
    writingCtx.lineJoin = 'round';
    document.getElementById('writingRevealBtn').disabled = true;

    if (!canvas.dataset.bound) {
        canvas.addEventListener('pointerdown', writingPointerDown);
        canvas.addEventListener('pointermove', writingPointerMove);
        window.addEventListener('pointerup', () => { writingDrawing = false; });
        canvas.dataset.bound = '1';
    }
}

function writingCanvasPos(e, canvas) {
    const rect = canvas.getBoundingClientRect();
    return {
        x: (e.clientX - rect.left) * (canvas.width / rect.width),
        y: (e.clientY - rect.top) * (canvas.height / rect.height),
    };
}

function writingPointerDown(e) {
    e.preventDefault();
    writingDrawing = true;
    const pos = writingCanvasPos(e, e.target);
    writingCtx.beginPath();
    writingCtx.moveTo(pos.x, pos.y);
    document.getElementById('writingRevealBtn').disabled = false;
}

function writingPointerMove(e) {
    if (!writingDrawing) return;
    e.preventDefault();
    const pos = writingCanvasPos(e, e.target);
    writingCtx.lineTo(pos.x, pos.y);
    writingCtx.stroke();
}

function clearWritingCanvas() {
    const canvas = document.getElementById('writingCanvas');
    writingCtx.clearRect(0, 0, canvas.width, canvas.height);
    document.getElementById('writingRevealBtn').disabled = true;
}

function revealWritingAnswer() {
    const item = gs.queue[gs.qIdx];
    document.getElementById('writingReveal').style.display = 'block';
    document.getElementById('writingRevealBtn').style.display = 'none';
    createStrokeBox(document.getElementById('writingAnswerStrokeArea'), item.answer).playDemo();
}

function submitWritingSelfGrade(isCorrect) {
    const item = gs.queue[gs.qIdx];
    onQuizAnswer(item, isCorrect ? item.answer : null);
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
    if (progress.masteredIds.length >= kanjiList.length && Object.keys(progress.reviewQueue).length === 0) {
        document.getElementById('masteredTitle').textContent = `🏆 ${currentGrade}年生 全${kanjiList.length}字マスター！ 🏆`;
        document.getElementById('masteredCount').textContent = `${kanjiList.length} / ${kanjiList.length}字`;
        document.getElementById('masteredStreak').textContent = progress.streak + '日';
        setTimeout(() => show('allMasteredScreen'), 600);
    }
}

function showClear() {
    const newCount = gs.queue.filter(i => i.type === 'intro').length;
    const reviewCount = gs.queue.filter(i => i.type === 'quiz' && i.source === 'review').length;

    let title = '⭐ クリア！ ⭐';
    let extraRows = `
            <div class="score-row"><span>新しく覚えた漢字</span><span style="color:#f7d774">${newCount}字</span></div>
            <div class="score-row"><span>復習した漢字</span><span style="color:#a8d8ea">${reviewCount}字</span></div>`;
    let skillUp = '';

    if (gs.mode === 'stage') {
        title = `⭐ ${STAGES[gs.stageId].name} クリア！ ⭐`;
    } else if (gs.mode === 'daily') {
        title = '🔥 今日の特訓 終了！ 🔥';
        skillUp = `<div class="skill-up">🔥 ${progress.streak}日連続達成！</div>`;
    } else if (gs.mode === 'reviewGrade') {
        const g = REVIEW_GRADES.find(x => x.grade === gs.reviewGrade);
        const pool = REVIEW_KANJI_LIST.filter(k => k.grade === gs.reviewGrade);
        const masteredInGrade = pool.filter(k => reviewProgress.masteredIds.includes(k.id)).length;
        title = `📘 ${g.name} おさらい終了！ 📘`;
        extraRows = `<div class="score-row"><span>マスターした漢字</span><span style="color:#f7d774">${masteredInGrade} / ${pool.length}字</span></div>`;
    } else {
        title = '📕 復習おわり！ 📕';
    }
    document.getElementById('clearTitle').textContent = title;

    document.getElementById('clearContent').innerHTML = `
        <div class="score-box">
            <div class="score-row"><span>正解数</span><span style="color:#2ecc71;font-weight:bold">${gs.correctCount} / ${gs.quizCount}</span></div>
            ${extraRows}
            <div class="score-row"><span>HP回復</span><span style="color:#2ecc71">＋20</span></div>
        </div>
        ${skillUp}`;

    const nextBtn = document.getElementById('clearNextBtn');
    if (gs.mode === 'stage') {
        nextBtn.textContent = 'マップへもどる 🗺️';
        nextBtn.onclick = backToMap;
    } else if (gs.mode === 'reviewGrade') {
        nextBtn.textContent = '成長の街道へ 🌱';
        nextBtn.onclick = openReviewMap;
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

function leaveGameOver() {
    if (gs.mode === 'stage') openMap();
    else if (gs.mode === 'reviewGrade') openReviewMap();
    else show('titleScreen');
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
window.addEventListener('load', () => {
    renderTitle();
    show('titleScreen');
});
