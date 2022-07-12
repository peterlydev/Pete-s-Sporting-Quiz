const quizData = [
    {
        question: 'Who won the English Premier League in 2013/14 season?',
        a: 'Chelsea',
        b: 'Manchester United',
        c: 'Manchester City',
        d: 'Liverpool',
        correct: "c"
    },

    {
        question: 'Who won the Wimbledon Mens Singles in 1984?',
        a: 'Jimmy Connors',
        b: 'John McEnroe',
        c: 'Bjorn Borg',
        d: 'Boris Becker',
        correct: "b"
    },

    {
        question: 'What does AEW stand for?',
        a: 'All Elite Wrestling',
        b: 'All Elegant Wrestling',
        c: 'Alpha Echo Wrestling',
        d: 'Acclaimed Elite Wrestling',
        correct: "a"
    },

    {
        question: 'Who won the World Snooker Championship in 1991?',
        a: 'Stephen Hendry',
        b: 'John Parrott',
        c: 'Steve Davis',
        d: 'Jimmy White',
        correct: "b"
    },

    {
        question: 'Which of these sports was introduced in the 2020 Tokyo Summer Olympics?',
        a: 'Judo',
        b: 'Skateboarding',
        c: 'Golf',
        d: 'Trampolining',
        correct: "b"
    },

    {
        question: 'Who won the Superbowl in 2013?',
        a: 'Baltimore Ravens',
        b: 'New York Giants',
        c: 'San Francisco 49ers',
        d: 'New England Patriots',
        correct: "a"
    }
];

const quiz = document.getElementById("quiz");
const questionEl = document.getElementById('question');
const answerEls = document.querySelectorAll(".answer");
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const submitBtn = document.getElementById('submit');

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
    deselectAnswers();
    const currentQuizData = quizData[currentQuiz];
    
    questionEl.innerHTML = currentQuizData.question;
    a_text.innerHTML = currentQuizData.a;
    b_text.innerHTML = currentQuizData.b;
    c_text.innerHTML = currentQuizData.c;
    d_text.innerHTML = currentQuizData.d;
}

function getSelected() {
    let answer = undefined;

    answerEls.forEach((answerEl) => {
        if(answerEl.checked) {
            answer = answerEl.id;
        }
    });

    return answer;
}

function deselectAnswers() {
    answerEls.forEach((answerEl) => {
        answerEl.checked = false;
    });
}

submitBtn.addEventListener("click", () => {
    // checks to see the answer
    const answer = getSelected();

    console.log(answer);

    if(answer) {
        if(answer === quizData[currentQuiz].correct) {
            score++;
        }

        currentQuiz++;
        if(currentQuiz < quizData.length) {
            loadQuiz();
        } else {
            //shows results
            if(score < 1) {
                quiz.innerHTML = `<h2 id="postQuiz">Oh dear! You answered ${score} out of ${quizData.length} questions correctly. Better luck next time!</h2>
                <button onclick="location.reload()">Reload</button>`;
            } else if(score < 4) {
                quiz.innerHTML = `<h2 id="postQuiz">Not bad! You answered ${score} out of ${quizData.length} questions correctly.</h2>
                <button onclick="location.reload()">Reload</button>`;
            } else if(score >= 4) {
                quiz.innerHTML = `<h2 id="postQuiz">Well played!! You answered ${score} out of ${quizData.length} questions correctly!</h2>
                <button onclick="location.reload()">Reload</button>`;
            }
        }
    }
});
