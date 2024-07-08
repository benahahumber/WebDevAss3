const startButton = document.getElementById('start-quiz');
const questionContainer = document.getElementById('question-container');
const questionElement = document.getElementById('question');
const answerButtonsElement = document.getElementById('answer-buttons');
const scoreContainer = document.getElementById('score-container');
const scoreElement = document.getElementById('score');
const restartButton = document.getElementById('restart-quiz');

let shuffledQuestions, currentQuestionIndex, score;

const questions = [
    {
        question: "When is my birthday?",
        answers: [
            { text: "September 2nd", correct: true },
            { text: "December 22nd", correct: false },
            { text: "August 30th", correct: false },
            { text: "July 1st", correct: false }
        ]
    },
    {
        question: "What is a group of unicorns known as?",
        answers: [
            { text: "A herd", correct: false },
            { text: "A shimmer", correct: true },
            { text: "A crowd", correct: false },
            { text: "A rainbow", correct: false }
        ]
    },
    {
        question: "What is the fear of fun called?",
        answers: [
            { text: "Phobophobia", correct: false },
            { text: "Cherophobia", correct: true },
            { text: "Hilarophobia", correct: false },
            { text: "Funophobia", correct: false }
        ]
    },
    {
        question: "Which country invented ice cream?",
        answers: [
            { text: "USA", correct: false },
            { text: "Italy", correct: false },
            { text: "France", correct: false },
            { text: "China", correct: true }
        ]
    },
    {
        question: "Where is it illegal to frown at cows?",
        answers: [
            { text: "Australia", correct: false },
            { text: "Canada", correct: false },
            { text: "USA", correct: true },
            { text: "UK", correct: false }
        ]
    }
];

startButton.addEventListener('click', startQuiz);
restartButton.addEventListener('click', startQuiz);

function startQuiz() {
    startButton.classList.add('hide');
    scoreContainer.classList.add('hide');
    shuffledQuestions = questions.sort(() => Math.random() - 0.5);
    currentQuestionIndex = 0;
    score = 0;
    questionContainer.classList.remove('hide');
    setNextQuestion();
}

function setNextQuestion() {
    resetState();
    showQuestion(shuffledQuestions[currentQuestionIndex]);
}

function showQuestion(question) {
    questionElement.innerText = question.question;
    question.answers.forEach(answer => {
        const button = document.createElement('button');
        button.innerText = answer.text;
        button.classList.add('btn');
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener('click', selectAnswer);
        answerButtonsElement.appendChild(button);
    });
}

function resetState() {
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild(answerButtonsElement.firstChild);
    }
}

function selectAnswer(e) {
    const selectedButton = e.target;
    const correct = selectedButton.dataset.correct;
    if (correct) {
        score++;
    }
    currentQuestionIndex++;
    if (currentQuestionIndex < shuffledQuestions.length) {
        setNextQuestion();
    } else {
        showScore();
    }
}

function showScore() {
    questionContainer.classList.add('hide');
    scoreContainer.classList.remove('hide');
    scoreElement.innerText = score;
}
