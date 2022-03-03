//Variable Definitions
var beginQuiz = document.querySelector("#start-quiz");
var questions = document.querySelector("#display-questions");

// Function to Start Quiz
var startQuiz = function (event) {
    console.log("Quiz has began");
};

// Saves the high scores in local storage
var saveScores = function () {

};

var loadScores = function () {

};

// Create a new task
beginQuiz.addEventListener("submit", startQuiz);