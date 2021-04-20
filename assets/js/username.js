// Declare constants & variables

const bubCharacterRef = document.getElementById("bub-position");
const bobCharacterRef = document.getElementById("bob-position");
const bubChat = document.getElementById("bub-talk");
const bobChat = document.getElementById("bob-talk");
const speechBubs = document.getElementsByClassName("bub-speech")[0];
const speechBobs = document.getElementsByClassName("bob-speech")[0];
const playButton = document.getElementsByClassName("game-butt")[0];
const buttonName = document.getElementsByClassName("btn-block")[0];
const introAudio = document.getElementById('intro-theme');
const resetJumbo = document.getElementById('reset-jumbo');
const rulesJumbo = document.getElementById('rules-jumbo');
const highScoreDisplay = document.getElementById("high-scores");
const gameRulesDisplay = document.getElementById("game-rules");
const resetHighScore = document.getElementById("reset-butt");
const levelOneHiDisplay = document.getElementsByClassName("hi-score")[0];
const levelTwoHiDisplay = document.getElementsByClassName("hi-score")[1];
const levelThreeHiDisplay = document.getElementsByClassName("hi-score")[2];
const levelFourHiDisplay = document.getElementsByClassName("hi-score")[3];
const levelFiveHiDisplay = document.getElementsByClassName("hi-score")[4];

let user = document.getElementById('username');
let form = document.getElementById('uname');
let level1Hi = localStorage.getItem("Level1HiScore");
let level2Hi = localStorage.getItem("Level2HiScore");
let level3Hi = localStorage.getItem("Level3HiScore");
let level4Hi = localStorage.getItem("Level4HiScore");
let level5Hi = localStorage.getItem("Level5HiScore");
let clickCounterBub = 0;
let clickCounterBob = 0;
let gameName = "";


// On Start Up

document.addEventListener("DOMContentLoaded", function() {
   
    checkHiScore();
    
 });



function handleSubmit(event) {
    
    event.preventDefault();

    introAudio.play();

    gameName = user.value;   
    localStorage.setItem("GameName", gameName);   // Used this method for transferring the users Game Name from Intro Zone to The Game Zone so I can interact with them during the game :)

    let countDown = 60;
    localStorage.setItem("CountDown", countDown);      // These 4 lines of code is just to reset the gamezone main variables
    let level = 1;
    localStorage.setItem("Level", level);

    clickCounterBub = 0;    // added this because the chat would jump if you pressed 'go' again !
    clickCounterBob = 0;

    playButton.style.visibility = "visible";
    buttonName.innerHTML = `Enter The Gamezone <b>${gameName}</b> !`;


    bubCharacterRef.innerHTML = `<img src="assets/cards/bub-card.jpg" alt="Wee Bubble Bobble Bub" class="bub-size">`;
  
    speechBubs.style.visibility = "visible";
    speechBubs.innerHTML = `<p>Hey <b>${gameName}</b>, pleased to meet you ... my name is <b>Bub</b> !</p>`;

    setTimeout(function(){
       
        bobCharacterRef.innerHTML = `<img src="assets/cards/bob-card.jpg" alt="Wee Bubble Bobble Bob" class="bob-size">`
        speechBobs.style.visibility = "visible";
     
        speechBobs.innerHTML =`<p>And I am <b>Bob</b>, pleased to meet you <b>${gameName}</b></p> <p>Even if I don't look it ha ha !</p>`;
                  
        speechBubs.innerHTML =`<p>Hey <b>${gameName}</b>, pleased to meet you ... my name is <b>Bub</b> !</p> <p>Click me then Bob & vice versa, for some comedy chit chat !</p>`;

    }, 2000);

    //document.getElementById('username').value = ''; // Removes the username from the input field once button is hit

};




