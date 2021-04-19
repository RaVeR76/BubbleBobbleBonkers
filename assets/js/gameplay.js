// Declare constants


const cards = document.querySelectorAll(".grid-item");
const audio = document.querySelector("audio");
const gameName = localStorage.getItem("GameName");     // Transfer username to gamezone area
const time = document.getElementById("timeLeft");
const chat = document.getElementById("chat");
const score = document.getElementById("scoreTotal");
const flash = document.getElementById("time");
const gamescore = document.getElementById("gamescore");
const audiosource = document.getElementById("audioSource");
const sound = document.getElementById("mute");
const gameover = document.getElementById("gameover");
const newHighScore = document.getElementById("new-high");
const levelup = document.getElementById("levelup");
const newgame = document.getElementById("restart");
const welldone = document.getElementsByClassName("welldone")[0];
const unlucky = document.getElementsByClassName("welldone")[1];
const completeGame = document.getElementsByClassName("jumbohead")[0];

let countDown = localStorage.getItem("CountDown");   // Needed to use this for storing the next level coundown time because reloading the page always reset countdown to 60
let levelAt = localStorage.getItem("Level");         // Needed to use this for storing the next level to use for selecting the level countdown time
let level1Hi = localStorage.getItem("Level1HiScore");
let level2Hi = localStorage.getItem("Level2HiScore");
let level3Hi = localStorage.getItem("Level3HiScore");
let level4Hi = localStorage.getItem("Level4HiScore");
let level5Hi = localStorage.getItem("Level5HiScore");
let points = 0;
let totalCards = 0;
let matchNumber = -1;


// On start up

document.addEventListener("DOMContentLoaded", function() {
   
   displayCards();
   gameChat();
   
});



// Create my game array using all available card images

let ArrayOfImages = [
{ name : "blubs", src : 'assets/cards/baron-von-blubba-card.jpg'}, 
{ name : "bels", src : 'assets/cards/beluga-card.jpg'}, 
{ name : "bob", src : 'assets/cards/bob-card.jpg'},
{ name : "bub", src : 'assets/cards/bub-card.jpg'},
{ name : "bust", src : 'assets/cards/bubble-buster.jpg'},
{ name : "coils", src : 'assets/cards/coiley-card.jpg'},
{ name : "hulla", src : 'assets/cards/hullaballoon-card.jpg'},
{ name : "ince", src : 'assets/cards/incendo-card.jpg'},
{ name : "stoner", src : 'assets/cards/stoner-card.jpg'},
{ name : "super", src : 'assets/cards/super-socket-card.jpg'},
{ name : "un1", src : 'assets/cards/unknown1-card.jpg'},
{ name : "un2", src : 'assets/cards/unknown2-card.jpg'},
{ name : "willy", src : 'assets/cards/willy-whistle-card.jpg'}];

// Shuffle all the individual cards

shuffle(ArrayOfImages);

// Now create another array from the shuffled images but duplicate the first six of the array. This gives us our six pairs for the game.

let memoryCards = [
ArrayOfImages[0],
ArrayOfImages[1],
ArrayOfImages[2],
ArrayOfImages[3],
ArrayOfImages[4],
ArrayOfImages[5],
ArrayOfImages[0],
ArrayOfImages[1],
ArrayOfImages[2],
ArrayOfImages[3],
ArrayOfImages[4],
ArrayOfImages[5]];

// Shuffle the six pairs of cards so they are ready for populating the grid :)

shuffle(memoryCards);



// Shuffle my array using the code below

    function shuffle(array) {
  let currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
};

// Populate the gameplay grid

function displayCards() {

let numberOfCards = memoryCards.length;
   for (let i = 0;i < numberOfCards; i++) {
   
    memoryCards.forEach(function(image) {
    
    let img = document.createElement('img');
    
    let memCardAtt = memoryCards[i++];

    //img.setAttribute("id", memCardAtt.name);
    img.classList.add("hide");
    img.src = memCardAtt.src;
    
    let cardStyle = document.getElementsByClassName("grid-item")[i-1];
   
    cardStyle.setAttribute("id", memCardAtt.name);
    cardStyle.appendChild(img);
});
   }
};



