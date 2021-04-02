// Declare constants


const cards = document.querySelectorAll(".grid-item");
const gamename = localStorage.getItem("GameName");     // Transfer username to gamezone area
const time = document.getElementById("timeLeft");
const chat = document.getElementById("chat");
const score = document.getElementById("scoreTotal");

let points = 0;
let countdown = 59;
let totalCards = 0;




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
}





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
   
}

// The cardCheck function - compares the two selected cards & calls functions depending on outcome of match

function cardCheck() {

    let cardTest1 = cardOne.id;
    let cardTest2 = cardTwo.id;

    let match = cardTest1 === cardTest2

    match ? cardsMatch() : cardsDontMatch()
}


// The cardsMatch function - if cards match then it stops the two cards from turning back over & calls resetMatch

function cardsMatch(){
 
    console.log("Cards Do Match Sham");

    cardOne.removeEventListener("click", turnCard);
    cardTwo.removeEventListener("click", turnCard);

    points += 5;
    totalCards += 2;
    score.innerHTML = points;

    console.log(totalCards);

    gameChat();
    matchReset();
}

// The cardsDontMatch function - if cards do not match then turns the cards back over again in 2 sec & calls resetMatch

function cardsDontMatch() {

    gridLock = true;

    console.log("Cards Dont Match Sham");

    setTimeout(() => {
        cardOne.classList.remove("turn");
        cardTwo.classList.remove("turn");

        points -= 2;
        score.innerHTML = points;

        matchReset();
    }
, 1000);

}

// The resetMatch function - this just resets some variables to allow the card selection sequence to start again

function matchReset() {
    
    [hasTurnCard, gridLock] = [false, false];
    [cardOne, cardTwo] = [null, null];
}

//

function gameChat() {

    console.log("gameChat works");

    if (totalCards === 0) {
        chat.innerHTML = `${gamename}, good luck !`;
    }
    else if (totalCards === 2) {
        chat.innerHTML = `${gamename}, first match !`;
    }
    else if (totalCards === 4) {
        chat.innerHTML = `${gamename}, second match !`;
    }

};





timer = setInterval(function() {      // Code from Stack Overflow & modified to suit

    time.innerHTML = (countdown--);
    if(countdown === -1) clearInterval(timer);
}, 1000);



cards.forEach((card) => card.addEventListener("click", turnCard));
