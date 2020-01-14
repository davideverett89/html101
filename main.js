let myButton = document.getElementById("click-me");
let myDiv = document.getElementById("target");
let myPrompt = window.prompt("Type Something");
myButton.addEventListener("click", words);


function words() {
    myDiv.innerHTML = myPrompt;
}
