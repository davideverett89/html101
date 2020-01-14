let myButton = document.getElementById("click-me");
let myDiv = document.getElementById("target");
myButton.addEventListener("click", words);


function words() {
    myDiv.innerHTML = `<img src ="https://vignette.wikia.nocookie.net/starwars/images/c/cc/Star-wars-logo-new-tall.jpg/revision/latest?cb=20190313021755" alt="star-wars">`;
}
