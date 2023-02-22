// 1 user clicks button starts timer countdown and game
// 2 user presented with  a multiple choice question
// 3 if question answered correctly timer resets otherwise timer continues
// 4 user presented with a new question when the previous one is answered
// 5 if either timer reaches 0 or all questions answered game is over
// 6 user prompted to enter initials/name and save
// 7 if saved score is higher than all other scores, display score
// 8 prompt user to play again
var leftContainerEl = document.getElementById("1A");
var rightContainerEl = document.getElementById("1B");
var instructionsEl = document.getElementById("instructions");
var playBtn = document.getElementById("play-btn");
var main1El = document.getElementById("main1");
var timerCountdownEl = document.getElementById("timer-countdown");
var highScoreEl = document.getElementById("high-score");
var leftSongEl = document.getElementById("left-song");
var leftartistEl = document.getElementById("left-artist");
var rightSongEl = document.getElementById("right-song");
var rightArtistEl = document.getElementById("right-artist");

localStorage.setItem("right", "0");

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
    },
    {
        "id": 09,
        "song": "Perfect",
        "plays": 2342182598,
        "artist": "Ed Sheeran"
     },
     {
        "id": 10,
        "song": "Shape of You",
        "plays": 3384353910,
        "artist": "Ed Sheeran"
     },
     {
        "id": 11,
        "song": "Rockstar",
        "plays": 2610619158,
        "artist": "Post Malone"
     },
     {
        "id": 12,
        "song": "Anaconda",
        "plays": 401037866,
        "artist": "Nicki Minaj"
     },
     {
        "id": 13,
        "song": "Blank Space",
        "plays": 1093987112,
        "artist": "Taylor Swift"
     },
     {
        "id": 14,
        "song": "Truth Hurts",
        "plays": 893849266,
        "artist": "Lizzo"
     },
     {
        "id": 15,
        "song": "Master of Puppets",
        "plays": 625391952,
        "artist": "Metallica"
     },
     {
        "id": 16,
        "song": "Dream On",
        "plays": 791511657,
        "artist": "Aerosmith"
     },
     {
        "id": 16,
        "song": "Duality",
        "plays": 533447489,
        "artist": "Slipknot"
     },
     {
        "id": 17,
        "song": "Sk8er Boi",
        "plays": 622729210,
        "artist": "Avril Lavigne"
     },
     {
        "id": 19,
        "song": "American Idiot",
        "plays": 714438430,
        "artist": "Green Day"
     },
     {
        "id": 20,
        "song": "Mary On A Cross",
        "plays": 270503653,
        "artist": "Ghost"
     },
     {
        "id": 21,
        "song": "Hung Up",
        "plays": 302623685,
        "artist": "Madonna"
     },
     {
        "id": 22,
        "song": "Augen aug!",
        "plays": 22518799,
        "artist": "OOMPH!"
     },
     {
        "id": 23,
        "song": "Pull Me Under",
        "plays": 54605582,
        "artist": "Dream Theater"
     },
     {
        "id": 24,
        "song": "Tears Don't Fall",
        "plays": 265108156,
        "artist": "Bullet For My Valentine"
     },
     {
        "id": 25,
        "song": "Hail to the King",
        "plays": 440732544,
        "artist": "Avenged Sevenfold"
     },
     {
        "id": 26,
        "song": "Du Hast",
        "plays": 268636741,
        "artist": "Rammstein"
     },
     {
        "id": 27,
        "song": "Chop Suey",
        "plays": 962694474,
        "artist": "System Of A Down"
     },
     {
        "id": 28,
        "song": "Without Me",
        "plays": 1485848185,
        "artist": "Eminem"
     },
     {
        "id": 29,
        "song": "Half On a Sack",
        "plays": 33279296,
        "artist": "Three 6 Mafia"
     },
     {
        "id": 30,
        "song": "Don't You Worry Child",
        "plays": 808390909,
        "artist": "Swedish House Mafia"
     },
     {
        "id": 31,
        "song": "What a Horrible Night to have a Curse",
        "plays": 13589943,
        "artist": "The Black Dahlia Murder"
     },
     {
        "id": 32,
        "song": "Don't Stop Movin'",
        "plays": 64983442,
        "artist": "S Club 7"
     },
     {
        "id": 33,
        "song": "Dreams",
        "plays": 1160175062,
        "artist": "Fleetwood Mac"
     },
     {
        "id": 34,
        "song": "The Chain",
        "plays": 810349762,
        "artist": "Fleetwood Mac"
     },
     {
        "id": 35,
        "song": "Teenage Dirtbag",
        "plays": 448067574,
        "artist": "Wheatus"
     },
     {
        "id": 36,
        "song": "Bohemian Rhapsody",
        "plays": 2057504373,
        "artist": "Queen"
     },
     {
        "id": 37,
        "song": "Hey There Delilah",
        "plays": 895320148,
        "artist": "Plain White T's"
     },
     {
        "id": 38,
        "song": "Stronger",
        "plays": 1133386177,
        "artist": "Kanye West"
     },
     {
        "id": 39,
        "song": "Pursuit of Happiness",
        "plays": 609202604,
        "artist": "Kid Cudi"
     },
     {
        "id": 40,
        "song": "Stressed Out",
        "plays": 1849591589,
        "artist": "Twenty One Pilots"
     },
     {
        "id": 41,
        "song": "Shallow",
        "plays": 2023597207,
        "artist": "Lady Gaga"
     },
     {
        "id": 42,
        "song": "SAD!",
        "plays": 1979796972,
        "artist": "XXXTENTACION"
     },
     {
        "id": 43,
        "song": "Heat Waves",
        "plays": 2298213544,
        "artist": "Glass Animals"
     },
     {
        "id": 44,
        "song": "YMCA",
        "plays": 286926536,
        "artist": "Village People"
     },
     {
        "id": 45,
        "song": "It's Raining Men",
        "plays": 263595065,
        "artist": "The Weather Girls"
     },
     {
        "id": 46,
        "song": "You Spin Me Round",
        "plays": 313695466,
        "artist": "Dead Or Alive"
     },
     {
        "id": 47,
        "song": "Cpr",
        "plays": 75620564,
        "artist": "cupcakKe"
     },
     {
        "id": 48,
        "song": "Firestarter",
        "plays": 99517198,
        "artist": "The Prodigy"
     },
     {
        "id": 49,
        "song": "Holding Out for a Hero",
        "plays": 324794839,
        "artist": "Bonnie Tyler"
     },
     {
        "id": 50,
        "song": "Viva La Vida",
        "plays": 1353808099,
        "artist": "Coldplay"
     }
 ];

