function handleSubmit(event) {
    // Prevent the default submit action (more on this in a couple units)
    event.preventDefault();

    let user = document.getElementById('username');
   
    console.log('Username:', user.value);
}

// This gets the form and attaches an event listener to it
let form = document.getElementById('uname');
form.addEventListener('submit', handleSubmit);

let welcome = document.getElementById("welcome");
welcome.innerHTML = "<h3>Welcome To My Game ${user.value}</h3>"