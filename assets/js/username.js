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
const zeroReset = 0;

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

let countDown = 60;
localStorage.setItem("CountDown", countDown);      // These 4 lines of code is just to reset the gamezone main variables
let level = 1;
localStorage.setItem("Level", level);



// On Start Up

document.addEventListener("DOMContentLoaded", function() {
   
    checkHiScore();
    
 });


/**
 * This function is initiated by the user entering their Game Name & pressing the Go button, on the intro page. 
 * It starts the intro audio, 
 * stores the users game name for that interactive experience.
 * 
 * It resets two chat counter variables, displays the gamezone button & starts the comedy chat with Bub & his speech bubble. 
 * Quite a busy wee function this :)
 * 
 * @param {*} event 
 */
function handleSubmit(event) {
    
    event.preventDefault();

    introAudio.play();

    gameName = user.value;   
    localStorage.setItem("GameName", gameName);   // Used this method for transferring the users Game Name from Intro Zone to The Game Zone so I can interact with them during the game :)

    clickCounterBub = 0;    // added this because the chat would jump if you pressed 'go' again !
    clickCounterBob = 0;

    playButton.style.visibility = "visible";
    buttonName.innerHTML = `Enter The Gamezone <b>${gameName}</b> !`;

    bubCharacterRef.innerHTML = `<img src="assets/cards/bub-card.jpg" alt="Wee Bubble Bobble Bub" class="bub-size">`;
  
    speechBubs.style.visibility = "visible";
    speechBubs.innerHTML = `<p>Hey <b>${gameName}</b>, pleased to meet you ... my name is <b>Bub</b> !</p>`;
    
    /**
     * A 2 second delay before Bob appears on the screen with his speech bubble & some chat
     */
    setTimeout(function(){
       
        bobCharacterRef.innerHTML = `<img src="assets/cards/bob-card.jpg" alt="Wee Bubble Bobble Bob" class="bob-size">`
        speechBobs.style.visibility = "visible";
     
        speechBobs.innerHTML =`<p>And I am <b>Bob</b>, pleased to meet you <b>${gameName}</b></p> <p>Even if I don't look it ha ha !</p>`;
                  
        speechBubs.innerHTML =`<p>Hey <b>${gameName}</b>, pleased to meet you ... my name is <b>Bub</b> !</p> <p>Click me then Bob & vice versa, for some comedy chit chat !</p>`;

    }, 2000);

};



/**
 * This function is initiated by the user clicking on the green character Bub, on the intro page
 * It first adds one to the clickCounterBub variable which was declared zero, at the start
 * Then it checks for specific instances as regards how many times each character has been clicked
 * This allowed me to make them chat individually & in the correct order
 * I also utilise the users game name within my chat & therefore adding a little more interactivity to the experience
 * I later added the effect of only showing one speech bubble at a time by using 'visible' & 'hidden' properties
 * It also made it much easier to follow the chat between the two.
 * At the end I remove the click event for this dude below, aka Bub & then 
 * adds one to Bob, which calls his own wee function, similar to this one
 * 
 * @param {*} event 
 */
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



/**
 * This function is initiated by clicking on the blue character Bob, on the intro page
 * It first adds one to the clickCounterBob variable which was declared zero, at the start
 * Then it checks for specific instances as regards how many times each character has been clicked
 * This allowed me to make them chat individually & in the correct order
 * I also utilise the users game name within my chat & therefore adding a little more interactivity to the experience
 * I later added the effect of only showing one speech bubble at a time by using 'visible' & 'hidden' properties
 * It also made it much easier to follow the chat between the two.
 * At the end I remove the click event for this dude below, aka Bob & then I
 * add one to Bub from above, which calls his own wee function, similar to this one .... Deja Vu anyone !
 * 
 * 
 * @param {*} event 
 */
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

/**
 * This function is initiated on page start up
 * I had to add this because if the user plays it for the first time their high scores would be displayed as 'null' until they actually got high scores
 * 
 * So Level1Hi & the rest of the crew are declared at the start, as the High Scores from the gamezone which has been stored in local memory
 * The function checks if each levels high score is equal to 'null'
 * If it is, it will set the High Scores stored in memory to zero   
 * And if it's not equal to 'null', it will then display the High Score that is stored in memory, within the High Score Reset jumbotron
 * It checks this for all 5 levels too
 *  
 */
