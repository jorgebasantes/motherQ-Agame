const questionsLevel1 = [
    { question: "Jorge Eduardo Ba....?", answer: "basantes" },
    { question: "cual es la capital de Ecuador?", answer: "quito" },
    { question: "Maria Guevara fue reina de Ma...?", answer: "manta" },
    { question:"¿Qué deporte es el más popular en Ecuador?",answer:"futbol"},
    { question:"¿Cómo se llama el famoso ratón de Disney?",answer:"mickey mouse"},
];

let currentQuestionIndex = 0;

function displayQuestion() {
    if (currentQuestionIndex < questionsLevel1.length) {
        const questionObj = questionsLevel1[currentQuestionIndex];
        document.getElementById('question').innerText = questionObj.question;
        document.getElementById('answer').value = '';
        document.getElementById('message').innerText = '';
        document.getElementById('level').innerText = `Level 1 - Question ${currentQuestionIndex + 1}`;
    } else {
        showAnimation("ooo i love you mariaa!");
        setTimeout(() => {
            window.location.href = 'level2.html';
        }, 2000);
    }
}

function submitAnswer() {
    const userAnswer = document.getElementById('answer').value.trim().toLowerCase();
    const correctAnswer = questionsLevel1[currentQuestionIndex].answer.toLowerCase();

    if (userAnswer === correctAnswer) {
        currentQuestionIndex++;
        displayQuestion();
    } else {
        document.getElementById('message').innerText = 'Incorrecto, intenta de nuevo!';
    }
}

function showAnimation(message) {
    const animationMessage = document.getElementById('animation-message');
    animationMessage.innerText = message;
    animationMessage.style.display = 'block';
    setTimeout(() => {
        animationMessage.style.display = 'none';
    }, 2000);
}

// Initialize the game by displaying the first question
displayQuestion();
