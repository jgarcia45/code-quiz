//Variable Definitions
var beginQuiz = document.querySelector("#display-questions");
var newQuestion = document.querySelector("#question-zone");
var timer = document.querySelector("#timer-start");
var multipleChoice = document.querySelector("#multiple-choice");

// Creating the questions with answers and storing them in an array as an object
var quizQuestions = [
    {
        //1. <> 2. ~ 3. ==! 4. !==
        question: "Which operator returns true if the two compared values are not equal?",
        answer: "!=="
    },
    {
        // 1. self 2. object 3. target 4. source
        question: "Which property references the DOM object that dispatched an event?",
        answer: "target"
    },
    {
        // 1. JSON.fromString(); 2. JSON.parse() 3. JSON.toObject() 4. JSON.stringify()
        question: "Which method converts JSON data to a JavaScript object?",
        answer: "JSON.parse()"
    },
    {
        // 1. Object.get() 2. Object.loop() 3. Object.each() 4. Object.keys()
        question: "Which Object method returns an iterable that can be used to iterate over the properties of an object?",
        answer: "Object.keys()"
    },
    {
        // 1. this 2. catch 3. function 4. array
        question: "Which of the following is not a keyword in JavaScript?",
        answer: "array"
    }
]

// Starts the timer
function countDown() {
    var timeLeft = 59;

    // Use the `setInterval()` method to call a function to be executed every 1000 milliseconds
    var timeInterval = setInterval(function () {
        // As long as the `timeLeft` is greater than 1
        if (timeLeft > 1) {
            // Set the `textContent` of `timer` to show the remaining seconds
            timer.textContent = 'Time: ' + timeLeft;
            // Decrement `timeLeft` by 1
            timeLeft--;
        } else if (timeLeft === 1) {
            timer.textContent = 'Time: ' + timeLeft;
            timeLeft--;
        } else {
            // Once `timeLeft` gets to 0, set `timer` to an empty string
            timer.textContent = '';
            // Use `clearInterval()` to stop the timer
            clearInterval(timeInterval);
        }
    }, 1000);
}


// Function to Start Quiz
var startQuiz = function (event) {
    event.preventDefault();
    countDown();

    for(i=0;i<quizQuestions.length; i++) {
        newQuestion.textContent = quizQuestions[i].question;
        
    }

};

// Saves the high scores in local storage
var saveScores = function () {

};

var loadScores = function () {

};

// Create a new task
beginQuiz.addEventListener("click", startQuiz);