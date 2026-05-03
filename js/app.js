/* ========================================
   CU-TEP Mastery — Application Logic
   TTS Engine, Quiz System, Navigation
   ======================================== */

// ---- State ----
let currentLesson = null;
let completedLessons = JSON.parse(localStorage.getItem('cutep_completed') || '[]');
let quizStates = {}; // { lessonId: { qIdx: selectedChoice } }

// ---- Theme ----
function toggleTheme() {
    const current = document.documentElement.getAttribute('data-theme');
    const next = current === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', next);
    localStorage.setItem('cutep_theme', next);
    document.getElementById('theme-btn').textContent = next === 'dark' ? '☀️' : '🌙';
}

(function initTheme() {
    const saved = localStorage.getItem('cutep_theme') || 'light';
    document.documentElement.setAttribute('data-theme', saved);
    document.getElementById('theme-btn').textContent = saved === 'dark' ? '☀️' : '🌙';
})();

// ---- Sidebar ----
function toggleSidebar() {
    document.getElementById('sidebar').classList.toggle('open');
}

function buildNav() {
    const nav = document.getElementById('lesson-nav');
    let html = '';
    let currentPart = '';

    LESSONS.forEach(l => {
        const partLabel = l.part === 1 ? '🎧 Part 1: Listening' :
                          l.part === 2 ? '📖 Part 2: Reading' :
                                         '✏️ Part 3: Grammar';
        if (partLabel !== currentPart) {
            currentPart = partLabel;
            html += `<div class="nav-part-group">${partLabel}</div>`;
        }
        const isActive = currentLesson && currentLesson.id === l.id;
        const isCompleted = completedLessons.includes(l.id);
        html += `<div class="nav-item ${isActive ? 'active' : ''} ${isCompleted ? 'completed' : ''}" 
                      onclick="loadLesson(${l.id})" data-id="${l.id}">
            <span class="nav-icon">${l.icon}</span>
            <span>${l.isGame ? '🎮 ' + l.titleTh : 'บทที่ ' + l.id + ': ' + l.titleTh}</span>
            <span class="nav-check">✅</span>
        </div>`;
    });
    nav.innerHTML = html;
    updateProgress();
}

function updateProgress() {
    const pct = (completedLessons.length / LESSONS.length) * 100;
    document.getElementById('progress-fill').style.width = pct + '%';
    document.getElementById('progress-text').textContent = `${completedLessons.length} / ${LESSONS.length}`;
}

// ---- Load Lesson ----
function loadLesson(id) {
    const lesson = LESSONS.find(l => l.id === id);
    if (!lesson) return;
    currentLesson = lesson;
    quizStates = {};

    // Hide welcome, show lesson
    document.getElementById('welcome-screen').style.display = 'none';
    document.getElementById('lesson-view').style.display = 'block';

    // Header
    const partNames = { 1: 'Listening Comprehension', 2: 'Reading', 3: 'Grammar & Structure' };
    document.getElementById('lesson-badge').textContent = `Part ${lesson.part} — ${partNames[lesson.part]}`;
    document.getElementById('lesson-title-main').textContent = lesson.isGame ? `🎮 ${lesson.titleTh}` : `บทที่ ${lesson.id}: ${lesson.titleTh}`;
    document.getElementById('lesson-title-sub').textContent = lesson.titleEn;
    document.getElementById('breadcrumb').innerHTML = lesson.isGame ? `🎮 <strong>${lesson.titleTh}</strong>` : `Part ${lesson.part} &rsaquo; <strong>บทที่ ${lesson.id}</strong>`;

    // Nav buttons
    document.getElementById('prev-btn').disabled = id <= 1;
    document.getElementById('next-btn').disabled = id >= LESSONS.length;
    const completeBtn = document.getElementById('complete-btn');
    if (completedLessons.includes(id)) {
        completeBtn.textContent = '✅ เรียนจบแล้ว';
        completeBtn.classList.add('done');
    } else {
        completeBtn.textContent = '✅ จบบทเรียนนี้';
        completeBtn.classList.remove('done');
    }

    // Render body
    renderLessonBody(lesson);
    buildNav();

    // Close sidebar on mobile
    document.getElementById('sidebar').classList.remove('open');

    // Scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function renderLessonBody(lesson) {
    const body = document.getElementById('lesson-body');
    let html = '';
    let sectionIdx = 0;

    lesson.sections.forEach(sec => {
        sectionIdx++;
        html += `<div class="content-card section-card" style="--i:${sectionIdx}">`;

        switch (sec.type) {
            case 'intro':
                html += renderIntro(sec);
                break;
            case 'vocabulary':
                html += renderVocabulary(sec);
                break;
            case 'dialogue':
                html += renderDialogue(sec, lesson.id, sectionIdx);
                break;
            case 'passage':
                html += renderPassage(sec, lesson.id, sectionIdx);
                break;
            case 'tip':
                html += renderTip(sec);
                break;
            case 'grammar':
                html += renderGrammar(sec);
                break;
            case 'quiz':
                html += renderQuiz(sec, lesson.id);
                break;
            case 'vocab_game':
                html += renderVocabGame(sec, lesson.id);
                break;
            case 'flashcard':
                html += renderFlashcard(sec, lesson.id);
                break;
        }

        html += `</div>`;
    });

    body.innerHTML = html;
}