// The turnCard function - to turn the cards over on click event

let hasTurnCard = false;
let gridLock = false;   // Added this because once you selected two cards, you could select another which messed up the sequence
let cardOne, cardTwo;


function turnCard() {
    if (gridLock) return;
    if (this === cardOne) return;

    this.classList.add("turn");

    if (!hasTurnCard) {
        hasTurnCard = true;
        cardOne = this;

        return;
    }
  
    cardTwo = this;
    cardCheck();
   
};

// The cardCheck function - compares the two selected cards & calls functions depending on outcome of match

function cardCheck() {

    let cardTest1 = cardOne.id;
    let cardTest2 = cardTwo.id;

    let match = cardTest1 === cardTest2

    match ? cardsMatch() : cardsDontMatch()
};


// The cardsMatch function - if cards match then it stops the two cards from turning back over & calls matchReset

function cardsMatch(){

    cardOne.removeEventListener("click", turnCard);
    cardTwo.removeEventListener("click", turnCard);

    points += 5;
    totalCards += 2;
    score.innerHTML = points;
 
    if (totalCards === 12) {   // added this to de-clutter this section
        gameLevelOver();
    };

    gameChat();
    matchReset();
};

// The cardsDontMatch function - if cards do not match then turns the cards back over again in 2 sec & calls resetMatch

function cardsDontMatch() {

    gridLock = true;

    setTimeout(() => {
        cardOne.classList.remove("turn");
        cardTwo.classList.remove("turn");

        points -= 2;
        score.innerHTML = points;

        matchReset();
    }
, 1000);

};

// The resetMatch function - this just resets some variables to allow the card selection sequence to start again

function matchReset() {
    
    [hasTurnCard, gridLock] = [false, false];
    [cardOne, cardTwo] = [null, null];
};

// My game chat function just send positive messages whilst playing the game




function gameChat() {

    matchNumber +=1;
    
    chat.innerHTML = `${gameName}, the high score is ${level1Hi}`;

    switch (+levelAt) {
        
        case 2: 
            chat.innerHTML = `${gameName}, the high score is ${level2Hi}`;
            break;

        case 3:
            chat.innerHTML = `${gameName}, the high score is ${level3Hi}`;
            break;
        
        case 4:
            chat.innerHTML = `${gameName}, the high score is ${level4Hi}`;
            break;

        case 5:
            chat.innerHTML = `${gameName}, the high score is ${level5Hi}`;
            break;
    }



    switch (totalCards) {
    
        case 2:
            chat.innerHTML = `Well done ${gameName}, ${matchNumber}st match !`;
            break;
    
        case 4:
            chat.innerHTML = `Keep going ${gameName}, ${matchNumber}nd match !`;
            break; 
            
        case 6:
            chat.innerHTML = `Awesome ${gameName}, ${matchNumber}rd match !`;
            break; 

        case 8:
            chat.innerHTML = `Wow ${gameName}, ${matchNumber}th match !`;
            break;
            
        case 10:
            chat.innerHTML = `So close ${gameName}, ${matchNumber}th match !`;
            break;

        case 12:
            chat.innerHTML = `Winner Winner Chicken Dinner !`;
            break; 
    
        default:
            break;
    
    }
};



function gameLevelOver () {

    levelScore();
    audiosource.setAttribute('src', "assets/audio/levelovershort.mp3");
    gamescore.innerHTML = levelTot;
    gameover.style.visibility = "visible";

    if (totalCards === 12 && ([1, 2, 3, 4].includes(+levelAt))) {
        
        welldone.innerHTML = `Awesome Game ${gameName}`;
        audio.muted = true;
     } 
        else if (totalCards === 12 && +levelAt === 5) {
        
        audiosource.setAttribute('src', "assets/audio/levelover.mp3");
        completeGame.innerHTML = `** YOU LEGEND **`;
        welldone.innerHTML = `You Completed The <br>Game, ${gameName} !`;
        levelup.removeEventListener("click", newLevel);                          // Removed so I could add the restart function to it
        levelup.addEventListener("click", restart);
        levelup.innerHTML = `Start New Game`;
        audio.muted = true;
    }

    mute();
    clearInterval(timer);

};