function checkHiScore () {

    if (level1Hi === null) {
       // levelOneHiDisplay.innerHTML = `0`;
        localStorage.setItem("Level1HiScore", zeroReset);
    } else {
        levelOneHiDisplay.innerHTML = `${level1Hi}`;
    };

    if (level2Hi === null) {
       // levelTwoHiDisplay.innerHTML = `0`;
        localStorage.setItem("Level2HiScore", zeroReset);
    } else {
        levelTwoHiDisplay.innerHTML = `${level2Hi}`;
    };

    if (level3Hi === null) {
      //  levelThreeHiDisplay.innerHTML = `0`;
        localStorage.setItem("Level3HiScore", zeroReset);
    } else {
        levelThreeHiDisplay.innerHTML = `${level3Hi}`;
    };

    if (level4Hi === null) {
     //   levelFourHiDisplay.innerHTML = `0`;
        localStorage.setItem("Level4HiScore", zeroReset);
    } else {
        levelFourHiDisplay.innerHTML = `${level4Hi}`;
    };

    if (level5Hi === null) {
     //   levelFiveHiDisplay.innerHTML = `0`;
        localStorage.setItem("Level5HiScore", zeroReset);
    } else {
        levelFiveHiDisplay.innerHTML = `${level5Hi}`;
    };

};




/**
 * The function is initiated by pressing the small star button located in my footer
 * Once pressed the High Score & Reset Button jumbotron will appear using the 'visible' property
 * The next bit of code I got from w3schools which allows me to toggle the high score jumbotron when pressing the button
 * I added the add / remove class for changing the colour of the button when pressed giving it that added toggly effect
 * 
 * @param {*} event 
 */
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


/**
 * The function is initiated by pressing the small cog button located in my footer
 * Once pressed the Rules jumbotron will appear using the 'visible' property
 * The next bit of code I got from w3schools which allows me to toggle the rules jumbotron when pressing the button
 * I added the add / remove class for changing the colour of the button when pressed giving it that added toggly effect* 
 * 
 * 
 * 
 * @param {*} event 
 */
function displayGameRules(event){

    event.preventDefault();

    rulesJumbo.style.visibility = "visible"; 

    if (rulesJumbo.style.display === "block") {             // Got from https://www.w3schools.com/howto/howto_js_toggle_hide_show.asp & changed to suit me
        rulesJumbo.style.display = "none";
        gameRulesDisplay.classList.remove("star-swap");
      } else {
        rulesJumbo.style.display = "block";
        gameRulesDisplay.classList.add("star-swap");
      };

};


/**
 * This function is activated the user presses the Reset Button located within the High Scores jumbotron
 * It sets each level High Score that is stored in memory to zero
 * And then it reloads the page so it does the checkHiScores function
 * You may ask why not just add checkHiScores in the below function which seemed plausible & the way I had it at first
 * Unfortunately checkHiScores variables are the same storage locations below & are declared at the start so they wouldn't change 
 * That's why it gets called on startup & this function calls for a reload
 * The reload declares the level high score variables again which have been zeroed by this function giving the effect of a reset
 * 
 * @param {*} event 
 */
function resetHiScores (event){

    event.preventDefault();

    localStorage.setItem("Level1HiScore", zeroReset);
    localStorage.setItem("Level2HiScore", zeroReset);
    localStorage.setItem("Level3HiScore", zeroReset);
    localStorage.setItem("Level4HiScore", zeroReset);
    localStorage.setItem("Level5HiScore", zeroReset);

    location.reload();

};



/**
 * This is were all the action is happening I tell ye ...
 * This is just my list events that I am listening out for
 * 
 * The first one is a submit event when the user presses game name input button
 * The second one is click event when the user presses on the Bub character
 * The third one is another click event when the user presses the High Score, star icon button
 * The forth one is also a click event when the user presses the High Score Reset Button
 * Last but not least, you guessed it ... a click event when the user presses the Rules, cog icon button
 */
form.addEventListener('submit', handleSubmit);
bubCharacterRef.addEventListener("click", bubTalk);
highScoreDisplay.addEventListener("click", displayHighScores);
resetHighScore.addEventListener("click", resetHiScores);
gameRulesDisplay.addEventListener("click", displayGameRules);