// ---- Renderers ----
function renderIntro(sec) {
    let h = `<div class="section-title"><span class="sec-icon">${sec.icon || '📋'}</span> ${sec.title}</div>`;
    if (sec.contentTh) h += `<div class="bi-text"><div class="th">${sec.contentTh}</div></div>`;
    if (sec.contentEn) {
        h += `<div class="bi-text"><div class="en" style="display:flex; gap:10px; align-items:flex-start;">
                <button style="background:none; border:none; cursor:pointer; font-size:1.1rem; padding:0;" title="ฟังเสียง" onclick="ttsSpeak(\`${escapeForJS(sec.contentEn)}\`, 'Intro')">🔊</button>
                <div>${sec.contentEn}</div>
              </div></div>`;
    }
    if (sec.bullets) {
        h += '<ul style="padding-left:20px; margin-top:10px;">';
        sec.bullets.forEach(b => {
            h += `<li style="margin-bottom:8px;">${b}</li>`;
        });
        h += '</ul>';
    }
    return h;
}

function renderVocabulary(sec) {
    let h = `<div class="section-title"><span class="sec-icon">📝</span> ${sec.title || 'คำศัพท์สำคัญ (Key Vocabulary)'}</div>`;
    h += '<div class="vocab-grid">';
    sec.words.forEach(w => {
        const ttsVocabText = w.ex ? `${w.word}. ${w.ex}` : w.word;
        h += `<div class="vocab-item">
            <div class="vocab-word" style="display:flex; justify-content:space-between; align-items:center;">
                <div>${w.word} <span class="vocab-pron">${w.pron || ''}</span></div>
                <button style="background:none; border:none; cursor:pointer; font-size:1.1rem; padding:4px;" title="ฟังเสียง" onclick="ttsSpeak(\`${escapeForJS(ttsVocabText)}\`, '${escapeForJS(w.word)}')">🔊</button>
            </div>
            <div class="vocab-mean">${w.mean}</div>
            ${w.ex ? `<div class="vocab-ex">"${w.ex}"</div>` : ''}
        </div>`;
    });
    h += '</div>';
    return h;
}

function renderDialogue(sec, lessonId, secIdx) {
    const ttsId = `tts_${lessonId}_${secIdx}`;
    // Combine all lines for TTS
    const fullText = sec.lines.map(l => l.text).join('. ');

    let h = `<div class="section-title"><span class="sec-icon">🎧</span> ${sec.title || 'บทสนทนา (Dialogue)'}</div>`;
    h += `<button class="listen-btn" onclick="ttsSpeak(\`${escapeForJS(fullText)}\`, '${escapeForJS(sec.title || 'Dialogue')}')">
        🔊 ฟังบทสนทนานี้ (Listen)
    </button>`;
    h += `<button class="transcript-toggle" onclick="toggleTranscript('${ttsId}')">👁 แสดง/ซ่อนคำแปล</button>`;
    h += '<div class="dialogue-box">';
    sec.lines.forEach(l => {
        const isB = l.speaker === 'B' || l.speaker === 'Woman' || l.speaker === 'Student';
        h += `<div class="dialogue-line">
            <div class="dialogue-speaker ${isB ? 'b' : ''}">${l.speaker[0]}</div>
            <div class="dialogue-content">
                <div class="dialogue-en">${l.text}</div>
                <div class="dialogue-th transcript-hidden" data-transcript="${ttsId}">${l.th || ''}</div>
            </div>
        </div>`;
    });
    h += '</div>';
    return h;
}

