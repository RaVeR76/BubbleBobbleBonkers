let gamename = sessionStorage.getItem("GameName");


function get () {


  let test = document.getElementById("test");
    test.innerHTML = 
    `Welcome To My Game ${ gamename } .... Hope You Are Ready !!!`
  

  // (EXTRA) TO CLEAR
  // sessionStorage.removeItem("KEY");
  // sessionStorage.clear();
}