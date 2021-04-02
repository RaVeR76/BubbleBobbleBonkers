// Declare constants


const cards = document.querySelectorAll(".grid-item");
const gamename = localStorage.getItem("GameName");     // Transfer username to gamezone area


function startFunction() {


  let welcome = document.getElementById("welcome");
    welcome.innerHTML = 
    `Welcome To My Game <b>${ gamename }</b> .... Hope You Are Ready !!!`
  

  // (EXTRA) TO CLEAR
  // sessionStorage.removeItem("KEY");
  // sessionStorage.clear();
}




// On start up

document.addEventListener("DOMContentLoaded", function() {

   displayCards();

});




// Populate the gameplay grid



let hasTurnCard = false;
let cardOne, cardTwo;



function turnCard() {
   
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

function cardCheck() {
    let match = cardOne.src === cardTwo.src;

    console.log("Hello sham");
    console.log(cardOne);
    console.log(cardTwo);

    match ? cardsMatch() : cardsDontMatch()
}


function cardsMatch(){

    console.log("Cards Do Match Sham");

    cardOne.removeEventListener("click", turnCard);
    cardTwo.removeEventListener("click", turnCard);
}

function cardsDontMatch() {

    console.log("Cards Dont Match Sham");

    setTimeout(() => {
        cardOne.classList.remove("turn");
        cardTwo.classList.remove("turn");
    }
, 1000)};










cards.forEach((card) => card.addEventListener("click", turnCard));



// generate a random array

    function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

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




let ArrayOfImages = [
{ name : "blubs", src : 'assets/cards/baron-von-blubba-card.jpg'}, 
{ name : "bels", src : 'assets/cards/beluga-card.jpg'}, 
{ name : "bob", src : 'assets/cards/bob-card.jpg'},
{ name : "bub", src : 'assets/cards/bub-card.jpg'},
{ name : "bust", scr : 'assets/cards/bubble-buster.jpg'},
{ name : "coils", src : 'assets/cards/coiley-card.jpg'},
{ name : "hulla", src : 'assets/cards/hullaballoon-card.jpg'},
{ name : "ince", src : 'assets/cards/incendo-card.jpg'},
{ name : "stoner", src : 'assets/cards/stoner-card.jpg'},
{ name : "super", src : 'assets/cards/super-socket-card.jpg'},
{ name : "un1", src : 'assets/cards/unknown1-card.jpg'},
{ name : "un2", src : 'assets/cards/unknown2-card.jpg'},
{ name : "willy", src : 'assets/cards/willy-whistle-card.jpg'}];

console.log(ArrayOfImages[8].name);

shuffle(ArrayOfImages);


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


shuffle(memoryCards);


console.log(memoryCards[1].name);











function displayCards() {

let numberOfCards = memoryCards.length;
   for (let i = 0;i < numberOfCards; i++) {
   


    memoryCards.forEach(function(image) {
    
    
    let img = document.createElement('img');
    
    let memCardAtt = memoryCards[i++];

    img.setAttribute("id", memCardAtt.name)
    img.classList.add("hide");
    img.src = memCardAtt.src;
    

    let cardStyle = document.getElementsByClassName("grid-item")[i-1];
   

  


    cardStyle.appendChild(img);
});
   }
};