function renderPassage(sec, lessonId, secIdx) {
    const ttsId = `tts_${lessonId}_${secIdx}`;
    let h = `<div class="section-title"><span class="sec-icon">📖</span> ${sec.title || 'บทอ่าน (Reading Passage)'}</div>`;
    
    const textToSpeak = sec.ttsText || sec.contentEn || sec.text || '';
    const paragraphs = sec.contentEn || sec.text || '';
    const translation = sec.translationTh || sec.contentTh || '';

    if (textToSpeak) {
        h += `<button class="listen-btn" onclick="ttsSpeak(\`${escapeForJS(textToSpeak)}\`, '${escapeForJS(sec.title || 'Passage')}')">
            🔊 ฟังบทอ่านนี้ (Listen)
        </button>`;
    }
    
    h += `<div class="passage-box">`;
    if (typeof paragraphs === 'string') {
        paragraphs.split('\n').forEach(p => {
            if (p.trim()) h += `<p>${p}</p>`;
        });
    }
    h += '</div>';
    
    if (translation) {
        h += `<button class="transcript-toggle" style="margin-bottom:15px;" onclick="toggleTranscript('${ttsId}')">👁 แสดง/ซ่อนคำแปลภาษาไทย</button>`;
        h += `<div class="transcript-hidden" data-transcript="${ttsId}" style="padding:16px; margin-bottom:15px; background:var(--bg); border-radius:var(--radius-sm); font-size:0.9rem; line-height:1.8;">${translation}</div>`;
    }

    if (sec.vocabulary && sec.vocabulary.length > 0) {
        h += `<div style="margin-top:20px; padding-top:15px; border-top:1px solid var(--border);">
            <div style="font-weight:bold; margin-bottom:10px; color:var(--primary);">📚 ศัพท์น่ารู้จากบทอ่าน:</div>
            <div style="display:flex; flex-direction:column; gap:8px;">`;
        sec.vocabulary.forEach(v => {
            h += `<div style="display:flex; align-items:center; gap:10px; font-size:0.9rem;">
                <button style="background:none; border:none; cursor:pointer; font-size:1.1rem; padding:0;" title="ฟังเสียง" onclick="ttsSpeak(\`${escapeForJS(v.w)}\`, 'Vocab')">🔊</button>
                <strong>${v.w}</strong> <span style="color:var(--text-light); font-size:0.8rem;">[${v.p}]</span> - ${v.m}
            </div>`;
        });
        h += `</div></div>`;
    }

    return h;
}

function renderTip(sec) {
    let h = `<div class="section-title"><span class="sec-icon">💡</span> ${sec.title || 'เคล็ดลับ (Tips)'}</div>`;
    if (sec.tips) {
        sec.tips.forEach(t => {
            h += `<div class="tip-box"><strong>${t.label || 'Tip'}:</strong> ${t.text}</div>`;
        });
    }
    return h;
}

function renderGrammar(sec) {
    let h = `<div class="section-title"><span class="sec-icon">📐</span> ${sec.title || 'กฎไวยากรณ์ (Grammar Rules)'}</div>`;
    if (sec.contentTh) h += `<div class="bi-text"><div class="th">${sec.contentTh}</div></div>`;
    if (sec.contentEn) {
        h += `<div class="bi-text"><div class="en" style="display:flex; gap:10px; align-items:flex-start;">
                <button style="background:none; border:none; cursor:pointer; font-size:1.1rem; padding:0;" title="ฟังเสียง" onclick="ttsSpeak(\`${escapeForJS(sec.contentEn)}\`, 'Grammar')">🔊</button>
                <div>${sec.contentEn}</div>
              </div></div>`;
    }
    if (sec.rules) {
        sec.rules.forEach(r => {
            h += `<div class="rule-box">`;
            if (r.formula) h += `<div class="rule-formula">${r.formula}</div>`;
            if (r.explanation) h += `<p style="margin:10px 0; font-size:0.92rem;">${r.explanation}</p>`;
            if (r.examples) {
                r.examples.forEach(ex => {
                    const ttsEx = ex.incorrect ? `${ex.correct}. Incorrect: ${ex.incorrect}` : ex.correct;
                    h += `<div style="margin:8px 0; display:flex; gap:10px; align-items:flex-start;">
                        <button style="background:none; border:none; cursor:pointer; font-size:1rem; padding:0; margin-top:2px;" onclick="ttsSpeak(\`${escapeForJS(ttsEx)}\`, 'Example')">🔊</button>
                        <div>
                            <span class="example-correct">✅ ${ex.correct}</span><br>
                            ${ex.incorrect ? `<span class="example-incorrect">❌ ${ex.incorrect}</span>` : ''}
                            ${ex.why ? `<br><span style="font-size:0.82rem; color:var(--text-light);">→ ${ex.why}</span>` : ''}
                        </div>
                    </div>`;
                });
            }
            h += `</div>`;
        });
    }
    return h;
}

