function handleSubmit(event) {
    // Prevent the default submit action (more on this in a couple units)
    event.preventDefault();

    let user = document.getElementById('username');
    console.log('Username:', user.value);

    let welcome = document.getElementById("welcome");
    welcome.innerHTML = `<p>Welcome To My Game ${ user.value } .... Hope You Are Ready !!!</p>`
    



//    if (user.value === "Roisin") {
//        let welcome = document.getElementById("welcome");
//        welcome.innerHTML = `<h3>Welcome To My Game ${ user.value } You SEXY Wee BEAR !!!</h3>`
//    } else {
//        let welcome = document.getElementById("welcome");
//        welcome.innerHTML = `<h3>Fuck away off from my game ${ user.value } you CUNT !!!</h3>`
//    }

}

// This gets the form and attaches an event listener to it
let form = document.getElementById('uname');
form.addEventListener('submit', handleSubmit);
