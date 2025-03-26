const alertButton = document.getElementById("alert");
const logButton = document.getElementById("log");
const blueButton = document.getElementById("blue");
const whiteButton = document.getElementById("white");
const display = document.getElementById("display")

const today = new Date()

const hours = today.getHours();
const minutes = today.getMinutes();

display.innerText = `The time is ${parseInt(hours)} : ${parseInt(minutes)} `

alertButton.addEventListener("click", function() {
    alert("stop clicking the button")
})

logButton.addEventListener("click", function() {
    console.log(`${hours} : ${minutes}`)
})

const buttons = document.querySelectorAll(".button")

blueButton.addEventListener("click", function() {
    buttons.forEach(function(button){
        button.style.backgroundColor = "blue";
    })
})

whiteButton.addEventListener("click", function() {
    buttons.forEach(function(button){
        button.style.backgroundColor = "white";
    })
})

