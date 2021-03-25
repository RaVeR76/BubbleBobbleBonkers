
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



var ArrayOfImages = [
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

let memoryCards = new Array();
ArrayOfImages[0];
ArrayOfImages[1];
ArrayOfImages[2];
ArrayOfImages[3];
ArrayOfImages[4];
ArrayOfImages[5];


shuffle(memoryCards);


console.log(ArrayOfImages[0]);
console.log(ArrayOfImages[1]);
console.log(ArrayOfImages[2]);
console.log(ArrayOfImages[3]);
console.log(ArrayOfImages[4]);
console.log(ArrayOfImages[5]);




function displayCards() {

    let numberOfCards = memoryCards.length;
   for (let i = 0;i < numberOfCards; i++) {
        
       let img = new Image();
       img.src = memoryCards[i];
       img.style.width = '100px';
        img.style.height = '100px';
        
        console.log(memoryCards[0]);
    }
};







//ArrayOfImages.forEach(function(image) {
 //   var img = document.createElement('img');
 //   img.src = image;
 //   img.height = "100";
 //   img.width = "100";
//    document.body.appendChild(img);
//});
