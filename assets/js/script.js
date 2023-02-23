var leftContainerEl = document.getElementById("1A");
var rightContainerEl = document.getElementById("1B");
var instructionsEl = document.getElementById("instructions");
var playBtn = document.getElementById("play-btn");
var main1El = document.getElementById("main1");
var main2El = document.getElementById("main2");
var timerCountdownEl = document.getElementById("timer-countdown");
var highScoreEl = document.getElementById("high-score");
var leftSongEl = document.getElementById("left-song");
var leftartistEl = document.getElementById("left-artist");
var rightSongEl = document.getElementById("right-song");
var rightArtistEl = document.getElementById("right-artist");
var saveScoreBtn = document.getElementById("saveScoreBtn");
var userName = document.getElementById("username");
var youScored = document.getElementById("you-scored");
var renderedScore = document.getElementById("rendered-score");
var renderedName = document.getElementById("rendered-name");
var playAgainBtn = document.getElementById("play-again");
var allScores = JSON.parse(localStorage.getItem("userscore")) || [];

localStorage.setItem("right", "0");

playBtn.addEventListener("click", startGame);

function startGame() {
        instructionsEl.style.visibility = "hidden";
        main1El.style.display = "flex";
        countdownTimer();
} 

var secondsLeft;

function countdownTimer() {
   secondsLeft = 60;
   timerCountdownEl.textContent = secondsLeft;
    var timerInterval = setInterval(function() {
         secondsLeft--;
         timerCountdownEl.textContent = secondsLeft;
        

        if (secondsLeft <= 0) {
            clearInterval(timerInterval);
            main1El.style.display = "none";
            main2El.style.display = "flex";
            timerCountdownEl.textContent = "0";
            youScored.textContent = localStorage.getItem("right");
        }
    }, 1000);
}