function renderQuiz(sec, lessonId) {
    const qId = `quiz_${lessonId}`;
    let h = `<div class="section-title"><span class="sec-icon">🧪</span> ${sec.title || 'แบบทดสอบ (Quiz)'}</div>`;

    sec.questions.forEach((q, i) => {
        const cardId = `${qId}_q${i}`;
        h += `<div class="quiz-card" id="${cardId}">`;
        h += `<div class="quiz-question">${i + 1}. ${q.question}</div>`;
        if (q.questionTh) h += `<div class="quiz-question-th">${q.questionTh}</div>`;

        // Listen button for quiz question audio
        if (q.audio) {
            h += `<button class="listen-btn" style="margin-bottom:10px; font-size:0.8rem; padding:6px 16px;" onclick="ttsSpeak(\`${escapeForJS(q.audio)}\`, 'Question ${i + 1}')">🔊 ฟังคำถาม (Listen)</button>`;
        }

        if (q.transcript) {
            h += `<div style="background:#f8fafc; color:#000; padding:12px; border-radius:6px; border-left:3px solid var(--accent); margin-bottom:14px; font-size:0.9rem; font-family:var(--font-en);">
                    <strong>Transcript:</strong><br>
                    ${q.transcript.replace(/\n/g, '<br>')}
                  </div>`;
        }

        h += `<div class="quiz-choices">`;
        q.choices.forEach((c, ci) => {
            const letters = ['A', 'B', 'C', 'D'];
            h += `<div class="quiz-choice" id="${cardId}_c${ci}" onclick="selectChoice('${cardId}', ${ci}, ${q.choices.length})">
                <span class="choice-letter">${letters[ci]}</span>
                <span>${c}</span>
            </div>`;
        });
        h += '</div>';
        h += `<button class="quiz-check-btn" id="${cardId}_btn" onclick="checkAnswer('${cardId}', ${i}, ${q.answer}, ${lessonId})" disabled>ตรวจคำตอบ</button>`;
        h += `<div class="quiz-explanation" id="${cardId}_exp">`;
        h += `<strong>เฉลย: ${['A', 'B', 'C', 'D'][q.answer]}</strong><br>`;
        if (q.explanationTh) h += `<p style="margin-top:6px;">${q.explanationTh}</p>`;
        if (q.explanationEn) h += `<p style="margin-top:4px; font-family:var(--font-en); font-style:italic; color:var(--text-light); font-size:0.85rem;">${q.explanationEn}</p>`;
        h += `</div></div>`;
    });

    h += `<div class="quiz-score" id="${qId}_score" style="display:none;"></div>`;
    return h;
}

// ---- Vocab Game ----
let vocabGameData = [];
let currentVocabGame = null;