function bubTalk(event) {
  //   Prevent the default submit action
    event.preventDefault();

    clickCounterBub +=1;
    
    if (clickCounterBub === 1) {
        speechBubs.innerHTML = `
        <p>Just so you know <b>${gameName}</b>, I am & always will be <b>Player One</b> !</p>`;
        speechBubs.style.visibility = "visible";
        speechBobs.style.visibility = "hidden";

    } else if (clickCounterBub === 2 && clickCounterBob === 1) {
        speechBubs.innerHTML = `
        <p>Come on now Bob. <b>${gameName}</b> doesn't want to hear such negativity .... especially from the <b><em>second</em></b> best player of the game !</p>`;
        speechBubs.style.visibility = "visible";
        speechBobs.style.visibility = "hidden";
    
    } else if (clickCounterBub === 3 && clickCounterBob === 2) {
        speechBubs.innerHTML = `
        <p>Okay Bob, I'm sorry. I'm only having a bit of craic .... Let's not <b><em>dragon</em></b> about it (pun intended) !</p>`;
        speechBubs.style.visibility = "visible";
        speechBobs.style.visibility = "hidden";
    
    } else if (clickCounterBub === 4 && clickCounterBob === 3) {
        speechBubs.innerHTML = `
        <p>Fair point Bob ... Let's just tell <b>${gameName}</b> the basic game rules so they can play a wee game</p>`;
        speechBubs.style.visibility = "visible";
        speechBobs.style.visibility = "hidden";
    
    } else if (clickCounterBub === 5 && clickCounterBob === 4) {
        speechBubs.innerHTML = `
        <p>Ok <b>${gameName}</b>, the first rule of BBB Club is "We do not talk about BBB Club"</p>`;
        speechBubs.style.visibility = "visible";
        speechBobs.style.visibility = "hidden";
    
    } else if (clickCounterBub === 6 && clickCounterBob === 5) {
        speechBubs.innerHTML = `
        <p>Ha Ha, just testing. Ok <b>${gameName}</b>, you need to basically match <b>ALL</b> cards in the allotted time</p>`;
        speechBubs.style.visibility = "visible";
        speechBobs.style.visibility = "hidden";
    
    } else if (clickCounterBub === 7 && clickCounterBob === 6) {
        speechBubs.innerHTML = `
        <p>Hey Bob, I've a match for you !</p>`;
        speechBubs.style.visibility = "visible";
        speechBobs.style.visibility = "hidden";
    
    } else if (clickCounterBub === 8 && clickCounterBob === 7) {
        speechBubs.innerHTML = `
        <p>My <b>butt</b> & your <b>face</b> Bob .... ha ha ha !</p>`;
        speechBubs.style.visibility = "visible";
        speechBobs.style.visibility = "hidden";
    
    } else if (clickCounterBub === 9 && clickCounterBob === 8) {
        speechBubs.innerHTML = `
        <p>Love You <b>${gameName}</b> & good luck</p>
        <p><b>Peace, Love, Unity & Respect</b></p>`;
        speechBubs.style.visibility = "visible";
        speechBobs.style.visibility = "hidden";
    
    } 

    bubCharacterRef.removeEventListener("click", bubTalk);
    bobCharacterRef.addEventListener("click", bobTalk);

};




function bobTalk(event) {
   //  Prevent the default submit action
    event.preventDefault();

    clickCounterBob += 1;
    
    if (clickCounterBob === 1) {
    speechBobs.innerHTML = `<p>Hey <b>${gameName}</b>, don't listen to him. I've heard this crap for 35 years...</p> <p>Hence my grumpy wee face !</p>`;
    speechBubs.style.visibility = "hidden";
    speechBobs.style.visibility = "visible";
   
    } else if  (clickCounterBub === 2 && clickCounterBob === 2) { 
    speechBobs.innerHTML = `<p>Tell you what Bub, you're lucky I don't come up there .... we will talk later bro !</p>`;
    speechBubs.style.visibility = "hidden";
    speechBobs.style.visibility = "visible";
    
    } else if  (clickCounterBub === 3 && clickCounterBob === 3) { 
        speechBobs.innerHTML = `<p>OH MY .... You kill me Bub!</p> <p><b>${gameName}</b> will leave if you keep it up dude</p>`;
        speechBubs.style.visibility = "hidden";
        speechBobs.style.visibility = "visible";
    
    } else if  (clickCounterBub === 4 && clickCounterBob === 4) { 
        speechBobs.innerHTML = `<p>Good call Bub .... you start bro</p>`;
        speechBubs.style.visibility = "hidden";
        speechBobs.style.visibility = "visible";

    } else if  (clickCounterBub === 5 && clickCounterBob === 5) { 
        speechBobs.innerHTML = `<p>Oi Bub .... That rule is from the film <b>Fight Club</b>, you muppet !</p>`;
        speechBubs.style.visibility = "hidden";
        speechBobs.style.visibility = "visible";

    } else if  (clickCounterBub === 6 && clickCounterBob === 6) { 
        speechBobs.innerHTML = `<p>And you get <b>5</b> points for a match & <b>-2</b> points for a mismatch ... that's it really ... simples!</p>`;
        speechBubs.style.visibility = "hidden";
        speechBobs.style.visibility = "visible";

    } else if  (clickCounterBub === 7 && clickCounterBob === 7) { 
        speechBobs.innerHTML = `<p>Awesome Bub, what is it bro?</p>`;
        speechBubs.style.visibility = "hidden";
        speechBobs.style.visibility = "visible";

    } else if  (clickCounterBub === 8 && clickCounterBob === 8) { 
        speechBobs.innerHTML = `<p>Always the joker Bub ... right away you go <b>${gameName}</b>, do us proud !</p>`;
        speechBubs.style.visibility = "hidden";
        speechBobs.style.visibility = "visible";

    } else if  (clickCounterBub === 9 && clickCounterBob === 9) { 
        speechBobs.innerHTML = `<p>Love you too <b>${gameName}</b></p> <p><b>Be Kind ... ALWAYS !</b></p>`;
        speechBubs.style.visibility = "hidden";
        speechBobs.style.visibility = "visible";
    } 


    bobCharacterRef.removeEventListener("click", bobTalk);
    bubCharacterRef.addEventListener("click", bubTalk);

};


