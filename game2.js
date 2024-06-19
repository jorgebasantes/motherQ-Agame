const questionsLevel2 = [
    { question: "donde en new york trabaja?", answer: "manhattan" },
    { question: "New york is the big?", answer: "apple" },
    { question: "¿En qué país se originó la pizza?", answer: "italia" },
    { question: "564 e2st apt..cual es el apt?", answer: "9c" }
];

let currentQuestionIndex = 0;

function displayQuestion() {
    if (currentQuestionIndex < questionsLevel2.length) {
        const questionObj = questionsLevel2[currentQuestionIndex];
        document.getElementById('question').innerText = questionObj.question;
        document.getElementById('answer').value = '';
        document.getElementById('message').innerText = '';
        document.getElementById('level').innerText = `Level 2 - Question ${currentQuestionIndex + 1}`;
    } else {
        showAnimation("Nice job!");
        setTimeout(() => {
            window.location.href = 'finish.html';
        }, 2000);
    }
}

function submitAnswer() {
    const userAnswer = document.getElementById('answer').value.trim().toLowerCase();
    const correctAnswer = questionsLevel2[currentQuestionIndex].answer.toLowerCase();

    if (userAnswer === correctAnswer) {
        currentQuestionIndex++;
        displayQuestion();
    } else {
        document.getElementById('message').innerText = 'Incorrect, try again!';
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
