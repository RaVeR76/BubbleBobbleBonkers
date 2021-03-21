function handleSubmit(event) {
    // Prevent the default submit action (more on this in a couple units)
    event.preventDefault();

    let user = document.getElementById('username');
    console.log('Username:', user.value);

    let bubtalk = document.getElementById("bub-talk");
    bubtalk.innerHTML = `
    <div class="speech-bubs" contenteditable>
        <p>Hey <b>${ user.value }</b>, pleased to meet you ... my name is <b>Bub</b> !</p>
    </div>`

    let bubposition = document.getElementById("bub-position");
    bubposition.innerHTML = `
    <a href="javascript:void(0);" onclick="bobTalk();">
        <img src="assets/images/bub-card-square-200.jpg" alt="Wee Bubble Bobble Bub" class="bub-size">
    </a>`


    



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




//   $('#bub-position').click(function(){ MyFunction(); return false; });





function bobTalk() {
    // Prevent the default submit action (more on this in a couple units)
    event.preventDefault();

    let user = document.getElementById('username');
    console.log('Username:', user.value);

    let bobtalks = document.getElementById("bob-talk");
    bobtalks.innerHTML = `
    <div class="speech-bubs2" contenteditable>
        <p>Hey <b>${ user.value }</b>, don't listen too that <b>CUNT</b> !!!</p>
    </div>`


    let bobpositions = document.getElementById("bob-position");
    bobpositions.innerHTML = `
    <a href="gamezone.html" target="_blank">
        <img src="assets/images/bob-card-square-200.jpg" alt="Wee Bubble Bobble Bub" class="bub-size2">
    </a>`


}
/*
// This gets the form and attaches an event listener to it
let form = document.getElementById('uname');
form.addEventListener('submit', handleSubmit);*/