function renderVocabGame(sec, lessonId) {
    vocabGameData = sec.words || [];
    let h = `<div class="section-title"><span class="sec-icon">🎮</span> ${sec.title || 'มินิเกมฝึกฟัง (Listening Game)'}</div>`;
    if (sec.contentTh) h += `<p style="margin-bottom:16px;">${sec.contentTh}</p>`;
    
    h += `<div id="vocab-game-container" style="text-align:center; padding:30px; background:var(--bg); border-radius:var(--radius); border:2px solid var(--border);">
        <div id="vg-score" style="font-size:1.2rem; font-weight:700; color:var(--primary); margin-bottom:20px;">Score: 0</div>
        
        <button id="vg-start-btn" class="btn-primary" onclick="startVocabGame()">เริ่มเกม (Start Game)</button>
        
        <div id="vg-play-area" style="display:none;">
            <button class="listen-btn" id="vg-listen-btn" style="font-size:1.5rem; padding:16px 30px; margin-bottom:24px; animation:pulse 2s infinite;">
                🔊 ฟังคำศัพท์
            </button>
            <div id="vg-choices" style="display:grid; grid-template-columns:1fr 1fr; gap:12px;"></div>
            <div id="vg-result-info" style="display:none; margin-top:16px; padding:12px; border-radius:var(--radius-sm); background:var(--bg-card); border:1px solid var(--border); font-size:0.95rem;"></div>
            <div style="display:flex; gap:10px; margin-top:16px;">
                <button id="vg-replay-btn" class="listen-btn" style="display:none; flex:1; font-size:1rem; padding:10px;" onclick="replayVocabWord()">🔊 ฟังอีกครั้ง</button>
                <button id="vg-next-btn" class="btn-primary" style="display:none; flex:1;" onclick="nextVocabGameTurn()">ถัดไป (Next) ➡️</button>
            </div>
            <button id="vg-restart-btn" class="btn-primary" style="display:none; width:100%; margin-top:10px; background:var(--danger);" onclick="restartVocabGame()">🔄 เริ่มเล่นใหม่ (Restart)</button>
        </div>
    </div>`;
    return h;
}

function startVocabGame() {
    if (vocabGameData.length < 4) {
        alert("คำศัพท์ไม่พอสำหรับสร้างเกม");
        return;
    }
    document.getElementById('vg-start-btn').style.display = 'none';
    document.getElementById('vg-play-area').style.display = 'block';
    currentVocabGame = { score: 0 };
    nextVocabGameTurn();
}

function nextVocabGameTurn() {
    document.getElementById('vg-next-btn').style.display = 'none';
    document.getElementById('vg-replay-btn').style.display = 'none';
    document.getElementById('vg-restart-btn').style.display = 'none';
    document.getElementById('vg-result-info').style.display = 'none';
    // Pick 4 random unique words
    let shuffled = [...vocabGameData].sort(() => 0.5 - Math.random());
    let choices = shuffled.slice(0, 4);
    let answerObj = choices[Math.floor(Math.random() * 4)];
    
    currentVocabGame.answer = answerObj;
    currentVocabGame.choices = choices;
    
    // Update UI
    document.getElementById('vg-score').textContent = `Score: ${currentVocabGame.score}`;
    
    // Update Listen Button
    const listenBtn = document.getElementById('vg-listen-btn');
    listenBtn.onclick = () => ttsSpeak(answerObj.word, 'Vocabulary Game');
    
    // Auto-play sound
    setTimeout(() => ttsSpeak(answerObj.word, 'Vocabulary Game'), 300);
    
    // Render Choices
    const choicesDiv = document.getElementById('vg-choices');
    let cHtml = '';
    choices.forEach((c, i) => {
        cHtml += `<button class="vocab-choice-btn" onclick="checkVocabGameAnswer('${escapeForJS(c.word)}', this)" 
                  style="background:var(--bg-card); border:2px solid var(--border); padding:16px; border-radius:var(--radius-sm); font-size:1rem; cursor:pointer; font-family:var(--font-th); transition:all 0.2s;">
            ${c.mean}
        </button>`;
    });
    choicesDiv.innerHTML = cHtml;
}

