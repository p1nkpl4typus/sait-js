var header = document.getElementById("header");

console.log(header);

// var listItems = document.getElementsByTagName("li");
// var listItems = document.getElementsByClassName("nav-item");
var listItems = document.querySelectorAll(".nav-item");

console.log(listItems);

var firstItem = document.querySelector(".nav-item");

console.log(firstItem);

console.log(listItems[0].classList);

console.log(document.getElementsByTagName("p")[1]);

var mainImg = document.getElementsByTagName("img")[0];

// mainImg.src = 'http://placekitten.com/500/300';

// console.log(mainImg);

mainImg.setAttribute("src", "https://www.placecage.com/gif/500/300");

console.log(mainImg);

firstItem.style.color = "red";

var footer = document.getElementById("footer");

footer.innerHTML = "<h3>This is my awesome footer</h3><p>Awesome footer stuff goes here.</p>"

var mainContent = document.getElementById("main");

var newPara = document.createElement("p");
var paraText = document.createTextNode("This paragraph is magic JavaScript!");

newPara.appendChild(paraText);
mainContent.appendChild(newPara);

