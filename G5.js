const puzzleData = {
    ikhlas: {
        title: "سورة الإخلاص",
        verses: [
            "قُلۡ هُوَ ٱللَّهُ أَحَدٌ",
            "ٱللَّهُ ٱلصَّمَدُ",
            "لَمۡ يَلِدۡ وَلَمۡ يُولَدۡ",
            "وَلَمۡ يَكُن لَّهُۥ كُفُوًا أَحَدُۢ"
        ]
    },
    falaq: {
        title: "سورة الفلق",
        verses: [
            "قُلۡ أَعُوذُ بِرَبِّ ٱلۡفَلَقِ",
            "مِن شَرِّ مَا خَلَقَ",
            "وَمِن شَرِّ غَاسِقٍ إِذَا وَقَبَ",
            "وَمِن شَرِّ ٱلنَّفَّٰثَٰتِ فِي ٱلۡعُقَدِ",
            "وَمِن شَرِّ حَاسِدٍ إِذَا حَسَدَ"
        ]
    },
    nas: {
        title: "سورة الناس",
        verses: [
            "قُلۡ أَعُوذُ بِرَبِّ ٱلنَّاسِ",
            "مَلِكِ ٱلنَّاسِ",
            "إِلَٰهِ ٱلنَّاسِ",
            "مِن شَرِّ ٱلۡوَسۡوَاسِ ٱلۡخَنَّاسِ",
            "ٱلَّذِي يُوَسۡوِسُ فِي صُدُورِ ٱلنَّاسِ",
            "مِنَ ٱلۡجِنَّةِ وَٱلنَّاسِ"
        ]
    }
};

let currentSurah = 'ikhlas';
let userOrder = [];
let score = 0;

function loadPuzzle() {
    userOrder = [];
    const board = document.getElementById('puzzle-board');
    const resultBoard = document.getElementById('result-board');
    const feedback = document.getElementById('feedback');
    const scoreEl = document.getElementById('score-count');
    const titleEl = document.getElementById('surah-title');

    if (resultBoard) resultBoard.innerText = "اضغط على الآيات بالترتيب الصحيح...";
    if (feedback) feedback.innerText = '';
    if (scoreEl) scoreEl.innerText = score;
    if (titleEl) titleEl.innerText = puzzleData[currentSurah].title;
    if (!board) return;

    board.innerHTML = '';

    const originalVerses = puzzleData[currentSurah].verses;
    const shuffled = [...originalVerses].sort(() => Math.random() - 0.5);

    shuffled.forEach(verse => {
        const btn = document.createElement('button');
        btn.className = 'puzzle-piece';
        btn.innerText = verse;
        btn.onclick = () => pickVerse(btn, verse);
        board.appendChild(btn);
    });
}

function pickVerse(btn, verse) {
    if (btn.style.visibility === 'hidden') return;

    userOrder.push(verse);
    btn.style.visibility = 'hidden';

    const resultBoard = document.getElementById('result-board');
    if (resultBoard) resultBoard.innerText = userOrder.join(" ۝ ");

    if (userOrder.length === puzzleData[currentSurah].verses.length) {
        checkOrder();
    }
}

function checkOrder() {
    const correctOrder = puzzleData[currentSurah].verses;
    const isCorrect = userOrder.every((val, index) => val === correctOrder[index]);
    const feedback = document.getElementById('feedback');
    const scoreEl = document.getElementById('score-count');

    if (isCorrect) {
        score += 20;
        if (scoreEl) scoreEl.innerText = score;

        if (feedback) {
            feedback.innerText = "بارك الله فيك! رتّبت السورة بالشكل الصحيح 🌟";
            feedback.style.color = "green";
        }
    } else {
        if (feedback) {
            feedback.innerText = "الترتيب غير صحيح! تم إعادة المحاولة 🔄";
            feedback.style.color = "red";
        }
        setTimeout(loadPuzzle, 2000);
    }
}

function switchPuzzleSurah(surahName, btn) {
    currentSurah = surahName;
    document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
    if (btn) btn.classList.add('active');
    loadPuzzle();
}

window.onload = loadPuzzle;