var items = [
    {
       "id": 01,
       "song": "Don't stop believing",
       "plays": 1480773640,
       "artist": "Journey",
       "img": "https://wallpapercave.com/dwp1x/umm3dUg.jpg"
    },
    {
       "id": 02,
       "song": "Gimme! Gimme! Gimme!",
       "plays": 529080834,
       "artist": "ABBA",
       "img": "https://www.udiscovermusic.com/wp-content/uploads/2019/06/Abba-Voulez-Vous-Press-Photo-1-Credit-Polar-Music-International-AB-web-optimised-1000.jpg"
    },
    {
       "id": 03,
       "song": "Sweet Child O' Mine",
       "plays": 1414551943,
       "artist": "Guns N' Roses",
       "img": "https://www.nme.com/wp-content/uploads/2018/05/Guns-N-Roses-1989-696x442.jpg"
    },
    {
       "id": 04,
       "song": "Enter Sandman",
       "plays": 1035326214,
       "artist": "Metallica",
       "img": "https://i.pinimg.com/originals/a8/99/02/a89902fead7f6dddf6dbfde010cf440e.jpg",
    },
    {
       "id": 05,
       "song": "Livin' On a Prayer",
       "plays": 1152250148,
       "artist": "Bon Jovi",
       "img": "https://lastfm.freetls.fastly.net/i/u/770x0/5af49a0b170644e7825510d6df9fb109.jpg"
    },
    {
       "id": 06,
       "song": "Take on Me",
       "plays": 1316714415,
       "artist": "a-ha",
       "img": "https://e1.pxfuel.com/desktop-wallpaper/741/969/desktop-wallpaper-a-ha-band-a.jpg"
    },
    {
       "id": 07,
       "song": "Africa",
       "plays": 1367962446,
       "artist": "Toto",
       "img": "https://e0.pxfuel.com/wallpapers/660/796/desktop-wallpaper-the-strange-appeal-of-toto-s-africa-toto-band.jpg"
    },
    {
       "id": 08,
       "song": "I'm Still Standin",
       "plays": 664607263,
       "artist": "Elton John",
       "img": "https://www.yardbarker.com/media/d/9/d9d4fdb2be564fcf5d82f32bb6d806e517e5af9e/thumb_16x9/definitive-elton-john-playlist.jpg"
    },
    {
        "id": 09,
        "song": "Perfect",
        "plays": 2342182598,
        "artist": "Ed Sheeran",
        "img": "https://e1.pxfuel.com/desktop-wallpaper/907/154/desktop-wallpaper-ed-sheeran-on-the-stage-ed-sheeran-2018.jpg"
     },
     {
        "id": 10,
        "song": "Shape of You",
        "plays": 3384353910,
        "artist": "Ed Sheeran",
        "img": "https://e1.pxfuel.com/desktop-wallpaper/907/154/desktop-wallpaper-ed-sheeran-on-the-stage-ed-sheeran-2018.jpg"
     },
     {
        "id": 11,
        "song": "Rockstar",
        "plays": 2610619158,
        "artist": "Post Malone",
        "img": "https://deadline.com/wp-content/uploads/2022/09/GettyImages-993062898.jpg"
     },
     {
        "id": 12,
        "song": "Anaconda",
        "plays": 401037866,
        "artist": "Nicki Minaj",
        "img": "https://wallup.net/wp-content/uploads/2019/09/08/826916-nicki-minaj-pop-r-b-hip-hop-rap-rapper-sexy-babe-singer-concert-748x748.jpg"
     },
     {
        "id": 13,
        "song": "Blank Space",
        "plays": 1093987112,
        "artist": "Taylor Swift",
        "img": "https://wallpaperaccess.com/full/5656114.jpg"
     },
     {
        "id": 14,
        "song": "Truth Hurts",
        "plays": 893849266,
        "artist": "Lizzo",
        "img": "https://www.billboard.com/wp-content/uploads/2022/02/Lizzo-global-citizen-2021-billboard-1548.jpg"
     },
     {
        "id": 15,
        "song": "Master of Puppets",
        "plays": 625391952,
        "artist": "Metallica",
        "img": "https://i.pinimg.com/originals/a8/99/02/a89902fead7f6dddf6dbfde010cf440e.jpg",

     },
     {
        "id": 16,
        "song": "Dream On",
        "plays": 791511657,
        "artist": "Aerosmith",
        "img": "https://w0.peakpx.com/wallpaper/236/335/HD-wallpaper-aerosmith-music-stars-music-thumbnail.jpg"
     },
     {
        "id": 16,
        "song": "Duality",
        "plays": 533447489,
        "artist": "Slipknot",
        "img": "https://hdwallpaperim.com/wp-content/uploads/2017/08/26/208883-Slipknot-748x499.jpg"
     },
     {
        "id": 17,
        "song": "Sk8er Boi",
        "plays": 622729210,
        "artist": "Avril Lavigne",
        "img": "https://images5.alphacoders.com/427/427422.jpg"
     },
     {
        "id": 19,
        "song": "American Idiot",
        "plays": 714438430,
        "artist": "Green Day",
        "img": "https://www.rollingstone.co.uk/wp-content/uploads/sites/2/2021/11/Billie_Joe_Armstrong_greenday-performs2018-blackandwhite2000x1270-768x488.jpg"
     },
     {
        "id": 20,
        "song": "Mary On A Cross",
        "plays": 270503653,
        "artist": "Ghost",
        "img": "https://i.pinimg.com/originals/f8/8b/00/f88b004ce0e54cc50642ff82257c1df6.jpg"
     },
     {
        "id": 21,
        "song": "Hung Up",
        "plays": 302623685,
        "artist": "Madonna",
        "img": "https://wallpaperset.com/w/full/c/a/1/163329.jpg"
     },
     {
        "id": 22,
        "song": "Augen aug!",
        "plays": 22518799,
        "artist": "OOMPH!",
        "img": "http://www.laut.de/Oomph!/oomph-163082.jpg"
     },
     {
        "id": 23,
        "song": "Pull Me Under",
        "plays": 54605582,
        "artist": "Dream Theater",
        "img": "https://dreamtheater.net/wp-content/uploads/2017/09/DSC_2789comp.jpg"
     },
     {
        "id": 24,
        "song": "Tears Don't Fall",
        "plays": 265108156,
        "artist": "Bullet For My Valentine",
        "img": "https://www.wallpapersdsc.net/wp-content/uploads/2016/10/Bullet-for-My-Valentine-High-Definition.jpg"
     },
     {
        "id": 25,
        "song": "Hail to the King",
        "plays": 440732544,
        "artist": "Avenged Sevenfold",
        "img": "https://metalplanetmusic.com/wp-content/uploads/2018/07/Avenged-Sevenfold-11.jpg"
     },
     {
        "id": 26,
        "song": "Du Hast",
        "plays": 268636741,
        "artist": "Rammstein",
        "img": "https://live.staticflickr.com/4386/36952058662_be0c457958_b.jpg"
     },
     {
        "id": 27,
        "song": "Chop Suey",
        "plays": 962694474,
        "artist": "System Of A Down",
        "img": "https://i.pinimg.com/736x/24/e6/bb/24e6bb374addf258453947cf81ffdb1a.jpg"
     },
     {
        "id": 28,
        "song": "Without Me",
        "plays": 1485848185,
        "artist": "Eminem",
        "img": "https://c4.wallpaperflare.com/wallpaper/57/171/745/eminem-performance-audience-hands-wallpaper-preview.jpg"
     },
     {
        "id": 29,
        "song": "Half On a Sack",
        "plays": 33279296,
        "artist": "Three 6 Mafia",
        "img": "https://wallpaperaccess.com/full/6912998.jpg"
     },
     {
        "id": 30,
        "song": "Don't You Worry Child",
        "plays": 808390909,
        "artist": "Swedish House Mafia",
        "img": "https://www.billboard.com/wp-content/uploads/media/swedish-house-mafia-performance-paris-billboard-1548.jpg"
     },
     {
        "id": 31,
        "song": "What a Horrible Night to have a Curse",
        "plays": 13589943,
        "artist": "The Black Dahlia Murder",
        "img": "https://d3jmskduvd0rp7.cloudfront.net/images/photo.jpg"
     },
     {
        "id": 32,
        "song": "Don't Stop Movin'",
        "plays": 64983442,
        "artist": "S Club 7",
        "img": "https://i.pinimg.com/550x/30/e7/53/30e7536a1c3ba54527f29fdf6e7d4965.jpg"
     },
     {
        "id": 33,
        "song": "Dreams",
        "plays": 1160175062,
        "artist": "Fleetwood Mac",
        "img": "https://media.timeout.com/images/102529726/image.jpg"
     },
     {
        "id": 34,
        "song": "The Chain",
        "plays": 810349762,
        "artist": "Fleetwood Mac",
        "img": "https://media.timeout.com/images/102529726/image.jpg"
     },
     {
        "id": 35,
        "song": "Teenage Dirtbag",
        "plays": 448067574,
        "artist": "Wheatus",
        "img": "https://static.alivenetwork.com/images/extrabandpics/TheSonics11.jpg"
     },
     {
        "id": 36,
        "song": "Bohemian Rhapsody",
        "plays": 2057504373,
        "artist": "Queen",
        "img": "https://c4.wallpaperflare.com/wallpaper/688/110/570/band-music-queen-wallpaper-preview.jpg"
     },
     {
        "id": 37,
        "song": "Hey There Delilah",
        "plays": 895320148,
        "artist": "Plain White T's",
        "img": "https://kuteradio.org/wp-content/uploads/2019/11/DSC09703-900x600.jpg"
     },
     {
        "id": 38,
        "song": "Stronger",
        "plays": 1133386177,
        "artist": "Kanye West",
        "img": "https://www.pixelstalk.net/wp-content/uploads/images7/Kanye-West-Desktop-Wallpaper.jpg"
     },
     {
        "id": 39,
        "song": "Pursuit of Happiness",
        "plays": 609202604,
        "artist": "Kid Cudi",
        "img": "https://www.billboard.com/wp-content/uploads/media/kid-cudi-live-2017-b-billboard-1548.jpg"
     },
     {
        "id": 40,
        "song": "Stressed Out",
        "plays": 1849591589,
        "artist": "Twenty One Pilots",
        "img": "https://static01.nyt.com/images/2018/10/14/arts/14twentyonepilots3-promo/14twentyonepilots3-promo-superJumbo-v2.jpg"
     },
     {
        "id": 41,
        "song": "Shallow",
        "plays": 2023597207,
        "artist": "Lady Gaga",
        "img": "https://images7.alphacoders.com/381/381384.jpg"
     },
     {
        "id": 42,
        "song": "SAD!",
        "plays": 1979796972,
        "artist": "XXXTENTACION",
        "img": "https://rare-gallery.com/mocahbig/1302004-XXXTentacion-HD-Wallpaper.jpg"
     },
     {
        "id": 43,
        "song": "Heat Waves",
        "plays": 2298213544,
        "artist": "Glass Animals",
        "img": "https://wallpapers.com/images/hd/glass-animals-drew-h0twolq4laosa6li.jpg"
     },
     {
        "id": 44,
        "song": "YMCA",
        "plays": 286926536,
        "artist": "Village People",
        "img": "https://cdn.wallpapersafari.com/68/96/fJZuYH.jpg"
     },
     {
        "id": 45,
        "song": "It's Raining Men",
        "plays": 263595065,
        "artist": "The Weather Girls",
        "img": "https://d1dy244g59v5jo.cloudfront.net/artist-8f/8fb21ccddc4bc17416a2182e6fd9deece1d4eb35d5a468ccce1aba39eb2967c7f205d812.png.512x512.png"
     },
     {
        "id": 46,
        "song": "You Spin Me Round",
        "plays": 313695466,
        "artist": "Dead Or Alive",
        "img": "http://images2.fanpop.com/image/photos/9800000/DOA-dead-or-alive-band-9859152-600-600.jpg"
     },
     {
        "id": 47,
        "song": "Cpr",
        "plays": 75620564,
        "artist": "cupcakKe",
        "img": "https://www.billboard.com/wp-content/uploads/media/CupcakKe-june-2019-billboard-1548.jpg"
     },
     {
        "id": 48,
        "song": "Firestarter",
        "plays": 99517198,
        "artist": "The Prodigy",
        "img": "https://townsquare.media/site/838/files/2015/12/9524.jpg"
     },
     {
        "id": 49,
        "song": "Holding Out for a Hero",
        "plays": 324794839,
        "artist": "Bonnie Tyler",
        "img": "https://wallpaperaccess.com/full/6678426.jpg"
     },
     {
        "id": 50,
        "song": "Viva La Vida",
        "plays": 1353808099,
        "artist": "Coldplay",
        "img": "https://assets.capitalfm.com/2011/51/coldplay-1324289869-view-2.jpg"
     }
 ];

