// 1 user clicks button starts timer countdown and game
// 2 user presented with  a multiple choice question
// 3 if question answered correctly timer resets otherwise timer continues
// 4 user presented with a new question when the previous one is answered
// 5 if either timer reaches 0 or all questions answered game is over
// 6 user prompted to enter initials/name and save
// 7 if saved score is higher than all other scores, display score
// 8 prompt user to play again

var instructionsEl = document.getElementById("instructions");
var playBtn = document.getElementById("play-btn");
var main1El = document.getElementById("main1");
var timerCountdownEl = document.getElementById("timer-countdown");
var leftSongEl = document.getElementById("left-song");
var leftartistEl = document.getElementById("left-artist");
var rightSongEl = document.getElementById("right-song");
var rightArtistEl = document.getElementById("right-artist");


playBtn.addEventListener("click", startGame);

function startGame() {
        instructionsEl.style.visibility = "hidden";
        main1El.style.visibility = "visible";
        countdownTimer();
} 

var secondsLeft = 60;

function countdownTimer() {
    var timerInterval = setInterval(function() {
        secondsLeft--;
        timerCountdownEl.textContent = secondsLeft;

        if (secondsLeft === 0) {
            clearInterval(timerInterval);
        }
    }, 1000);
}

var items = [
    {
       "id": 01,
       "song": "Don't stop believing",
       "plays": 1480773640,
       "artist": "Journey"
    },
    {
       "id": 02,
       "song": "Gimme! Gimme! Gimme!",
       "plays": 529080834,
       "artist": "ABBA"
    },
    {
       "id": 03,
       "song": "Sweet Child O' Mine",
       "plays": 1414551943,
       "artist": "Guns N' Roses"
    },
    {
       "id": 04,
       "song": "Enter Sandman",
       "plays": 1035326214,
       "artist": "Metallica"
    },
    {
       "id": 05,
       "song": "Livin' On a Prayer",
       "plays": 1152250148,
       "artist": "Bon Jovi"
    },
    {
       "id": 06,
       "song": "Take on Me",
       "plays": 1316714415,
       "artist": "a-ha"
    },
    {
       "id": 07,
       "song": "Africa",
       "plays": 1367962446,
       "artist": "Toto"
    },
    {
       "id": 08,
       "song": "I'm Still Standin",
       "plays": 664607263,
       "artist": "Elton John"
    }
 ];



function setNextItem() {
    var selectItems = [];
    for (i = 0; i < 2; i++) {
        var randomItems = items[Math.floor(Math.random() * items.length)];
        
        //if (selectItems[0] != selectItems[1]) {
            
        //}
        selectItems.push(randomItems);
        console.log(selectItems);
        //var obj = JSON.parse(selectItems);
        //leftSongEl.textContent = selectItems(obj["song"]);
       
    } 
} setNextItem();































































































































































/*var quizHeader = document.querySelector("#quiz-header");
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
/*localStorage.setItem("win", "0");
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
                if (event.target.textContent === "CSS") {
                    console.log("right");
                    var wins = Number(localStorage.getItem("win"));
                    localStorage.setItem("win", ++wins);
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
            if (event.target.textContent === "Brendan Eich") {
                console.log("right");
                var wins = Number(localStorage.getItem("win"));
                localStorage.setItem("win", ++wins);
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
            if (event.target.textContent === "£52,500") {
                console.log("right");
                var wins = Number(localStorage.getItem("win"));
                localStorage.setItem("win", ++wins);
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
            if (event.target.textContent === "108") {
                console.log("right");
                var wins = Number(localStorage.getItem("win"));
                localStorage.setItem("win", ++wins);
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
            if (event.target.textContent === "53") {
                console.log("right");
                var wins = Number(localStorage.getItem("win"));
                localStorage.setItem("win", ++wins);
            } else {
                console.log("wrong");
            }
        });
    });
}*/




