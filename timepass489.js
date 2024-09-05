const questions = [
    {
        question: "Which article of the constitution  contains special provision with respect to educational grants for the benefit of Anglo-Indian community?",
        options: ["Article 335", "Article 337", "Article 339", "Article 341"],
        correctAnswer: "Article 337"
    },
    {
        question: "Which of the following section of IPC will not apply to a criminal act done by one person even if there are a series of acts and applies to several people committing the act?",
        options: ["Section 22", "Section 24", "Section 34", "None of the above"],
        correctAnswer: "Section 34"
    },
    {
        question: "Which of the following sections of the Hindu Marriage Act recognizes the ceremonies and customs of marriage?",
        options: ["Section 6", "Section 7", "Section 8", "Section 9"],
        correctAnswer: "Section 7"
    }
];
let currentQuestionIndex = 0;
function loadQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    document.getElementById("question").innerText = currentQuestion.question;
    const optionButtons = document.querySelectorAll(".option-btn");
    optionButtons.forEach((button, index) => {
        button.innerText = currentQuestion.options[index];
        button.style.backgroundColor = "#007bff";
        button.style.color = "#fff";
        button.disabled = false;
    });
    document.querySelector('.next-btn').style.display = "none";
}
function checkAnswer(button) {
    const correctAnswer = questions[currentQuestionIndex].correctAnswer;
    if (button.innerText === correctAnswer) {
        button.style.backgroundColor = "#28a745";
        button.style.color = "#fff";
    } else {
        button.style.backgroundColor = "#dc3545";
        button.style.color = "#fff";
    }
    document.querySelectorAll('.option-btn').forEach(btn => btn.disabled = true);
    document.querySelector('.next-btn').style.display = "inline-block";
}
function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        loadQuestion();
    } else {
        alert("Quiz completed!");
    }
}
window.onload = loadQuestion;