function setNextItem() {
    var selectItems = [];

   var num1 = Math.floor(Math.random() * items.length);
   var num2 = Math.floor(Math.random() * items.length);

   while (num1 == num2) {
      num2 = Math.floor(Math.random() * items.length);
   }
   selectItems.push(items[num1]); 
   selectItems.push(items[num2]); 

   leftSongEl.textContent = selectItems[0]["song"];
   leftartistEl.textContent = "- " + selectItems[0]["artist"];
   leftContainerEl.setAttribute("data-storage", selectItems[0]["plays"]);
   leftContainerEl.style.backgroundImage = "linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url("+ selectItems[0]["img"] +")";
   
   rightSongEl.textContent = selectItems[1]["song"];
   rightArtistEl.textContent = "- " + selectItems[1]["artist"];
   rightContainerEl.setAttribute("data-storage", selectItems[1]["plays"]);
   rightContainerEl.style.backgroundImage = "linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url("+ selectItems[1]["img"] +")";

} setNextItem();

leftContainerEl.addEventListener("click", function() {
    if (leftContainerEl.getAttribute("data-storage") > rightContainerEl.getAttribute("data-storage")) {
        var numberRight = Number(localStorage.getItem("right"));
        localStorage.setItem("right", ++numberRight);
        setNextItem();
    } else {
         window.secondsLeft = secondsLeft - 5;
        setNextItem();
    } 
});