function checkVocabGameAnswer(selectedWord, btnEl) {
    const isCorrect = selectedWord === currentVocabGame.answer.word;
    
    // Disable all buttons
    const btns = document.querySelectorAll('.vocab-choice-btn');
    btns.forEach(b => {
        b.style.pointerEvents = 'none';
        if (b.textContent.trim() === currentVocabGame.answer.mean.trim()) {
            b.style.borderColor = 'var(--success)';
            b.style.backgroundColor = 'rgba(0,184,148,0.1)';
        }
    });
    const resultInfo = document.getElementById('vg-result-info');
    
    if (isCorrect) {
        currentVocabGame.score += 10;
        document.getElementById('vg-score').textContent = `Score: ${currentVocabGame.score}`;
        btnEl.style.transform = 'scale(1.05)';
        resultInfo.innerHTML = `<span style="color:var(--success);">✅ ถูกต้อง!</span> <strong>${currentVocabGame.answer.word}</strong> = ${currentVocabGame.answer.mean}`;
    } else {
        btnEl.style.borderColor = 'var(--danger)';
        btnEl.style.backgroundColor = 'rgba(214,48,49,0.1)';
        currentVocabGame.score = Math.max(0, currentVocabGame.score - 5);
        document.getElementById('vg-score').textContent = `Score: ${currentVocabGame.score}`;
        resultInfo.innerHTML = `<span style="color:var(--danger);">❌ ผิด!</span> คำตอบคือ <strong>${currentVocabGame.answer.word}</strong> = ${currentVocabGame.answer.mean}`;
        ttsSpeak(`${currentVocabGame.answer.word}. แปลว่า ${currentVocabGame.answer.mean}`, 'Correction');
    }
    resultInfo.style.display = 'block';
    document.getElementById('vg-next-btn').style.display = 'block';
    document.getElementById('vg-replay-btn').style.display = 'block';
    document.getElementById('vg-restart-btn').style.display = 'block';
}

function replayVocabWord() {
    if (currentVocabGame && currentVocabGame.answer) {
        ttsSpeak(currentVocabGame.answer.word, 'Replay');
    }
}

function restartVocabGame() {
    currentVocabGame = { score: 0 };
    nextVocabGameTurn();
}

// ---- Flashcard Logic ----
let flashcardData = [];
let currentCategoryIdx = 0;
let currentCardIdx = 0;

function renderFlashcard(sec, lessonId) {
    flashcardData = sec.categories;
    currentCategoryIdx = 0;
    currentCardIdx = 0;

    let h = `<div class="section-title"><span class="sec-icon">📇</span> ${sec.title || 'Flashcards'}</div>`;
    
    // Category Selector
    h += `<div style="margin-bottom:20px;">
        <label style="font-weight:bold; margin-right:10px;">เลือกหมวดหมู่:</label>
        <select id="fc-category-select" onchange="changeFlashcardCategory(this.value)" style="padding:8px; border-radius:6px; font-family:var(--font-th);">`;
    sec.categories.forEach((cat, idx) => {
        h += `<option value="${idx}">${cat.name} (${cat.words.length} คำ)</option>`;
    });
    h += `</select></div>`;

    // Flashcard Container
    h += `<div id="fc-container" style="display:flex; flex-direction:column; align-items:center; perspective:1000px;">
        <div id="fc-card" onclick="flipFlashcard()" style="width:100%; max-width:400px; height:250px; position:relative; transition:transform 0.6s; transform-style:preserve-3d; cursor:pointer; margin-bottom:20px;">
            <!-- Front -->
            <div id="fc-front" style="position:absolute; width:100%; height:100%; backface-visibility:hidden; background:var(--accent); color:white; display:flex; flex-direction:column; justify-content:center; align-items:center; border-radius:12px; box-shadow:var(--shadow-lg);">
                <div id="fc-word-en" style="font-size:2.5rem; font-weight:bold; font-family:var(--font-en);">WORD</div>
                <div style="font-size:0.9rem; margin-top:10px; opacity:0.8;">แตะเพื่อดูคำแปล</div>
            </div>
            <!-- Back -->
            <div id="fc-back" style="position:absolute; width:100%; height:100%; backface-visibility:hidden; background:var(--bg-card); color:var(--text); border:2px solid var(--accent); transform:rotateY(180deg); display:flex; flex-direction:column; justify-content:center; align-items:center; border-radius:12px; box-shadow:var(--shadow-lg);">
                <div id="fc-word-th" style="font-size:2rem; font-weight:bold; font-family:var(--font-th); color:var(--primary);">ความหมาย</div>
                <div id="fc-pron-th" style="font-size:1.2rem; color:var(--text-light); margin-top:8px;">(คำอ่าน)</div>
                <button class="listen-btn" onclick="event.stopPropagation(); ttsSpeak(flashcardData[currentCategoryIdx].words[currentCardIdx].w, 'Flashcard')" style="margin-top:20px; padding:8px 16px;">🔊 ฟังเสียง</button>
            </div>
        </div>
        
        <!-- Controls -->
        <div style="display:flex; gap:15px; align-items:center;">
            <button class="btn-primary" style="background:var(--text-light);" onclick="prevFlashcard()">⬅️ ก่อนหน้า</button>
            <span id="fc-counter" style="font-weight:bold; font-family:var(--font-en);">1 / X</span>
            <button class="btn-primary" onclick="nextFlashcard()">ถัดไป ➡️</button>
        </div>
    </div>`;

    setTimeout(updateFlashcardUI, 50); // delay to let DOM render
    return h;
}

