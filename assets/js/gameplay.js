function get () {
  // (A) GET FROM SESSION
  var first = sessionStorage.getItem("first");
      // JSON parse to turn stored sting back into array
     

  // (B) IT WORKS!
  // Manually opening 1b-session.html will not work though
  // Session data will perish once tab/window is closed
  console.log(first); // Foo Bar

  let test = document.getElementById("test");
    test.innerHTML = 
    `Welcome To My Game ${ first } .... Hope You Are Ready !!!`
  

  // (EXTRA) TO CLEAR
  // sessionStorage.removeItem("KEY");
  // sessionStorage.clear();
}