rightContainerEl.addEventListener("click", function() {
    if (rightContainerEl.getAttribute("data-storage") > leftContainerEl.getAttribute("data-storage")) {
        var numberRight = Number(localStorage.getItem("right"));
        localStorage.setItem("right", ++numberRight);
        setNextItem();
    } else {
         window.secondsLeft = secondsLeft - 5;
        setNextItem();
    }

});


function saveLastScore() {
   var userScore = {
      username: userName.value,
      score: youScored.textContent
   };
   allScores.unshift(userScore);
   localStorage.setItem("userscore", JSON.stringify(allScores));
}

function renderScore() {
   // var lastScore = JSON.parse(localStorage.getItem("userscore"));
   // renderedName.textContent = lastScore.username;
   // renderedScore.textContent = "scored: " + lastScore.score;  
   for (i = 0; 1 < allScores.length; i++) {
      renderedName.textContent = allScores.userName;
      renderedScore.textContent = allScores.score;
   }
   if (allScores[0].score > highScoreEl.textContent) {
      highScoreEl.textContent = allScores[0].score;
   } 
}


saveScoreBtn.addEventListener("click", function(event) {
   event.preventDefault();
   if (userName.value == "") {
      alert("Please enter your initials");
   } else {
      saveLastScore();  
      renderScore();
   }
   userName.value = "";
});

function playAgain() {
   playAgainBtn.addEventListener("click", startGame);
} playAgain();
































































































































































