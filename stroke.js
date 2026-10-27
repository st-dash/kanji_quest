// stroke.js - 漢字クエスト 書き順アニメ＆書き順判定つき練習（データは stroke-data.js）

const SVG_NS = 'http://www.w3.org/2000/svg';

// 判定のゆるさ（KanjiVG の 109x109 座標）。子どもの指書きを想定して甘めにしている。
const STROKE_JUDGE = {
    avgDist: 14,      // 書いた線の各点 → お手本の線 までの平均距離
    coverDist: 16,    // お手本の各点 → 書いた線 までの平均距離（途中でやめた線を弾く）
    endDist: 24,      // 始点・終点のずれ
    shortStroke: 16,  // これより短い画（点など）は向きの判定をゆるめる
    maxMiss: 3,       // 同じ画をこの回数まちがえたら、お手本を見せて次の画へ進める
};
const SAMPLE_STEP = 2;

function strokeCount(kanji) {
    return STROKE_DATA[kanji] ? STROKE_DATA[kanji].s.length : 0;
}

function svgEl(tag, attrs, parent) {
    const el = document.createElementNS(SVG_NS, tag);
    Object.entries(attrs || {}).forEach(([k, v]) => el.setAttribute(k, v));
    if (parent) parent.appendChild(el);
    return el;
}

// ===== 線の比較用ユーティリティ =====
function dist(a, b) { return Math.hypot(a.x - b.x, a.y - b.y); }

function polylineLength(pts) {
    let len = 0;
    for (let i = 1; i < pts.length; i++) len += dist(pts[i - 1], pts[i]);
    return len;
}

// 点の間隔をそろえる（ゆっくり書いた部分に点が偏って平均がずれるのを防ぐ）
function resample(pts, step) {
    if (pts.length < 2) return pts.slice();
    const out = [pts[0]];
    let prev = pts[0], carry = 0;
    for (let i = 1; i < pts.length; i++) {
        const cur = pts[i];
        let seg = dist(prev, cur);
        while (carry + seg >= step) {
            const t = (step - carry) / seg;
            prev = { x: prev.x + (cur.x - prev.x) * t, y: prev.y + (cur.y - prev.y) * t };
            out.push(prev);
            seg = dist(prev, cur);
            carry = 0;
        }
        carry += seg;
        prev = cur;
    }
    const last = pts[pts.length - 1];
    if (dist(out[out.length - 1], last) > 0.01) out.push(last);
    return out;
}

function averageMinDist(from, to) {
    let sum = 0;
    from.forEach(p => { sum += Math.min(...to.map(q => dist(p, q))); });
    return sum / from.length;
}

// 'ok' | 'reverse'（場所は合っているが向きが逆）| 'ng'
function compareStroke(user, exp) {
    const expLen = polylineLength(exp);
    const userLen = polylineLength(user);
    const isShort = expLen < STROKE_JUDGE.shortStroke;
    if (averageMinDist(user, exp) > STROKE_JUDGE.avgDist) return 'ng';
    if (averageMinDist(exp, user) > STROKE_JUDGE.coverDist) return 'ng';
    if (userLen > expLen * 2.5 + 10) return 'ng';

    const us = user[0], ue = user[user.length - 1];
    const es = exp[0], ee = exp[exp.length - 1];
    const forward = dist(us, es) + dist(ue, ee);
    const backward = dist(us, ee) + dist(ue, es);
    if (backward + (isShort ? 3 : 0) < forward) return 'reverse';
    if (dist(us, es) > STROKE_JUDGE.endDist || dist(ue, ee) > STROKE_JUDGE.endDist) return 'ng';
    return 'ok';
}

function strokeDuration(len) { return 300 + len * 8; }

// path を描き始めの状態（見えない）にしてから、ms かけて書く
function animatePath(path, len, ms) {
    path.style.transition = 'none';
    path.style.strokeDasharray = `${len} ${len}`;
    path.style.strokeDashoffset = len;
    path.style.opacity = '1';
    path.getBoundingClientRect();
    path.style.transition = `stroke-dashoffset ${ms}ms linear`;
    path.style.strokeDashoffset = 0;
}

