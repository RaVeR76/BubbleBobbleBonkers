let user = document.getElementById('username');
    console.log('Username:', user.value);


function handleSubmit(event) {
    // Prevent the default submit action (more on this in a couple units)
    event.preventDefault();

    document.getElementById("bob-talk").innerHTML = "";     // Added these two lines so it will remove Bob's image & his speech bubble .... if the user enters a new username
    document.getElementById("bob-position").innerHTML = "";



    let bubtalk = document.getElementById("bub-talk");
    bubtalk.innerHTML = `
    <div class="speech-bubs">
        <p>Hey <b>${ user.value }</b>, pleased to meet you ... my name is <b>Bub</b> !</p> 
        <p>Click Me !</p>
    </div>`

    let bubposition = document.getElementById("bub-position");
    bubposition.innerHTML = `
    <a href="javascript:void(0);" onclick="bubTalk();">
        <img src="assets/images/bub-card-square-200.jpg" alt="Wee Bubble Bobble Bub" class="bub-size">
    </a>`

    document.getElementById('username').value = ''; // Removes the username from the input field once button is hit


//    if (user.value === "Roisin") {
//        let welcome = document.getElementById("welcome");
//        welcome.innerHTML = `<h3>Welcome To My Game ${ user.value }</h3>`
//    } else {
//        let welcome = document.getElementById("welcome");
//        welcome.innerHTML = `<h3>Fck away off from my game ${ user.value }!!!</h3>`
//    }

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
        <img src="assets/images/bub-card-square-200.jpg" alt="Wee Bubble Bobble Bub" class="bub-size">
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
        <img src="assets/images/bob-card-square-200.jpg" alt="Wee Bubble Bobble Bub" class="bub-size2">
    </a>`
}


function bubTalk2() {
    // Prevent the default submit action (more on this in a couple units)
    event.preventDefault();

    let bubtalk = document.getElementById("bub-talk");
    bubtalk.innerHTML = `
    <div class="speech-bubs">
        <p><b>${ user.value }</b>, that's <b>Bob</b> by the way ... the <b>"second"</b> player of the game !</p>
    </div>`

    let bubposition = document.getElementById("bub-position");
    bubposition.innerHTML = `
    <a href="javascript:void(0);" onclick="bobTalk();">
        <img src="assets/images/bub-card-square-200.jpg" alt="Wee Bubble Bobble Bub" class="bub-size">
    </a>`
}