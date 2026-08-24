const matchData = {
    ikhlas: {
        title: "سورة الإخلاص",
        pairs: [
            { word: "أَحَدٌ", match: "واحد لا شريك له" },
            { word: "ٱلصَّمَدُ", match: "الذي يقصده الجميع في الحوائج" },
            { word: "لَمۡ يَلِدۡ", match: "ليس له ولد" },
            { word: "كُفُوًا", match: "مماثلاً أو شبهاً" }
        ]
    },
    falaq: {
        title: "سورة الفلق",
        pairs: [
            { word: "ٱلۡفَلَقِ", match: "الصبح" },
            { word: "غَاسِقٍ", match: "الليل إذا أظلم" },
            { word: "وَقَبَ", match: "دخل واشتد ظلامه" },
            { word: "ٱلنَّفَّٰثَٰتِ", match: "الساحرات" },
            { word: "حَاسِدٍ", match: "من يتمنى زوال النعمة عن غيره" }
        ]
    },
    nas: {
        title: "سورة الناس",
        pairs: [
            { word: "مَلِكِ ٱلنَّاسِ", match: "حاكمهم والمتصرف في أمورهم" },
            { word: "إِلَٰهِ ٱلنَّاسِ", match: "معبودهم بحق" },
            { word: "ٱلۡوَسۡوَاسِ", match: "الشيطان الذي يلقي الشر" },
            { word: "ٱلۡخَنَّاسِ", match: "الذي يختفي عند ذكر الله" },
            { word: "ٱلۡجِنَّةِ", match: "عالم الجن" }
        ]
    }
};

let currentSurah = 'ikhlas';
let selectedWord = null;
let matchedCount = 0;
let score = 0;

function loadMatchGame() {
    const container = document.querySelector('.match-container');
    const feedback = document.getElementById('feedback');
    const scoreEl = document.getElementById('score-count');
    const titleEl = document.getElementById('surah-title');

    if (!container) return;

    container.innerHTML = '';
    selectedWord = null;
    matchedCount = 0;

    if (feedback) feedback.innerText = '';
    if (scoreEl) scoreEl.innerText = score;
    if (titleEl) titleEl.innerText = matchData[currentSurah].title;

    const list = matchData[currentSurah].pairs;
    const words = [...list].sort(() => Math.random() - 0.5);
    const matches = [...list].map(item => item.match).sort(() => Math.random() - 0.5);

    const col1 = document.createElement('div');
    col1.className = 'match-col';
    words.forEach(item => {
        const div = document.createElement('div');
        div.className = 'match-item';
        div.innerText = item.word;
        div.onclick = () => selectItem(div, item.word, 'word');
        col1.appendChild(div);
    });

    const col2 = document.createElement('div');
    col2.className = 'match-col';
    matches.forEach(m => {
        const div = document.createElement('div');
        div.className = 'match-item';
        div.innerText = m;
        div.onclick = () => selectItem(div, m, 'match');
        col2.appendChild(div);
    });

    container.appendChild(col1);
    container.appendChild(col2);
}

function selectItem(el, value, type) {
    if (el.classList.contains('matched')) return;
    const feedback = document.getElementById('feedback');
    const scoreEl = document.getElementById('score-count');

    if (!selectedWord) {
        if (type !== 'word') return;
        document.querySelectorAll('.match-item').forEach(i => i.classList.remove('selected'));
        el.classList.add('selected');
        selectedWord = { el, value };
    } else {
        if (type === 'word') {
            document.querySelectorAll('.match-item').forEach(i => i.classList.remove('selected'));
            el.classList.add('selected');
            selectedWord = { el, value };
            return;
        }

        const pair = matchData[currentSurah].pairs.find(item => item.word === selectedWord.value);
        if (pair && pair.match === value) {
            selectedWord.el.classList.remove('selected');
            selectedWord.el.classList.add('matched');
            el.classList.add('matched');
            selectedWord = null;
            matchedCount++;

            // زيادة النقاط
            score += 10;
            if (scoreEl) scoreEl.innerText = score;

            if (matchedCount === matchData[currentSurah].pairs.length && feedback) {
                feedback.innerText = "رائع! وصلت كل الكلمات بمعانيها الصحيحة 🎯";
                feedback.style.color = "green";
            }
        } else {
            if (feedback) {
                feedback.innerText = "توصيل غير صحيح، حاول مرة أخرى ❌";
                feedback.style.color = "red";
            }
        }
    }
}

function switchMatchSurah(surahName, btn) {
    currentSurah = surahName;
    document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
    if (btn) btn.classList.add('active');
    loadMatchGame();
}

window.onload = loadMatchGame;