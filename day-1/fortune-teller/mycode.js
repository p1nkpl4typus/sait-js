// Exercises
// The Fortune Teller

/*
Why pay a fortune teller when you can just program your fortune yourself?
Store the following into variables:

number of children
partner's name
geographic location
job title

Output your fortune to the console like so: "You will be a X in Y, andmarried to Z with N kids.
*/

var children = Math.floor(Math.random() * 11);
var partner = "Eric";
var place = "Oslo, Norway";
var job = "Web Developer";

console.log("You will be a " + job + " in " + place + ", married to " + partner + " with " + children + " kids.") 

// --------------------------
/*
Why pay a fortune teller when you can just program your fortune yourself?
Write a function named tellFortune
that:
takes 4 arguments: number of children, partner's name, geographic location, job title.
outputs your fortune to the screen like so: "You will be a X in Y, and married to Z with N
kids."
Call that function 3 times with 3 different values for the arguments.
*/

function tellFortune(children, partner, place, job) {
    console.log("You will be a " + job + " in " + place + ", married to " + partner + " with " + children + " kids.")
}

tellFortune(2, "Bernie", "Winnipeg", "Janitor");

tellFortune(9, "Otis", "Bangkok", "Sky Diving Instructor");

tellFortune(0, "Hubert", "Auckland", "Emu Farmer");




