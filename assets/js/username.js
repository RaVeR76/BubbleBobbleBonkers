let user = document.getElementById('username');
let form = document.getElementById('uname');

const bubCharacterRef = document.getElementById("bub-position");
const bobCharacterRef = document.getElementById("bob-position");
const bubChat = document.getElementById("bub-talk");
const bobChat = document.getElementById("bob-talk");
const speechBubs = document.getElementsByClassName("bub-speech")[0];
const speechBobs = document.getElementsByClassName("bob-speech")[0];
const playButton = document.getElementsByClassName("game-butt")[0];

let clickCounterBub = 0;
let clickCounterBob = 0;

console.log(clickCounterBub);
console.log(clickCounterBob);

function handleSubmit(event) {
    
    event.preventDefault();

   // bubChat.innerHTML = "";     // Added these two lines so it will remove Bob's image & his speech bubble .... if the user enters a new username
   // bobChat.innerHTML = "";

    
    document.getElementById('intro-theme').play();


    let gamename = user.value;
    localStorage.setItem("GameName", gamename);   // Used this method for transferring the users Game Name from Intro Zone to The Game Zone so I can interact with them during the game :)

    let countDown = 60;
    localStorage.setItem("CountDown", countDown);
    let level = 1;
    localStorage.setItem("Level", level);

    playButton.style.visibility = "visible";

    bubCharacterRef.innerHTML = `<img src="assets/cards/bub-card.jpg" alt="Wee Bubble Bobble Bub" class="bub-size">`
  
    speechBubs.style.visibility = "visible";
    speechBubs.innerHTML = 
        `<p>Hey <b>${ user.value }</b>, pleased to meet you ... my name is <b>Bub</b> !</p>`

    setTimeout(function(){
       
       bobCharacterRef.innerHTML = `<img src="assets/cards/bob-card.jpg" alt="Wee Bubble Bobble Bob" class="bob-size">`
       speechBobs.style.visibility = "visible";
     
       speechBobs.innerHTML = 
           ` <p>And I am <b>Bob</b>, pleased to meet you ... <b>${ user.value }</b></p> 
            <p>Even if I don't look it ha ha !</p>`
           
        
            speechBubs.innerHTML = 
            `<p>Hey <b>${ user.value }</b>, pleased to meet you ... my name is <b>Bub</b> !</p> 
            <p>Click me then Bob & vice versa, for some chat !</p>`
      


    },2000);

    //document.getElementById('username').value = ''; // Removes the username from the input field once button is hit

}




function bubTalk(event) {
  //   Prevent the default submit action
    event.preventDefault();

    clickCounterBub +=1;
    console.log(clickCounterBub);


    if (clickCounterBub === 1) {
        speechBubs.innerHTML = `
        <p>Just so you know <b>${ user.value }</b>, I am & always will be <b>Player One</b> !</p>`

    } else if (clickCounterBub === 2 && clickCounterBob === 1) {
        speechBubs.innerHTML = `
        <p>Come on now Bob. <b>${ user.value }</b> doesn't want to hear such negativity .... especially from the second best player of the game !</p>`
    
    } else if (clickCounterBub === 3 && clickCounterBob === 2) {
        speechBubs.innerHTML = `
        <p>Okay Bob, I'm sorry. I'm only having a bit of craic .... Let's not <em>drag on</em> about it (pun intended) !</p>`
    
    } else if (clickCounterBub === 4 && clickCounterBob === 3) {
        speechBubs.innerHTML = `
        <p>Fair point Bob ... Let's just tell <b>${ user.value }</b> the basic game rules so they can play a wee game</p>`
    
    } else if (clickCounterBub === 5 && clickCounterBob === 4) {
        speechBubs.innerHTML = `
        <p>Ok <b>${ user.value }</b>, the first rule of BBB Club is "We do not talk about BBB Club"</p>`
    
    } else if (clickCounterBub === 6 && clickCounterBob === 5) {
        speechBubs.innerHTML = `
        <p>Ha Ha, just testing. Ok <b>${ user.value }</b>, you need to basically match <b>ALL</b> cards in the allotted time</p>`
    
    } else if (clickCounterBub === 7 && clickCounterBob === 6) {
        speechBubs.innerHTML = `
        <p>Hey Bob, I've a match for you !</p>`
    
    } else if (clickCounterBub === 8 && clickCounterBob === 7) {
        speechBubs.innerHTML = `
        <p>My <b>ass</b> & your <b>face</b> Bob .... ha ha ha !</p>`
    
    } else if (clickCounterBub === 9 && clickCounterBob === 8) {
        speechBubs.innerHTML = `
        <p>Love You <b>${ user.value }</b> & good luck</p>
        <p><b>Peace, Love, Unity & Respect</b></p>`
    
    } 





    bubCharacterRef.removeEventListener("click", bubTalk);
    bobCharacterRef.addEventListener("click", bobTalk);

}




