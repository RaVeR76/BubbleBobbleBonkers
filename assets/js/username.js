let user = document.getElementById('username');

//const bubCharacterRef = document.querySelector("#bub-position");
//const bobCharacterRef = document.querySelector('#bob-position');
const bubChat = document.getElementById("bub-talk");
const bobChat = document.getElementById("bob-talk");
const bubCharacterRef = document.getElementById("bub-position");
const bobCharacterRef = document.getElementById("bob-position");
const speechBubs = document.getElementsByClassName("bub-speech");
const speechBobs = document.getElementsByClassName("bob-speech");




function handleSubmit(event) {
    
    event.preventDefault();

    document.getElementById("bob-talk").innerHTML = "";     // Added these two lines so it will remove Bob's image & his speech bubble .... if the user enters a new username
    document.getElementById("bob-position").innerHTML = "";


    let gamename = user.value;
    localStorage.setItem("GameName", gamename);   // Used this method for transferring the users Game Name from Intro Zone to The Game Zone so I can interact with them during the game :)


    //let bubposition = document.getElementById("bub-position");
    bubCharacterRef.innerHTML = `<img src="assets/cards/bub-card.jpg" alt="Wee Bubble Bobble Bub" class="bub-size">`

   // let bubtalk = document.getElementById("bub-talk");
   bubChat.innerHTML = `
    <div class="bub-speech">
        <p>Hey <b>${ user.value }</b>, pleased to meet you ... my name is <b>Bub</b> !</p> 
        <p>Click Me !</p>
    </div>`

    setTimeout(function(){
       // let bobposition = document.getElementById("bob-position");
       bobCharacterRef.innerHTML = `<img src="assets/cards/bob-card.jpg" alt="Wee Bubble Bobble Bob" class="bob-size">`

       // let bobtalk = document.getElementById("bob-talk");
        bobChat.innerHTML = `
        <div class="bob-speech">
            <p>And I am <b>Bob</b>, pleased to meet you ... <b>${ user.value }</b> !</p> 
        </div>`    
    },2000);








    //document.getElementById('username').value = ''; // Removes the username from the input field once button is hit
    

}

// This gets the form and attaches an event listener to it
let form = document.getElementById('uname');
form.addEventListener('submit', handleSubmit);




function bubTalk(event) {
  //   Prevent the default submit action (more on this in a couple units)
    event.preventDefault();

    
    bubChat.innerHTML = `
    <div class="bub-speech">
        <p>Just so you know <b>${ user.value }</b>, I am & always will be <b>Player One</b> !</p>
    </div>`

  


}


  // let bubposition = document.getElementById("bub-position");
   //bubCharacterRef.innerHTML = `
   // <a href="javascript:void(0);" onclick="bobTalk();">
   //     <img src="assets/cards/bub-card.jpg" alt="Wee Bubble Bobble Bub" class="bub-size">
   // </a>`







//function bobTalk(event) {
    // Prevent the default submit action (more on this in a couple units)
 //   event.preventDefault();

//    let bobtalk = document.getElementById("bob-talk");
//    bobtalk.innerHTML = `
//    <div class="speech-bubs2">/        <p>Hey <b>${ user.value }</b>, don't listen to him. I've heard this crap for 35 years !!!</p>
//    </div>`


//    let bobposition = document.getElementById("bob-position");
//    bobposition.innerHTML = `<img src="assets/cards/bob-card.jpg" alt="Wee Bubble Bobble Bub" class="bob-size">`
//}


//function bubTalk2(event) {
 //  //  Prevent the default submit action (more on this in a couple units)
  //  event.preventDefault();

//    let bubtalk = document.getElementById("bub-talk");
//    bubtalk.innerHTML = `
//    <div class="speech-bubs">
//        <p><b>${ user.value }</b>, that's <b>Bob</b> by the way ... the <b>"second"</b> best player of the game !</p>
 //   </div>`

 //   let bubposition = document.getElementById("bub-position");
 //   bubposition.innerHTML = `
 //   <a href="javascript:void(0);" onclick="bobTalk();">
 //       <img src="assets/cards/bub-card.jpg" alt="Wee Bubble Bobble Bub" class="bub-size">
 //   </a>
//}



bubCharacterRef.addEventListener("click", bubTalk, false);
//bubCharacterRef.addEventListener("click", bubTalk2, false);







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