function checkHiScore () {

    if (level1Hi === null) {
        levelOneHiDisplay.innerHTML = `0`;
        localStorage.setItem("Level1HiScore", 0);
    } else {
        levelOneHiDisplay.innerHTML = `${level1Hi}`;
    };

    if (level2Hi === null) {
        levelTwoHiDisplay.innerHTML = `0`;
        localStorage.setItem("Level2HiScore", 0);
    } else {
        levelTwoHiDisplay.innerHTML = `${level2Hi}`;
    };

    if (level3Hi === null) {
        levelThreeHiDisplay.innerHTML = `0`;
        localStorage.setItem("Level3HiScore", 0);
    } else {
        levelThreeHiDisplay.innerHTML = `${level3Hi}`;
    };

    if (level4Hi === null) {
        levelFourHiDisplay.innerHTML = `0`;
        localStorage.setItem("Level4HiScore", 0);
    } else {
        levelFourHiDisplay.innerHTML = `${level4Hi}`;
    };

    if (level5Hi === null) {
        levelFiveHiDisplay.innerHTML = `0`;
        localStorage.setItem("Level5HiScore", 0);
    } else {
        levelFiveHiDisplay.innerHTML = `${level5Hi}`;
    };

};





function displayHighScores(event){

    event.preventDefault();


    resetJumbo.style.visibility = "visible"; 

    if (resetJumbo.style.display === "block") {             // Got from https://www.w3schools.com/howto/howto_js_toggle_hide_show.asp & changed to suit me
        resetJumbo.style.display = "none";
        highScoreDisplay.classList.remove("star-swap");
      } else {
        resetJumbo.style.display = "block";
        highScoreDisplay.classList.add("star-swap");
      };

};



function displayGameRules(event){

    event.preventDefault();

    rulesJumbo.style.visibility = "visible"; 

    if (rulesJumbo.style.display === "block") {             // Got from https://www.w3schools.com/howto/howto_js_toggle_hide_show.asp & changed to suit me
        rulesJumbo.style.display = "none";
        gameRulesDisplay.classList.remove("mute");
      } else {
        rulesJumbo.style.display = "block";
        gameRulesDisplay.classList.add("mute");
      };

};



function resetHiScores (event){

    event.preventDefault();

    localStorage.setItem("Level1HiScore", 0);
    localStorage.setItem("Level2HiScore", 0);
    localStorage.setItem("Level3HiScore", 0);
    localStorage.setItem("Level4HiScore", 0);
    localStorage.setItem("Level5HiScore", 0);

    location.reload();

};

form.addEventListener('submit', handleSubmit);
bubCharacterRef.addEventListener("click", bubTalk);
highScoreDisplay.addEventListener("click", displayHighScores);
resetHighScore.addEventListener("click", resetHiScores);
gameRulesDisplay.addEventListener("click", displayGameRules);

  
  // STop you greeting & tell them the rules sham so they can play the wee game