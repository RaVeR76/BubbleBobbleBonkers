
// Transfer username to gamezone area

let gamename = localStorage.getItem("GameName");

function get () {


  let test = document.getElementById("test");
    test.innerHTML = 
    `Welcome To My Game ${ gamename } .... Hope You Are Ready !!!`
  

  // (EXTRA) TO CLEAR
  // sessionStorage.removeItem("KEY");
  // sessionStorage.clear();
}





// generate a random array from 1 to 6

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









// Used like so
//var arr = [1, 2, 3, 4, 5, 6, 7];
//shuffle(arr);
//console.log(arr);

//let randomcards = document.getElementById("cardrandom");
 //   randomcards.innerHTML = 
//    `Welcome To My Game ${ arr } .... Hope You Are Ready !!!`



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


//console.log(memoryCards[0]);
//console.log(memoryCards[1]);
//console.log(memoryCards[2]);
//console.log(memoryCards[3]);
//console.log(memoryCards[4]);
//console.log(memoryCards[5]);
//console.log(memoryCards[6]);
//console.log(memoryCards[7]);
//console.log(memoryCards[8]);
//console.log(memoryCards[9]);
//console.log(memoryCards[10]);
//console.log(memoryCards[11]);

//let test1 = document.getElementById("card1");
   // test1.innerHTML = memoryCards[0]
    


//function displayCards() {

 //   let numberOfCards = memoryCards.length;
 //  for (let i = 0;i < numberOfCards; i++) {
        
 //      card = document.getElementById("card" + i);
//       let img = document.createElement('img');
//       img.src = memoryCards[i];
//       img.style.width = '100px';
//        img.style.height = '100px';
        
 //       console.log(memoryCards[0]);
 //   }
//};

//function myFunction() {
   //let element = document.getElementById("card")[i-1];
   //element.classList.add("hide");
//}


function displayCards() {

let numberOfCards = memoryCards.length;
   for (let i = 0;i < numberOfCards; i++) {
   


    memoryCards.forEach(function(image) {
    
    
    let img = document.createElement('img');
    img.src = memoryCards[i++];
    //img.height = "40";
    //img.width = "40";


    let test = document.getElementsByClassName("grid-item")[i-1];
    test.innerHTML = 
    `<div class="card"></div>`
    

    let cardStyle = document.getElementsByClassName("card")[i-1];
    cardStyle.classList.add("hide");
    cardStyle.appendChild(img);
});
   }
};