// ===== 書き順ボックス =====
// container の中に、田の字マス＋お手本＋メッセージ欄をつくる。
// 戻り値: { playDemo(onDone), startPractice(onDone), showAll(), stop() }
function createStrokeBox(container, kanji) {
    container.innerHTML = '';
    const data = STROKE_DATA[kanji];
    const box = document.createElement('div');
    box.className = 'stroke-box';
    container.appendChild(box);
    const msgEl = document.createElement('div');
    msgEl.className = 'stroke-msg';
    container.appendChild(msgEl);

    if (!data) {
        box.innerHTML = `<div class="stroke-fallback">${kanji}</div>`;
        const noop = (onDone) => { if (onDone) onDone(); };
        return { playDemo: noop, startPractice: noop, showAll() {}, stop() {} };
    }

    const svg = svgEl('svg', { viewBox: '0 0 109 109', class: 'stroke-svg' }, box);
    svgEl('path', { d: 'M54.5,2V107M2,54.5H107', class: 'stroke-guide' }, svg);
    const ghostLayer = svgEl('g', { class: 'stroke-ghost' }, svg);
    const drawnLayer = svgEl('g', { class: 'stroke-drawn' }, svg);
    const hintLayer = svgEl('g', { class: 'stroke-hint' }, svg);
    const numLayer = svgEl('g', { class: 'stroke-nums' }, svg);
    const inkLayer = svgEl('g', { class: 'stroke-ink' }, svg);

    const strokes = data.s.map((d, i) => {
        svgEl('path', { d }, ghostLayer);
        const path = svgEl('path', { d }, drawnLayer);
        const len = path.getTotalLength();
        const points = [];
        const n = Math.max(2, Math.ceil(len / SAMPLE_STEP));
        for (let j = 0; j <= n; j++) {
            const p = path.getPointAtLength(len * j / n);
            points.push({ x: p.x, y: p.y });
        }
        const num = svgEl('text', { x: data.n[i][0], y: data.n[i][1] }, numLayer);
        num.textContent = i + 1;
        return { d, path, len, points, num };
    });

    let timers = [];
    let mode = 'idle';       // 'idle' | 'demo' | 'practice'
    let current = 0, misses = 0;
    let userPts = null, inkLine = null;
    let practiceDone = null;

    function later(fn, ms) { timers.push(setTimeout(fn, ms)); }
    function clearTimers() { timers.forEach(t => clearTimeout(t)); timers = []; }

    function setMsg(text, kind) {
        msgEl.textContent = text;
        msgEl.className = 'stroke-msg' + (kind ? ' ' + kind : '');
    }

    function hideStroke(st) {
        st.path.style.transition = 'none';
        st.path.style.opacity = '0';
        st.path.classList.remove('active');
        st.num.style.opacity = '0';
    }
    function showStroke(st) {
        st.path.style.transition = 'none';
        st.path.style.strokeDasharray = 'none';
        st.path.style.strokeDashoffset = 0;
        st.path.style.opacity = '1';
        st.path.classList.remove('active');
        st.num.style.opacity = '1';
    }

    function reset(nextMode) {
        clearTimers();
        mode = nextMode;
        hintLayer.innerHTML = '';
        inkLayer.innerHTML = '';
        userPts = null;
        svg.classList.toggle('practicing', nextMode === 'practice');
    }

    function playDemo(onDone) {
        reset('demo');
        setMsg('');
        strokes.forEach(hideStroke);
        let t = 300;
        strokes.forEach((st, i) => {
            const ms = strokeDuration(st.len);
            later(() => {
                if (i > 0) strokes[i - 1].path.classList.remove('active');
                st.num.style.opacity = '1';
                st.path.classList.add('active');
                animatePath(st.path, st.len, ms);
            }, t);
            t += ms + 250;
        });
        later(() => {
            strokes[strokes.length - 1].path.classList.remove('active');
            mode = 'idle';
            if (onDone) onDone();
        }, t);
    }

    function showAll() {
        reset('idle');
        strokes.forEach(showStroke);
    }

    function startPractice(onDone) {
        reset('practice');
        practiceDone = onDone;
        current = 0;
        misses = 0;
        strokes.forEach(hideStroke);
        setMsg('1画目から書いてみよう ✍️');
    }

    function flashHint(idx) {
        const st = strokes[idx];
        hintLayer.innerHTML = '';
        const hint = svgEl('path', { d: st.d }, hintLayer);
        animatePath(hint, st.len, strokeDuration(st.len));
        later(() => {
            hint.style.transition = 'opacity 0.5s';
            hint.style.opacity = '0';
        }, strokeDuration(st.len) + 500);
    }

    function acceptStroke(animated) {
        const st = strokes[current];
        if (animated) {
            st.num.style.opacity = '1';
            animatePath(st.path, st.len, strokeDuration(st.len));
        } else {
            showStroke(st);
        }
        current++;
        misses = 0;
        if (current >= strokes.length) {
            mode = 'idle';
            svg.classList.remove('practicing');
            setMsg('できた！ じょうずに書けたね ⭐', 'ok');
            if (practiceDone) practiceDone();
        }
    }

    function judge(pts) {
        const user = resample(pts, SAMPLE_STEP);
        const result = compareStroke(user, strokes[current].points);
        if (result === 'ok') {
            hintLayer.innerHTML = '';
            acceptStroke(false);
            if (mode === 'practice') setMsg(`いいね！ つぎは${current + 1}画目`, 'ok');
            return;
        }

        misses++;
        const other = strokes.findIndex((st, j) => j > current && compareStroke(user, st.points) === 'ok');
        if (misses >= STROKE_JUDGE.maxMiss) {
            hintLayer.innerHTML = '';
            setMsg(`${current + 1}画目はこう書くよ。よく見てね 👀`, 'ng');
            acceptStroke(true);
            return;
        }
        if (other !== -1) {
            setMsg(`それは${other + 1}画目だよ。${current + 1}画目は光っているところ！`, 'ng');
        } else if (result === 'reverse') {
            setMsg('書く向きが反対だよ。光っている線のとおりに書こう', 'ng');
        } else {
            setMsg(`${current + 1}画目は光っているところだよ`, 'ng');
        }
        flashHint(current);
    }

    function svgPoint(e) {
        const rect = svg.getBoundingClientRect();
        return {
            x: (e.clientX - rect.left) * 109 / rect.width,
            y: (e.clientY - rect.top) * 109 / rect.height,
        };
    }

    svg.addEventListener('pointerdown', e => {
        if (mode !== 'practice') return;
        e.preventDefault();
        svg.setPointerCapture(e.pointerId);
        userPts = [svgPoint(e)];
        inkLayer.innerHTML = '';
        inkLine = svgEl('polyline', { points: `${userPts[0].x},${userPts[0].y}` }, inkLayer);
    });
    svg.addEventListener('pointermove', e => {
        if (!userPts) return;
        e.preventDefault();
        const p = svgPoint(e);
        if (dist(p, userPts[userPts.length - 1]) < 0.8) return;
        userPts.push(p);
        inkLine.setAttribute('points', userPts.map(q => `${q.x},${q.y}`).join(' '));
    });
    const endStroke = () => {
        if (!userPts) return;
        const pts = userPts;
        userPts = null;
        const line = inkLine;
        later(() => line.remove(), 150);
        if (mode === 'practice') judge(pts);
    };
    svg.addEventListener('pointerup', endStroke);
    svg.addEventListener('pointercancel', endStroke);

    return {
        playDemo,
        startPractice,
        showAll,
        stop() { reset('idle'); },
    };
}
