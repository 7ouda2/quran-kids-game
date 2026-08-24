// أسئلة أكمل الآية (5 أسئلة لكل سورة)
const questionsData = {
    ikhlas: [
        { q: "قُلْ هُوَ اللَّهُ .....", options: ["أَحَدٌ", "الصَّمَدُ", "الْعَلِيمُ"], correct: 0 },
        { q: "اللَّهُ .....", options: ["الْغَفُورُ", "الصَّمَدُ", "الرَّحْمَنُ"], correct: 1 },
        { q: "لَمْ يَلِدْ .....", options: ["وَلَمْ يَمُوتُ", "وَلَمْ يُولَدْ", "وَلَمْ يَخْلُقْ"], correct: 1 },
        { q: "وَلَمْ يَكُن لَّهُ كُفُوًا .....", options: ["أَحَدٌ", "صَمَدٌ", "كَبِيرٌ"], correct: 0 },
        { q: "سورة الإخلاص تبدأ بـ: (قُلْ هُوَ اللَّهُ .....)", options: ["أَحَدٌ", "أَكْبَرُ", "عَظِيمٌ"], correct: 0 }
    ],
    falaq: [
        { q: "قُلْ أَعُوذُ بِرَبِّ .....", options: ["النَّاسِ", "الْفَلَقِ", "الْعَالَمِينَ"], correct: 1 },
        { q: "مِن شَرِّ مَا .....", options: ["خَلَقَ", "عَمِلَ", "يَكْسِبُ"], correct: 0 },
        { q: "وَمِن شَرِّ غَاسِقٍ إِذَا .....", options: ["أَظْلَمَ", "وَقَبَ", "جَاءَ"], correct: 1 },
        { q: "وَمِن شَرِّ النَّفَّاثَاتِ فِي .....", options: ["الْعُقَدِ", "الْجِبَالِ", "الصُُّدُورِ"], correct: 0 },
        { q: "وَمِن شَرِّ حَاسِدٍ إِذَا .....", options: ["حَسَدَ", "نَامَ", "قَامَ"], correct: 0 }
    ],
    nas: [
        { q: "قُلْ أَعُوذُ بِرَبِّ .....", options: ["الْفَلَقِ", "النَّاسِ", "السَّمَاءِ"], correct: 1 },
        { q: "مَلِكِ .....", options: ["النَّاسِ", "الْخَلْقِ", "الْأَرْضِ"], correct: 0 },
        { q: "إِلَهِ .....", options: ["الْكَوْنِ", "النَّاسِ", "الْعَالَمِينَ"], correct: 1 },
        { q: "مِن شَرِّ الْوَسْوَاسِ .....", options: ["الْخَنَّاسِ", "الْكَبِيرِ", "الْبَعِيدِ"], correct: 0 },
        { q: "الَّذِي يُوَسْوِسُ فِي صُدُورِ .....", options: ["الْخَلْقِ", "النَّاسِ", "الْمَلَائِكَةِ"], correct: 1 }
    ]
};

let currentSurah = 'ikhlas';
let currentQuestionIndex = 0;
let score = 0;

window.onload = () => {
    loadQuestion();
};

function switchSurah(surahKey, element) {
    document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
    element.classList.add('active');

    currentSurah = surahKey;
    restartQuiz();
}

function loadQuestion() {
    const quizBody = document.getElementById('quiz-body');
    const resultScreen = document.getElementById('result-screen');
    const questions = questionsData[currentSurah];

    if (currentQuestionIndex >= questions.length) {
        quizBody.style.display = 'none';
        resultScreen.style.display = 'block';
        document.getElementById('final-score').innerText = `درجتك: ${score} / ${questions.length}`;
        return;
    }

    quizBody.style.display = 'block';
    resultScreen.style.display = 'none';

    const q = questions[currentQuestionIndex];
    document.getElementById('question-count').innerText = `السؤال ${currentQuestionIndex + 1} من ${questions.length}`;
    document.getElementById('score-count').innerText = `النقاط: ${score}`;
    document.getElementById('question-text').innerText = q.q;
    document.getElementById('feedback').innerText = '';

    const optionsContainer = document.getElementById('options-container');
    optionsContainer.innerHTML = '';

    q.options.forEach((opt, index) => {
        const btn = document.createElement('button');
        btn.className = 'opt-btn';
        btn.innerText = opt;
        btn.onclick = () => selectAnswer(btn, index === q.correct);
        optionsContainer.appendChild(btn);
    });
}

function selectAnswer(button, isCorrect) {
    const buttons = document.querySelectorAll('.opt-btn');
    buttons.forEach(btn => btn.disabled = true);

    const feedback = document.getElementById('feedback');

    if (isCorrect) {
        button.classList.add('correct-anim');
        feedback.style.color = '#2e7d32';
        feedback.innerText = '🎉 ممتااااز! إجابة صحيحة';
        score++;
    } else {
        button.classList.add('wrong-anim');
        feedback.style.color = '#c62828';
        feedback.innerText = '💡 حاول مرة أخرى في السؤال القادم';
    }

    setTimeout(() => {
        currentQuestionIndex++;
        loadQuestion();
    }, 1200);
}

function restartQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    loadQuestion();
}