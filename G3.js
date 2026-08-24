// أسئلة خمن الآية (عدد الأسئلة = عدد آيات كل سورة)
const questionsData = {
    ikhlas: [
        { 
            img: "1.jpeg", 
            hint: "💡 تلميح للآية 1: تدل على وحدانية الله سبحانه وتعالى وأن ليس له شريك.", 
            options: ["قُلْ هُوَ اللَّهُ أَحَدٌ", "اللَّهُ الصَّمَدُ", "وَلَمْ يَكُن لَّهُ كُفُوًا أَحَدٌ"], 
            correct: 0 
        },
        { 
            img: "2.jpeg", 
            hint: "💡 تلميح للآية 2: تعبر عن أن الجميع يقصد الله ويحتاج إليه وهو لا يحتاج لأحد.", 
            options: ["لَمْ يَلِدْ وَلَمْ يُولَدْ", "اللَّهُ الصَّمَدُ", "قُلْ هُوَ اللَّهُ أَحَدٌ"], 
            correct: 1 
        },
        { 
            img: "3.jpg", 
            hint: "💡 تلميح للآية 3: تعبر عن أن الله تعالى ليس له ولد ولا والد.", 
            options: ["وَلَمْ يَكُن لَّهُ كُفُوًا أَحَدٌ", "لَمْ يَلِدْ وَلَمْ يُولَدْ", "اللَّهُ الصَّمَدُ"], 
            correct: 1 
        },
        { 
            img: "4.jpg", 
            hint: "💡 تلميح للآية 4: تدل على أنه لا يوجد أحد مماثل أو مساوٍ لله عز وجل.", 
            options: ["وَلَمْ يَكُن لَّهُ كُفُوًا أَحَدٌ", "قُلْ هُوَ اللَّهُ أَحَدٌ", "لَمْ يَلِدْ وَلَمْ يُولَدْ"], 
            correct: 0 
        }
    ],
    falaq: [
        { 
            img: "5.jpeg", 
            hint: "💡 تلميح للآية 1: تعبر عن شروق الصباح ونوره والاستعاذة برب الفلق.", 
            options: ["قُلْ أَعُوذُ بِرَبِّ الْفَلَقِ", "مِن شَرِّ مَا خَلَقَ", "وَمِن شَرِّ حَاسِدٍ إِذَا حَسَدَ"], 
            correct: 0 
        },
        { 
            img: "WhatsApp Image 2026-08-24 at 3.01.23 PM.jpeg", 
            hint: "💡 تلميح للآية 2: تعبر عن طلب الحماية والأمان من شر جميع المخلوقات.", 
            options: ["وَمِن شَرِّ غَاسِقٍ إِذَا وَقَبَ", "مِن شَرِّ مَا خَلَقَ", "قُلْ أَعُوذُ بِرَبِّ الْفَلَقِ"], 
            correct: 1 
        },
        { 
            img: "6.jpeg", 
            hint: "💡 تلميح للآية 3: تعبر عن دخول الليل المظلم والظلمة.", 
            options: ["وَمِن شَرِّ غَاسِقٍ إِذَا وَقَبَ", "وَمِن شَرِّ النَّفَّاثَاتِ فِي الْعُقَدِ", "مِن شَرِّ مَا خَلَقَ"], 
            correct: 0 
        },
        { 
            img: "7.jpeg", 
            hint: "💡 تلميح للآية 4: تعبر عن الحماية من أعمال السحر والعقد.", 
            options: ["وَمِن شَرِّ حَاسِدٍ إِذَا حَسَدَ", "وَمِن شَرِّ النَّفَّاثَاتِ فِي الْعُقَدِ", "وَمِن شَرِّ غَاسِقٍ إِذَا وَقَبَ"], 
            correct: 1 
        },
        { 
            img: "8.jpeg", 
            hint: "💡 تلميح للآية 5: تعبر عن الوقاية من الشخص الذي يتمنى زوال النعمة عن غيره.", 
            options: ["وَمِن شَرِّ حَاسِدٍ إِذَا حَسَدَ", "قُلْ أَعُوذُ بِرَبِّ الْفَلَقِ", "وَمِن شَرِّ النَّفَّاثَاتِ فِي الْعُقَدِ"], 
            correct: 0 
        }
    ],
    nas: [
        { 
            img: "9.jpeg", 
            hint: "💡 تلميح للآية 1: اللجوء والاستعاذة برب البشر جميعاً.", 
            options: ["قُلْ أَعُوذُ بِرَبِّ النَّاسِ", "إِلَهِ النَّاسِ", "مِن شَرِّ الْوَسْوَاسِ الْخَنَّاسِ"], 
            correct: 0 
        },
        { 
            img: "10.jpeg", 
            hint: "💡 تلميح للآية 2: تعبر عن ملكية الله الكاملة وسيطرته على جميع الناس.", 
            options: ["مَلِكِ النَّاسِ", "إِلَهِ النَّاسِ", "قُلْ أَعُوذُ بِرَبِّ النَّاسِ"], 
            correct: 0 
        },
        { 
            img: "WhatsApp Image 2026-08-24 at 3.04.57 PM.jpeg", 
            hint: "💡 تلميح للآية 3: تعبر عن أن الله هو المعبود الخالق الوحيد للناس.", 
            options: ["مَلِكِ النَّاسِ", "إِلَهِ النَّاسِ", "الَّذِي يُوَسْوِسُ فِي صُدُورِ النَّاسِ"], 
            correct: 1 
        },
        { 
            img: "11.jpeg", 
            hint: "💡 تلميح للآية 4: الحماية من الشيطان الذي يختفي عند ذكر الله.", 
            options: ["مِن شَرِّ الْوَسْوَاسِ الْخَنَّاسِ", "الَّذِي يُوَسْوِسُ فِي صُدُورِ النَّاسِ", "مِنَ الْجِنَّةِ وَالنَّاسِ"], 
            correct: 0 
        },
        { 
            img: "WhatsApp Image 2026-08-24 at 3.04.57.jpeg", 
            hint: "💡 تلميح للآية 5: تعبر عن إلقاء الأفكار والوساوس داخل القلوب والأفئدة.", 
            options: ["الَّذِي يُوَسْوِسُ فِي صُدُورِ النَّاسِ", "مِن شَرِّ الْوَسْوَاسِ الْخَنَّاسِ", "مِنَ الْجِنَّةِ وَالنَّاسِ"], 
            correct: 0 
        },
        { 
            img: "12.jpeg", 
            hint: "💡 تلميح للآية 6: توضح أن الوسوسة قد تكون من الشياطين أو من أصدقاء السوء.", 
            options: ["مِنَ الْجِنَّةِ وَالنَّاسِ", "الَّذِي يُوَسْوِسُ فِي صُدُورِ النَّاسِ", "إِلَهِ النَّاسِ"], 
            correct: 0 
        }
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
    document.getElementById('question-count').innerText = `الآية ${currentQuestionIndex + 1} من ${questions.length}`;
    document.getElementById('score-count').innerText = `النقاط: ${score}`;
    
    document.getElementById('image-display').src = q.img;
    document.getElementById('hint-text').innerText = q.hint;
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
        feedback.innerText = '🎉 إجابة صحيحة! أحسنت التخمين';
        score++;
    } else {
        button.classList.add('wrong-anim');
        feedback.style.color = '#c62828';
        feedback.innerText = '💡 إجابة خاطئة، ركز في الصورة والآية القادمة';
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