function changeFlashcardCategory(idx) {
    currentCategoryIdx = parseInt(idx);
    currentCardIdx = 0;
    document.getElementById('fc-card').style.transform = 'rotateY(0deg)';
    updateFlashcardUI();
}

function flipFlashcard() {
    const card = document.getElementById('fc-card');
    if (card.style.transform === 'rotateY(180deg)') {
        card.style.transform = 'rotateY(0deg)';
    } else {
        card.style.transform = 'rotateY(180deg)';
        // Auto play audio on flip
        ttsSpeak(flashcardData[currentCategoryIdx].words[currentCardIdx].w, 'Flashcard');
    }
}

function nextFlashcard() {
    const cat = flashcardData[currentCategoryIdx];
    if (currentCardIdx < cat.words.length - 1) {
        currentCardIdx++;
        document.getElementById('fc-card').style.transform = 'rotateY(0deg)';
        setTimeout(updateFlashcardUI, 150);
    }
}

function prevFlashcard() {
    if (currentCardIdx > 0) {
        currentCardIdx--;
        document.getElementById('fc-card').style.transform = 'rotateY(0deg)';
        setTimeout(updateFlashcardUI, 150);
    }
}

function updateFlashcardUI() {
    const cat = flashcardData[currentCategoryIdx];
    const wordObj = cat.words[currentCardIdx];
    
    document.getElementById('fc-word-en').textContent = wordObj.w;
    document.getElementById('fc-word-th').textContent = wordObj.m;
    document.getElementById('fc-pron-th').textContent = `[ ${wordObj.p} ]`;
    document.getElementById('fc-counter').textContent = `${currentCardIdx + 1} / ${cat.words.length}`;
}

// ---- Quiz Logic ----
function selectChoice(cardId, choiceIdx, total) {
    for (let i = 0; i < total; i++) {
        document.getElementById(`${cardId}_c${i}`).classList.remove('selected');
    }
    document.getElementById(`${cardId}_c${choiceIdx}`).classList.add('selected');
    document.getElementById(`${cardId}_btn`).disabled = false;

    // Store
    if (!quizStates[cardId]) quizStates[cardId] = {};
    quizStates[cardId].selected = choiceIdx;
}

function checkAnswer(cardId, qIdx, correctIdx, lessonId) {
    const selected = quizStates[cardId]?.selected;
    if (selected === undefined) return;

    const total = document.querySelectorAll(`#${cardId} .quiz-choice`).length;
    for (let i = 0; i < total; i++) {
        const el = document.getElementById(`${cardId}_c${i}`);
        el.style.pointerEvents = 'none';
        if (i === correctIdx) el.classList.add('correct');
        if (i === selected && i !== correctIdx) el.classList.add('incorrect');
    }

    document.getElementById(`${cardId}_btn`).style.display = 'none';
    document.getElementById(`${cardId}_exp`).classList.add('show');

    // Check if all questions in this quiz section answered
    updateQuizScore(lessonId);
}

function updateQuizScore(lessonId) {
    const qId = `quiz_${lessonId}`;
    const lesson = LESSONS.find(l => l.id === lessonId);
    if (!lesson) return;

    const quizSec = lesson.sections.find(s => s.type === 'quiz');
    if (!quizSec) return;

    let answered = 0, correct = 0;
    quizSec.questions.forEach((q, i) => {
        const cardId = `${qId}_q${i}`;
        if (quizStates[cardId]?.selected !== undefined) {
            answered++;
            if (quizStates[cardId].selected === q.answer) correct++;
        }
    });

    if (answered === quizSec.questions.length) {
        const scoreEl = document.getElementById(`${qId}_score`);
        scoreEl.style.display = 'block';
        const pct = Math.round((correct / quizSec.questions.length) * 100);
        let emoji = pct >= 80 ? '🎉' : pct >= 50 ? '👍' : '💪';
        scoreEl.innerHTML = `${emoji} คะแนน: ${correct} / ${quizSec.questions.length} (${pct}%)`;
    }
}

