// Set Data

localStorage.setItem("username", "Janessa");

localStorage.firstName = "Ophelia";

//localStorage.user name NOPE;

localStorage.setItem("user name", "Alice");

// Get Data

var name1 = localStorage.getItem("username");
var name2 = localStorage.firstName;
var name3 = localStorage["user name"];

console.log(name1);
console.log(name2);
console.log(name3);

// Remove Data

localStorage.removeItem("username");
localStorage.firstName = null;


localStorage.clear(); // Removes everything from local storage


