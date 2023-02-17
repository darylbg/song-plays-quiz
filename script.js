console.log("hello world");

// 1 user clicks button starts timer countdown and game
// 2 user presented with  a multiple choice question
// 3 if question answered correctly timer resets otherwise timer continues
// 4 user presented with a new question when the previous one is answered
// 5 if either timer reaches 0 or all questions answered game is over
// 6 user prompted to enter initials/name and save
// 7 if saved score is higher than all other scores, display score
// 8 prompt user to play again

var quizHeader = document.querySelector("#quiz-header");
var quizTitle = document.querySelector("#quiz-title");
var quizOptions = document.querySelector("#quiz-options");
var highScore = document.querySelector("#high-score");
var timer = document.querySelector("#timer");
// create start button
var startButton = document.createElement("button");
// create multiple question options
var option1 = document.createElement("button");
var option2 = document.createElement("button");
var option3 = document.createElement("button");
var option4 = document.createElement("button");
//var removeStartButton = quizOptions.removeChild(startButton);

function startQuiz() {
    quizTitle.textContent = "Click the button to start the game";

    startButton.textContent = "Play";
    quizOptions.append(startButton);
}

startQuiz();

startButton.addEventListener("click", function() {
    var secondsLeft = 15;

    function timeCountdown() {
        var timer = document.createElement("p");
        timer.id = "timer-p";
        timer.textContent = "15";
        highScore.append(timer);
        var timeLeft = setInterval(function() {
            secondsLeft--;
            timer.textContent = secondsLeft;
        if (secondsLeft === 0) {
            clearInterval(timeLeft);
            timer.textContent = "finished";
        }
        }, 1000);
    } timeCountdown();
});

startButton.addEventListener("click", function() {
    function game() {
        quizTitle.textContent = "Question 1: What is the abreviation for Cascading Style Sheets";
        startButton.remove();

        quizOptions.append(option1);
        option1.textContent = "HTML";
        quizOptions.append(option2);
        option2.textContent = "CSS";
        quizOptions.append(option3);
        option3.textContent = "Javascript";
        quizOptions.append(option4);
        option4.textContent = "Python";
        console.log(option2);

        var allOptions = quizOptions.querySelectorAll("button");
        for (i of allOptions) {
            i.addEventListener("click", function() {
                if (option2.click) {
                    console.log("right");
                } else {
                    console.log("wrong");
                }
                
            });
        }
    } game();
});