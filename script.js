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
option1.setAttribute("class", "option");
option1.setAttribute("id", "option1");
option1.setAttribute("data-storage", "0");

var option2 = document.createElement("button");
option2.setAttribute("class", "option");
option2.setAttribute("id", "option2");
option2.setAttribute("data-storage", "0");

var option3 = document.createElement("button");
option3.setAttribute("class", "option");
option3.setAttribute("id", "option3");
option3.setAttribute("data-storage", "0");

var option4 = document.createElement("button");
option4.setAttribute("class", "option");
option4.setAttribute("id", "option4");
option4.setAttribute("data-storage", "0");

function startQuiz() {
    quizTitle.textContent = "Click the button to start the game";

    startButton.textContent = "Play";
    quizOptions.append(startButton);
}

startQuiz();

//var secondsLeft = 15;
var timer = document.createElement("p");
//timer.id = "timer-p";
timer.textContent = "15";
highScore.append(timer);

/*function timeCountdown() {
    
    var timeLeft = setInterval(function() {
        secondsLeft--;
        timer.textContent = secondsLeft;
    if (secondsLeft === 0) {
        clearInterval(timeLeft);
        timer.textContent = "15";
        //timeCountdown();
    }
    }, 1000);
}*/

//startButton.addEventListener("click", function() {
    //var Countdown = setInterval(timeCountdown, 15000);
    //timeCountdown();
//});
localStorage.setItem("win", "0");
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

        localStorage.setItem("win", "0");
        document.querySelectorAll(".option").forEach(item => {
            item.addEventListener('click', event => {
                if (event.target.textContent == "CSS") {
                    console.log("right");
                    var win = Number(localStorage.getItem("win"));
                    localStorage.setItem("win", ++win);
                    question2();
                } else {
                    console.log("wrong");
                    question2();
                }
            });
        });
    } game();
     
});

function question2() {
    quizTitle.textContent = "Question 2: Who created Javascript";
    quizOptions.append(option1);
    option1.textContent = "Thomas Eriksen";
    quizOptions.append(option2);
    option2.textContent = "Jacob Lee";
    quizOptions.append(option3);
    option3.textContent = "Marylin Monroe";
    quizOptions.append(option4);
    option4.textContent = "Brendan Eich";

    document.querySelectorAll(".option").forEach(item => {
        item.addEventListener('click', event => {
            if (event.target.textContent == "Brendan Eich") {
                console.log("right");
                var win = Number(localStorage.getItem("win"));
                localStorage.setItem("win", ++win);
                question3();
            } else {
                console.log("wrong");
                question3();
            }
        });
    });
}

function question3() {
    quizTitle.textContent = "Question 3: What is the average UK salary for a web developer";
    quizOptions.append(option1);
    option1.textContent = "£52,500";
    quizOptions.append(option2);
    option2.textContent = "£88,000";
    quizOptions.append(option3);
    option3.textContent = "£35,100";
    quizOptions.append(option4);
    option4.textContent = "£40,000";

    document.querySelectorAll(".option").forEach(item => {
        item.addEventListener('click', event => {
            if (event.target.textContent == "£52,500") {
                console.log("right");
                var win = Number(localStorage.getItem("win"));
                localStorage.setItem("win", ++win);
                question4();
            } else {
                console.log("wrong");
                question4();
            }
        });
    });
}

function question4() {
    quizTitle.textContent = "Question 4: How many sides does an Icosioctagon have";
    quizOptions.append(option1);
    option1.textContent = "28";
    quizOptions.append(option2);
    option2.textContent = "18";
    quizOptions.append(option3);
    option3.textContent = "108";
    quizOptions.append(option4);
    option4.textContent = "48";

    document.querySelectorAll(".option").forEach(item => {
        item.addEventListener('click', event => {
            if (event.target.textContent == "108") {
                console.log("right");
                var win = Number(localStorage.getItem("win"));
                localStorage.setItem("win", ++win);
                question5();
            } else {
                console.log("wrong");
                question5();
            }
        });
    });
}

function question5() {
// https://www.musicgenreslist.com/metal-music-genre/
    quizTitle.textContent = "How many subgenres of Metal Music are there";
    quizOptions.append(option1);
    option1.textContent = "8";
    quizOptions.append(option2);
    option2.textContent = "17";
    quizOptions.append(option3);
    option3.textContent = "21";
    quizOptions.append(option4);
    option4.textContent = "53";

    document.querySelectorAll(".option").forEach(item => {
        item.addEventListener('click', event => {
            if (event.target.textContent == "53") {
                console.log("right");
                var win = Number(localStorage.getItem("win"));
                localStorage.setItem("win", ++win);
            } else {
                console.log("wrong");
            }
        });
    });
}