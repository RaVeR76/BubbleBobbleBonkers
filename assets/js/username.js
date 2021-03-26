let user = document.getElementById('username');
    console.log('Username:', user.value);


function handleSubmit(event) {
    // Prevent the default submit action (more on this in a couple units)
    event.preventDefault();

    document.getElementById("bob-talk").innerHTML = "";     // Added these two lines so it will remove Bob's image & his speech bubble .... if the user enters a new username
    document.getElementById("bob-position").innerHTML = "";


    let gamename = user.value;
    localStorage.setItem("GameName", gamename);   // Used this method for transferring the users Game Name from Intro Zone to The Game Zone so I can interact with them during the game :)


    let bubtalk = document.getElementById("bub-talk");
    bubtalk.innerHTML = `
    <div class="speech-bubs">
        <p>Hey <b>${ user.value }</b>, pleased to meet you ... my name is <b>Bub</b> !</p> 
        <p>Click Me !</p>
    </div>`

    let bubposition = document.getElementById("bub-position");
    bubposition.innerHTML = `
    <a href="javascript:void(0);" onclick="bubTalk();">
        <img src="assets/cards/bub-card.jpg" alt="Wee Bubble Bobble Bub" class="bub-size">
    </a>`

    //document.getElementById('username').value = ''; // Removes the username from the input field once button is hit


}

// This gets the form and attaches an event listener to it
let form = document.getElementById('uname');
form.addEventListener('submit', handleSubmit);




function bubTalk() {
    // Prevent the default submit action (more on this in a couple units)
    event.preventDefault();

    let bubtalk = document.getElementById("bub-talk");
    bubtalk.innerHTML = `
    <div class="speech-bubs">
        <p>Just so you know <b>${ user.value }</b>, I am & always will be <b>Player One</b> !</p>
    </div>`

    let bubposition = document.getElementById("bub-position");
    bubposition.innerHTML = `
    <a href="javascript:void(0);" onclick="bobTalk();">
        <img src="assets/cards/bub-card.jpg" alt="Wee Bubble Bobble Bub" class="bub-size">
    </a>`
}



function bobTalk() {
    // Prevent the default submit action (more on this in a couple units)
    event.preventDefault();

    let bobtalk = document.getElementById("bob-talk");
    bobtalk.innerHTML = `
    <div class="speech-bubs2">
        <p>Hey <b>${ user.value }</b>, don't listen to him. I've heard this crap for 35 years !!!</p>
    </div>`


    let bobposition = document.getElementById("bob-position");
    bobposition.innerHTML = `
    <a href="javascript:void(0);" onclick="bubTalk2();">
        <img src="assets/cards/bob-card.jpg" alt="Wee Bubble Bobble Bub" class="bob-size">
    </a>`
}


function bubTalk2() {
    // Prevent the default submit action (more on this in a couple units)
    event.preventDefault();

    let bubtalk = document.getElementById("bub-talk");
    bubtalk.innerHTML = `
    <div class="speech-bubs">
        <p><b>${ user.value }</b>, that's <b>Bob</b> by the way ... the <b>"second"</b> best player of the game !</p>
    </div>`

    let bubposition = document.getElementById("bub-position");
    bubposition.innerHTML = `
    <a href="javascript:void(0);" onclick="bobTalk();">
        <img src="assets/cards/bub-card.jpg" alt="Wee Bubble Bobble Bub" class="bub-size">
    </a>`
}