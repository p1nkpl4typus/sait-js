var docBody = document.getElementsByTagName("body")[0];
var mainContent = document.getElementsByTagName("main")[0];
var newImg = document.createElement("img");
var mainTitle = document.getElementById("mainTitle");
var navItems = document.querySelectorAll(".nav-item");

mainContent.appendChild(newImg);

if (Modernizr.geolocation) {
    newImg.src = "http://placekitten.com/800/600";
    console.log("success!");
} else {
    newImg.src = "http://www.placepuppy.net/800/400";
    console.log("Nope!");
}

if (history.length === 1) {
    docBody.style.backgroundColor = "lightblue";
} else {
    docBody.style.backgroundColor = "#ef8e70";
}

mainTitle.style.color = "red";
mainTitle.style.fontSize = "4em";

for (var i = 0; i < navItems.length; i++) {
    var navItem = navItems[i];
    if (i % 2 === 0) {
        navItem.style.textTransform = "uppercase";
        navItem.style.textDecoration = "underline overline";
    } else {
        navItem.style.textTransform = "lowercase";
    }
}
