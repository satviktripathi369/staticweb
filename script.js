// Quiz questions data
const quizQuestions = [
    {
        question: "What does HTML stand for?",
        options: ["Hyper Text Markup Language", "Hyperlinks and Text Markup Language", "Home Tool Markup Language"],
        answer: 0
    },
    {
        question: "What is the correct way to comment in HTML?",
        options: ["// This is a comment", "<!-- This is a comment -->", "/* This is a comment */"],
        answer: 1
    },
    {
        question: "What does CSS stand for?",
        options: ["Creative Style Sheets", "Cascading Style Sheets", "Computer Style Sheets"],
        answer: 1
    },
    {
        question: "Which property is used to change the text color in CSS?",
        options: ["color", "text-color", "font-color"],
        answer: 0
    },
    {
        question: "In JavaScript, what is the 'this' keyword?",
        options: ["A keyword that refers to the current object", "A keyword that refers to the previous object", "A keyword that refers to the next object"],
        answer: 0
    },
    {
        question: "What is the result of the expression '3' + 2 in JavaScript?",
        options: ["5", "32", "Error"],
        answer: 1
    },
    {
        question: "Which of the following is not a valid data type in JavaScript?",
        options: ["String", "Boolean", "Integer"],
        answer: 2
    }
];

// Function to generate quiz HTML
function generateQuiz() {
    const quizContainer = document.getElementById("quiz-container");

    let quizHTML = "";
    quizQuestions.forEach((question, index) => {
        quizHTML += `<div class="question">${index + 1}. ${question.question}</div>`;
        question.options.forEach((option, optionIndex) => {
            quizHTML += `
                <div class="option">
                    <input type="radio" id="option-${index}-${optionIndex}" name="question-${index}" value="${optionIndex}">
                    <label for="option-${index}-${optionIndex}">${option}</label>
                </div>
            `;
        });
    });

    quizContainer.innerHTML = quizHTML;
}

// Function to calculate quiz score
function calculateScore() {
    let score = 0;
    quizQuestions.forEach((question, index) => {
        const selectedOption = document.querySelector(`input[name="question-${index}"]:checked`);
        if (selectedOption) {
            if (parseInt(selectedOption.value) === question.answer) {
                score++;
            }
        }
    });
    return score;
}

// Event listener for quiz submission
document.getElementById("submit-quiz").addEventListener("click", () => {
    const score = calculateScore();
    alert(`Your score: ${score}/${quizQuestions.length}`);
});

// Generate quiz when the page loads
generateQuiz();
