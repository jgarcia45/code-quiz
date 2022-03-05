//Variable Definitions
var infoQuiz = document.querySelector("#quiz-info");
var beginQuiz = document.querySelector("#start-quiz");
var timer = document.querySelector("#timer-start"); //Setting the timer DOM
var displayQuestion = document.querySelector("#question");
var multipleChoice = document.querySelector("#multipl-choice");
var choice1 = document.querySelector("#choice1");
var choice2 = document.querySelector("#choice2");
var choice3 = document.querySelector("#choice3");
var choice4 = document.querySelector("#choice4");
var score = 0; // User Score
var timeLeft = 59; // Start Timer (Begins at 59 because of 1 sec delay in countDonw())

// Creating the questions with answers and storing them in an array as an object
var quizQuestions = [
    {
        question: "Which operator returns true if the two compared values are not equal?",
        choices: ["<>", "~", "==!", "!=="],
        answer: "!=="
    },
    {
        question: "Which property references the DOM object that dispatched an event?",
        choices: ["self", "object", "target", "source"],
        answer: "target"
    },
    {
        question: "Which method converts JSON data to a JavaScript object?",
        choices: ["JSON.fromString();", "JSON.parse()", "JSON.toObject()", "JSON.stringify()"],
        answer: "JSON.parse()"
    },
    {
        question: "Which Object method returns an iterable that can be used to iterate over the properties of an object?",
        choices: ["Object.get()", "Object.loop()", "Object.each()", "Object.keys()"],
        answer: "Object.keys()"
    },
    {
        question: "Which of the following is not a keyword in JavaScript?",
        choices: ["this", "catch", "function", "array"],
        answer: "array"
    }
]

// Starts the timer
function countDown() {

    // Use the `setInterval()` method to call a function to be executed every 1000 milliseconds
    var timeInterval = setInterval(function () {
        // As long as the `timeLeft` is greater than 1
        if (timeLeft > 1) {
            // Set the `textContent` of `timer` to show the remaining seconds
            timer.textContent = 'Time: ' + timeLeft;
            // Decrement `timeLeft` by 1
            timeLeft--;
        } else {
            // Once `timeLeft` gets to 0, set `timer` to an empty string
            timer.textContent = 'Time: ' + '0';
            // Use `clearInterval()` to stop the timer
            clearInterval(timeInterval);
            endQuiz();
        }
    }, 1000);
}


// Function to Start Quiz
var startQuiz = function (event) {
    event.preventDefault();
    countDown();
    infoQuiz.setAttribute("style", "display: none;");

    for (i = 0; i < quizQuestions.length; i++) {
        displayQuestion.textContent = quizQuestions[i].question;
        choice1.textContent = quizQuestions[i].choices[0];
        choice2.textContent = quizQuestions[i].choices[1];
        choice3.textContent = quizQuestions[i].choices[2];
        choice4.textContent = quizQuestions[i].choices[3];
        //console.log(choice1.textContent);

        if(choice1.textContent === quizQuestions.answer) {
            console.log("no");
        } else if(choice2.textContent === quizQuestions.answer) {
            console.log("no");
        } else if(choice3.textContent === quizQuestions.answer) {
            console.log("no");
        } else {
            console.log("didnt check");
        }
    }

};

var endQuiz = function () {
    // multipleChoice.setAttribute("style", "display: none;");

};

// Saves the high scores in local storage
var saveScores = function () {

};

var loadScores = function () {

};

// Create a new task
beginQuiz.addEventListener("click", startQuiz);