function bobTalk(event) {
   //  Prevent the default submit action
    event.preventDefault();

    clickCounterBob += 1;
    
    console.log(clickCounterBob);
    

    if (clickCounterBob === 1) {
    speechBobs.innerHTML = `
    <p>Hey <b>${ user.value }</b>, don't listen to him. I've heard this crap for 35 years...</p>
    <p>Hence my grumpy wee face !</p>`
   
    } else if  (clickCounterBub === 2 && clickCounterBob === 2) { 
    speechBobs.innerHTML = `    
    <p>Tell you what Bub, you're lucky I don't come up there .... we will talk later bro !</p>`
    
    } else if  (clickCounterBub === 3 && clickCounterBob === 3) { 
        speechBobs.innerHTML = `    
        <p>OH MY .... You kill me Bub!</p> 
        <p><b>${ user.value }</b> will leave if you keep it up dude</p>`
    
    } else if  (clickCounterBub === 4 && clickCounterBob === 4) { 
        speechBobs.innerHTML = `    
        <p>Good call Bub .... you start bro</p>`

    } else if  (clickCounterBub === 5 && clickCounterBob === 5) { 
        speechBobs.innerHTML = `    
        <p>Oi Bub .... That rule is from <b>Fight Club</b> the film, you muppet !</p>`

    } else if  (clickCounterBub === 6 && clickCounterBob === 6) { 
        speechBobs.innerHTML = `    
        <p>And you get <b>5</b> points for a match & <b>-2</b> points for a mismatch ... that's it really ... simples!</p>`

    } else if  (clickCounterBub === 7 && clickCounterBob === 7) { 
        speechBobs.innerHTML = `    
        <p>Awesome Bub, what is it bro?</p>`

    } else if  (clickCounterBub === 8 && clickCounterBob === 8) { 
        speechBobs.innerHTML = `    
        <p>Always the joker Bub ... right away you go <b>${ user.value }</b>, do us proud !</p>`

    } else if  (clickCounterBub === 9 && clickCounterBob === 9) { 
        speechBobs.innerHTML = `    
        <p>Love you too <b>${ user.value }</b></p>
        <p><b>Be Kind ... ALWAYS !</b></p>`

    } 


    bobCharacterRef.removeEventListener("click", bobTalk);
    bubCharacterRef.addEventListener("click", bubTalk);

}



form.addEventListener('submit', handleSubmit);
bubCharacterRef.addEventListener("click", bubTalk);
//bobCharacterRef.addEventListener("click", bobTalk);







//function characterTalk(event, characterColor) {

  //  event.preventDefault();
  
//    console.log("Working Sham")
///    if (characterColor === 'green') {
 //     bubSpeech.innerHTML = `
 //       <div class="speech-bubs">
//            <p>Hey <b>${user.value}</b>, don't listen to him. I've heard this crap for 35 years !!!</p>
 //       </div>`;
//    } else {
 //     bobSpeech.innerHTML = `
 //     <div class="speech-bubs2">
//          <p><b>${user.value}</b>, that's <b>Bob</b> by the way ... the <b>"second"</b> best player of the game !</p>
//      </div>`;
 //   }
 // }

  
  //bubCharacterRef.addEventListener('click', characterTalk("green"));
  //bobCharacterRef.addEventListener('click', characterTalk("blue"));
  
  
  // STop you greeting & tell them the rules sham so they can play the wee game