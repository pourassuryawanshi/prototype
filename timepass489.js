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
let score = 0;

function loadQuestion() {
    const questionElement = document.getElementById("question");
    const optionButtons = document.querySelectorAll(".option-btn");
    const currentQuestion = questions[currentQuestionIndex];

    questionElement.textContent = currentQuestion.question;
    
    optionButtons.forEach((button, index) => {
        button.textContent = currentQuestion.options[index];
        button.disabled = false;
        button.classList.remove("correct", "wrong");
    });

    document.getElementById("feedback").textContent = ""; // Clear feedback message
}

function checkAnswer(selectedOption) {
    const currentQuestion = questions[currentQuestionIndex];
    const selectedAnswer = selectedOption.textContent;
    const feedbackElement = document.getElementById("feedback");

    // Disable all buttons after selecting an answer
    const optionButtons = document.querySelectorAll(".option-btn");
    optionButtons.forEach(button => button.disabled = true);

    // Check if the selected answer is correct
    if (selectedAnswer === currentQuestion.correctAnswer) {
        selectedOption.classList.add("correct");
        score++;
        feedbackElement.textContent = "Correct!";
        feedbackElement.style.color = "green"; // Show a "Correct" message in green
    } else {
        selectedOption.classList.add("wrong");
        feedbackElement.textContent = "Wrong! The correct answer is " + currentQuestion.correctAnswer + ".";
        feedbackElement.style.color = "red"; // Show a "Wrong" message in red
    }

    document.querySelector(".next-btn").style.display = "block"; // Show next button
}

function nextQuestion() {
    currentQuestionIndex++;

    if (currentQuestionIndex < questions.length) {
        loadQuestion();
        document.querySelector(".next-btn").style.display = "none"; // Hide next button
    } else {
        alert("Quiz finished! Your score: " + score + "/" + questions.length);
        document.querySelector(".next-btn").style.display = "none"; // Hide next button
    }
}

window.onload = loadQuestion;
