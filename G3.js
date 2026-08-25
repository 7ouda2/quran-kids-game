// بيانات السور الكاملة
const surahData = {
    ikhlas: {
        title: "سورة الإخلاص",
        items: [
            { id: 1, text: "قُلْ هُوَ اللَّهُ أَحَدٌ", matchId: 1 },
            { id: 2, text: "اللَّهُ الصَّمَدُ", matchId: 2 },
            { id: 3, text: "لَمْ يَلِدْ وَلَمْ يُولَدْ", matchId: 3 },
            { id: 4, text: "وَلَمْ يَكُن لَّهُ كُفُوًا أَحَدٌ", matchId: 4 }
        ],
        meanings: [
            { matchId: 2, text: "الذي يقصده الجميع في حوائجهم" },
            { matchId: 1, text: "الله واحد لا شريك له" },
            { matchId: 4, text: "لا يوجد له شبيه ولا مثيل" },
            { matchId: 3, text: "ليس له ولد ولا والد" }
        ]
    },
    falaq: {
        title: "سورة الفلق",
        items: [
            { id: 1, text: "قُلْ أَعُوذُ بِرَبِّ الْفَلَقِ", matchId: 1 },
            { id: 2, text: "مِن شَرِّ مَا خَلَقَ", matchId: 2 },
            { id: 3, text: "وَمِن شَرِّ غَاسِقٍ إِذَا وَقَبَ", matchId: 3 },
            { id: 4, text: "وَمِن شَرِّ النَّفَّاثَاتِ فِي الْعُقَدِ", matchId: 4 },
            { id: 5, text: "وَمِن شَرِّ حَاسِدٍ إِذَا حَسَدَ", matchId: 5 }
        ],
        meanings: [
            { matchId: 2, text: "من أذى جميع المخلوقات" },
            { matchId: 5, text: "من شر الذي يتمنى زوال النعمة" },
            { matchId: 1, text: "أستجير برب الصبح والفلَق" },
            { matchId: 4, text: "من شر الساحرات" },
            { matchId: 3, text: "من شر الليل إذا أظلم" }
        ]
    },
    nas: {
        title: "سورة الناس",
        items: [
            { id: 1, text: "قُلْ أَعُوذُ بِرَبِّ النَّاسِ", matchId: 1 },
            { id: 2, text: "مَلِكِ النَّاسِ", matchId: 2 },
            { id: 3, text: "إِلَٰهِ النَّاسِ", matchId: 3 },
            { id: 4, text: "مِن شَرِّ الْوَسْوَاسِ الْخَنَّاسِ", matchId: 4 },
            { id: 5, text: "الَّذِي يُوَسْوِسُ فِي صُدُورِ النَّاسِ", matchId: 5 },
            { id: 6, text: "مِنَ الْجِنَّةِ وَالنَّاسِ", matchId: 6 }
        ],
        meanings: [
            { matchId: 3, text: "معبود الناس وحده لا معبود بحق غيره" },
            { matchId: 1, text: "أستجير بخالق الناس ومربيهم" },
            { matchId: 5, text: "الذي يبث الشر والشك في القلوب" },
            { matchId: 2, text: "مالكهم والملِك الحقيقي لهم" },
            { matchId: 6, text: "الوسواس يكون من الشياطين ومن البشر" },
            { matchId: 4, text: "الشيطان الذي يختفي عند ذكر الله" }
        ]
    }
};

let currentSurahKey = 'ikhlas';
let score = 0;
let draggedItem = null;
let touchClone = null;

function switchMatchSurah(surahKey, btnElement) {
    currentSurahKey = surahKey;
    document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
    if (btnElement) btnElement.classList.add('active');
    initGame();
}

