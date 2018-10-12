var square = document.getElementById("box");
var messageBox = document.getElementById("box-2");
var button = document.getElementById("myBtn");
var mainBody = document.getElementsByTagName("body")[0];
var link = document.getElementById("myLink");

// square.style.position = "absolute";
// square.style.left = "100px";
// square.style.top = "150px";


function doThisLater() {
    alert("Time's up!");
}

var timerId = setTimeout(doThisLater, 2000);

clearTimeout(timerId);

function getCurrentTime() {
    square.innerHTML = new Date();
}

setInterval(getCurrentTime, 1000);

function sayHi() {
    alert("Hi!");
}

function changeBackground() {
    mainBody.style.backgroundColor = "yellow";
}

button.addEventListener("click", function(event) {
    btn = event.currentTarget;
    btn.style.backgroundColor = "red";
    btn.innerHTML = "Clicked";
    changeBackground();
});

link.addEventListener("click", function(event) {
    event.preventDefault();
    console.log(event);
    messageBox.innerHTML = "Error! Can not leave page!";
})