// Score Calculations Per Level & Display / Store If High Score

function levelScore() {
   
    levelTot = (countDown += 1) * points;

    console.log(countDown);
    console.log(points);
    console.log(levelTot);

    switch (+levelAt) {

        case 1:

            levelup.innerHTML = `Play Level Two`;

            if (levelTot > level1Hi) {
                localStorage.setItem("Level1HiScore", levelTot);
                newHighScore.innerHTML = `New High Score ${levelTot}`;
                }
                break;

        case 2:

            levelup.innerHTML = `Play Level Three`;    

            levelTot *= 2;
            if (levelTot > level2Hi) {
            localStorage.setItem("Level2HiScore", levelTot);
            newHighScore.innerHTML = `New High Score ${levelTot}`;
            }
            break;
        
        case 3:

            levelup.innerHTML = `Play Level Four`;
            levelTot *= 3;
            
            if (levelTot > level3Hi) {
                localStorage.setItem("Level3HiScore", levelTot);
                newHighScore.innerHTML = `New High Score ${levelTot}`;
                }
            break;
        
        case 4:

            levelup.innerHTML = `Play Last Level`;
            levelTot *= 4;

            if (levelTot > level4Hi) {
                localStorage.setItem("Level4HiScore", levelTot);
                newHighScore.innerHTML = `New High Score ${levelTot}`;
                }
            break;

        case 5:
            levelTot *= 5;
            if (levelTot > level5Hi) {
                localStorage.setItem("Level5HiScore", levelTot);
                newHighScore.innerHTML = `New High Score ${levelTot}`;
                }
            break;

        default:
            break;

    }

};






function levelUp () {
    
   if (levelAt === 2) {
       countDown = 50;
   } else if (levelAt === 3) {
     countDown = 40;
   } else if (levelAt === 4) {
       countDown = 30;
   } else if (levelAt === 5) {
    countDown = 20;                                 // Change to 20 once game is finished
   }
   
   localStorage.setItem("CountDown", countDown);
   localStorage.setItem("Level", levelAt);

 };



// My mute function allows the user the option to mute the audio 

function mute() {
   
    if (audio.muted === false) {
        audio.muted = true;
        sound.classList.add("mute");
        sound.innerHTML = `<i class="fas fa-volume-mute icon"></i>`;
    } else if (audio.muted === true) {
        audio.muted = false;
        sound.classList.remove("mute");
        sound.innerHTML = `<i class="fas fa-volume-up icon"></i>`;
    }
};




// Level Up Game Zone

function newLevel () {
   
    levelAt++;
    levelUp ();
    location.reload();

 };



// Restart Game Zone

function restart (){

    localStorage.setItem("CountDown", 60);     // Reset countdown for level 1 again
    localStorage.setItem("Level", 1);          // Reset level to 1
    location.reload();                         // Reload the page again

};



timer = setInterval(function() {      // Code from Stack Overflow & modified to suit

    time.innerHTML = (countDown--);
    if(countDown == 11) audiosource.setAttribute('src', "assets/audio/main-theme-faster.mp3");
    if(countDown <= 9) flash.classList.add("flash");
    if(countDown === -1) clearInterval(timer), timeout.style.visibility = "visible", unlucky.innerHTML = `Unlucky ${gameName}`, audiosource.setAttribute('src', "assets/audio/gameover.mp3");
   
}, 1000);


cards.forEach((card) => card.addEventListener("click", turnCard));

sound.addEventListener("click", mute);

levelup.addEventListener("click", newLevel);

newgame.addEventListener("click", restart);