function initGame() {
    const container = document.querySelector('.match-container');
    const surahTitle = document.getElementById('surah-title');
    
    if (surahTitle) {
        surahTitle.innerText = surahData[currentSurahKey].title;
    }

    container.innerHTML = '';

    const versesCol = document.createElement('div');
    versesCol.className = 'match-column';

    const meaningsCol = document.createElement('div');
    meaningsCol.className = 'match-column';

    // 1. إضافة الآيات
    surahData[currentSurahKey].items.forEach(item => {
        const card = document.createElement('div');
        card.className = 'draggable-card';
        card.draggable = true;
        card.innerText = item.text;
        card.dataset.matchId = item.matchId;

        // أحداث الماوس للكمبيوتر
        card.addEventListener('dragstart', dragStart);
        card.addEventListener('dragend', dragEnd);

        // أحداث اللمس للموبايل
        card.addEventListener('touchstart', handleTouchStart, {passive: false});
        card.addEventListener('touchmove', handleTouchMove, {passive: false});
        card.addEventListener('touchend', handleTouchEnd);

        versesCol.appendChild(card);
    });

    // 2. إضافة المعاني
    surahData[currentSurahKey].meanings.forEach(item => {
        const dropZone = document.createElement('div');
        dropZone.className = 'drop-zone';
        dropZone.innerText = item.text;
        dropZone.dataset.matchId = item.matchId;

        dropZone.addEventListener('dragover', dragOver);
        dropZone.addEventListener('dragenter', dragEnter);
        dropZone.addEventListener('dragleave', dragLeave);
        dropZone.addEventListener('drop', dragDrop);

        meaningsCol.appendChild(dropZone);
    });

    container.appendChild(versesCol);
    container.appendChild(meaningsCol);
}

/* === أحداث الماوس (PC) === */
function dragStart() {
    draggedItem = this;
    setTimeout(() => this.classList.add('hide'), 0);
}

function dragEnd() {
    this.classList.remove('hide');
    draggedItem = null;
}

function dragOver(e) { e.preventDefault(); }
function dragEnter(e) { e.preventDefault(); this.classList.add('hovered'); }
function dragLeave() { this.classList.remove('hovered'); }

function dragDrop() {
    this.classList.remove('hovered');
    checkMatch(draggedItem, this);
}

/* === أحداث اللمس (Mobile) === */
function handleTouchStart(e) {
    draggedItem = this;
    const touch = e.touches[0];

    // إنشاء نسخة عائمة تتبع الإصبع
    touchClone = this.cloneNode(true);
    touchClone.style.position = 'fixed';
    touchClone.style.left = `${touch.clientX - 50}px`;
    touchClone.style.top = `${touch.clientY - 30}px`;
    touchClone.style.width = `${this.offsetWidth}px`;
    touchClone.style.opacity = '0.85';
    touchClone.style.pointerEvents = 'none';
    touchClone.style.zIndex = '1000';
    touchClone.style.borderColor = '#8b5e3c';

    document.body.appendChild(touchClone);
    this.classList.add('hide');
}

function handleTouchMove(e) {
    if (!touchClone) return;
    e.preventDefault(); // منع التمرير أثناء السحب
    const touch = e.touches[0];

    touchClone.style.left = `${touch.clientX - (touchClone.offsetWidth / 2)}px`;
    touchClone.style.top = `${touch.clientY - (touchClone.offsetHeight / 2)}px`;

    // إبراز الصندوق أسفل الإصبع
    const elementTarget = document.elementFromPoint(touch.clientX, touch.clientY);
    document.querySelectorAll('.drop-zone').forEach(dz => dz.classList.remove('hovered'));
    
    if (elementTarget && elementTarget.classList.contains('drop-zone')) {
        elementTarget.classList.add('hovered');
    }
}

function handleTouchEnd(e) {
    if (touchClone) {
        touchClone.remove();
        touchClone = null;
    }
    this.classList.remove('hide');

    const touch = e.changedTouches[0];
    const dropTarget = document.elementFromPoint(touch.clientX, touch.clientY);
    
    document.querySelectorAll('.drop-zone').forEach(dz => dz.classList.remove('hovered'));

    if (dropTarget && dropTarget.classList.contains('drop-zone')) {
        checkMatch(draggedItem, dropTarget);
    }
    draggedItem = null;
}

/* === دالة التناغم والتحقق === */
function checkMatch(item, targetZone) {
    if (item && item.dataset.matchId === targetZone.dataset.matchId) {
        targetZone.classList.add('correct-match');
        targetZone.innerHTML = `✅ ${item.innerText} <br><small>(${targetZone.innerText})</small>`;
        item.remove();
        
        score += 10;
        const scoreElem = document.getElementById('score-count');
        if (scoreElem) scoreElem.innerText = score;
    } else if (targetZone && !targetZone.classList.contains('correct-match')) {
        targetZone.classList.add('wrong-match');
        setTimeout(() => targetZone.classList.remove('wrong-match'), 800);
    }
}

document.addEventListener('DOMContentLoaded', initGame);