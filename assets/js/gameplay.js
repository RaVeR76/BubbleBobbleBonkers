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
    //cardCheck();

    console.log("Hello sham")
}





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
'assets/cards/baron-von-blubba-card.jpg', 
'assets/cards/beluga-card.jpg', 
'assets/cards/bob-card.jpg',
'assets/cards/bub-card.jpg',
'assets/cards/bubble-buster.jpg',
'assets/cards/coiley-card.jpg',
'assets/cards/hullaballoon-card.jpg',
'assets/cards/incendo-card.jpg',
'assets/cards/stoner-card.jpg',
'assets/cards/super-socket-card.jpg',
'assets/cards/unknown1-card.jpg',
'assets/cards/unknown2-card.jpg',
'assets/cards/willy-whistle-card.jpg'];


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














//function displayCards() {

//let numberOfCards = memoryCards.length;
//   for (let i = 0;i < numberOfCards; i++) {
   


//    memoryCards.forEach(function(image) {
    
    
 //   let img = document.createElement('img');
 //   img.src = memoryCards[i++];
    


 //   let cardStyle = document.getElementsByClassName("grid-item")[i-1];
   
 //   cardStyle.appendChild(img);

 ////   img.classList.add("hide");
//});
//   }
//};