// ---- TTS Engine ----
let ttsUtterance = null;
let ttsSpeaking = false;

function ttsSpeak(text, title) {
    if (!('speechSynthesis' in window)) {
        alert('เบราว์เซอร์ของคุณไม่รองรับ Text-to-Speech กรุณาใช้ Chrome หรือ Edge');
        return;
    }
    speechSynthesis.cancel();

    ttsUtterance = new SpeechSynthesisUtterance(text);
    ttsUtterance.lang = 'en-US';
    ttsUtterance.rate = parseFloat(document.getElementById('tts-speed').value);
    ttsUtterance.pitch = 1;

    // Try to get a good English voice
    const voices = speechSynthesis.getVoices();
    const enVoice = voices.find(v => v.lang.startsWith('en') && v.name.includes('Female')) ||
                    voices.find(v => v.lang.startsWith('en-US')) ||
                    voices.find(v => v.lang.startsWith('en'));
    if (enVoice) ttsUtterance.voice = enVoice;

    ttsUtterance.onstart = () => {
        ttsSpeaking = true;
        document.getElementById('tts-play-btn').textContent = '⏸';
    };
    ttsUtterance.onend = () => {
        ttsSpeaking = false;
        document.getElementById('tts-play-btn').textContent = '▶';
    };

    // Show audio bar
    const bar = document.getElementById('audio-bar');
    bar.style.display = 'block';
    document.getElementById('audio-title').textContent = title || 'Playing...';

    speechSynthesis.speak(ttsUtterance);
}

function ttsToggle() {
    if (!ttsUtterance) return;
    if (speechSynthesis.paused) {
        speechSynthesis.resume();
        document.getElementById('tts-play-btn').textContent = '⏸';
    } else if (speechSynthesis.speaking) {
        speechSynthesis.pause();
        document.getElementById('tts-play-btn').textContent = '▶';
    }
}

function ttsStop() {
    speechSynthesis.cancel();
    ttsSpeaking = false;
    document.getElementById('tts-play-btn').textContent = '▶';
}

function ttsRestart() {
    if (ttsUtterance) {
        const text = ttsUtterance.text;
        const title = document.getElementById('audio-title').textContent;
        ttsSpeak(text, title);
    }
}

function ttsChangeSpeed(val) {
    if (ttsUtterance && speechSynthesis.speaking) {
        const text = ttsUtterance.text;
        const title = document.getElementById('audio-title').textContent;
        ttsSpeak(text, title);
    }
}

// Preload voices
if ('speechSynthesis' in window) {
    speechSynthesis.getVoices();
    speechSynthesis.onvoiceschanged = () => speechSynthesis.getVoices();
}

// ---- Transcript Toggle ----
function toggleTranscript(ttsId) {
    const elements = document.querySelectorAll(`[data-transcript="${ttsId}"]`);
    elements.forEach(el => el.classList.toggle('transcript-hidden'));
}

// ---- Navigation ----
function prevLesson() {
    if (currentLesson && currentLesson.id > 1) loadLesson(currentLesson.id - 1);
}

function nextLesson() {
    if (currentLesson && currentLesson.id < LESSONS.length) loadLesson(currentLesson.id + 1);
}

function markComplete() {
    if (!currentLesson) return;
    if (completedLessons.includes(currentLesson.id)) return;
    completedLessons.push(currentLesson.id);
    localStorage.setItem('cutep_completed', JSON.stringify(completedLessons));
    buildNav();

    const btn = document.getElementById('complete-btn');
    btn.textContent = '✅ เรียนจบแล้ว';
    btn.classList.add('done');
}

// ---- Utility ----
function escapeForJS(str) {
    return str.replace(/\\/g, '\\\\').replace(/`/g, '\\`').replace(/\$/g, '\\$');
}

// ---- Init ----
buildNav();
