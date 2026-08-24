// بيانات الأسئلة (5 أسئلة لكل سورة)
const questionsData = {
    ikhlas: [
        { q: "ما هي السورة التي تعادل ثلث القرآن الكريم؟", options: ["سورة الإخلاص", "سورة الفلق", "سورة الناس"], correct: 0 },
        { q: "معنى كلمة 'الصَّمَدُ' أي الذي:", options: ["يحتاج إلى غيره", "يُصمد إليه في الحوائج ولا يحتاج لأحد", "يخلق الأرض"], correct: 1 },
        { q: "ما معنى 'لَمْ يَلِدْ وَلَمْ يُولَدْ'؟", options: ["ليس له ولد ولا والد", "خلق السماوات", "يعلم الجهر والسر"], correct: 0 },
        { q: "معنى 'كُفُوًا' في آية (وَلَمْ يَكُن لَّهُ كُفُوًا أَحَدٌ):", options: ["كبيرًا", "مكافئًا أو شبيهًا", "عظيمًا"], correct: 1 },
        { q: "كم عدد آيات سورة الإخلاص؟", options: ["3 آيات", "4 آيات", "5 آيات"], correct: 1 }
    ],
    falaq: [
        { q: "ما معنى كلمة 'الْفَلَقِ'؟", options: ["الليل والظلام", "الصبح والضياء", "الشمس"], correct: 1 },
        { q: "معنى 'غَاسِقٍ إِذَا وَقَبَ':", options: ["الليل إذا أظلم ودخل", "الصبح إذا أشرق", "الريح إذا هبت"], correct: 0 },
        { q: "من هم 'النَّفَّاثَاتِ فِي الْعُقَدِ'؟", options: ["الملايكة", "الساحرات اللاتي ينفثن في الخيط", "الناس الصالحين"], correct: 1 },
        { q: "نستعيذ في سورة الفلق من شر الحاسد إذا:", options: ["نام", "حسد", "تكلم"], correct: 1 },
        { q: "كم عدد آيات سورة الفلق؟", options: ["5 آيات", "6 آيات", "4 آيات"], correct: 0 }
    ],
    nas: [
        { q: "الذي يُوَسْوِسُ فِي صُدُورِ النَّاسِ هو:", options: ["الوسواس الخنَّاس (الشيطان)", "الإنسان الصالح", "الملَك"], correct: 0 },
        { q: "معنى كلمة 'الْخَنَّاسِ' أي الذي:", options: ["يختفي ويهرب عند ذكر الله", "يظهر دائمًا", "يمشي سريعًا"], correct: 0 },
        { q: "نستعيذ بالله في سورة الناس من شر الوسواس من:", options: ["الْجِنَّةِ وَالنَّاسِ", "الطيور والحيوانات", "الظلام فقط"], correct: 0 },
        { q: "كم عدد آيات سورة الناس؟", options: ["5 آيات", "6 آيات", "7 آيات"], correct: 1 },
        { q: "سورة الناس وسورة الفلق تُسميان بـ:", options: ["الزهراوان", "المعوذتان", "السَّبْعُ الْمَثَانِي"], correct: 1 }
    ]
};

let currentSurah = 'ikhlas';
let currentQuestionIndex = 0;
let score = 0;

// تشغيل أول سورة عند تحميل الصفحة
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
        // عرض صفحة النتيجة والإعادة
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
        feedback.innerText = '🎉 أحسنت! إجابة صحيحة!';
        score++;
    } else {
        button.classList.add('wrong-anim');
        feedback.style.color = '#c62828';
        feedback.innerText = '💡 إجابة خاطئة!';
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