function setNextItem() {
    var selectItems = [];
    for (i = 0; i < 2; i++) {
        var randomItems = items[Math.floor(Math.random() * items.length)];
        
        //if (selectItems[0]["id"] != selectItems[1]["id"]) {
             
        //}
        selectItems.push(randomItems);        
    } 

    leftSongEl.textContent = selectItems[0]["song"];
    leftartistEl.textContent = selectItems[0]["artist"];
    leftContainerEl.setAttribute("data-storage", selectItems[0]["plays"]);
    rightSongEl.textContent = selectItems[1]["song"];
    rightArtistEl.textContent = selectItems[1]["artist"];
    rightContainerEl.setAttribute("data-storage", selectItems[1]["plays"]);

} setNextItem();

leftContainerEl.addEventListener("click", function() {
    if (leftContainerEl.getAttribute("data-storage") > rightContainerEl.getAttribute("data-storage")) {
        var numberRight = Number(localStorage.getItem("right"));
        localStorage.setItem("right", ++numberRight);
        setNextItem();
    } else {
        setNextItem();
    } 
});

rightContainerEl.addEventListener("click", function() {
    if (rightContainerEl.getAttribute("data-storage") > leftContainerEl.getAttribute("data-storage")) {
        var numberRight = Number(localStorage.getItem("right"));
        localStorage.setItem("right", ++numberRight);
        setNextItem();
    } else {
        setNextItem();
    }

});































































































































































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




