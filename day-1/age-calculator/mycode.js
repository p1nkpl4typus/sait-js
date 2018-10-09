// Exercises
// The Age Calculator

/*
Want to find out how old you'll be? Calculate it!
Store your birth year in a variable.
Store a future year in a variable.
Calculate your 2 possible ages for that year based on the stored values. (For example, if you were born in 1988, then in 2026 you'll be either 37 or 38, depending on what month it is in 2026.) Output them to the console like so: "I will be either NN or NN in YYYY", substituting the values.
*/

var birthYear = 1987;
var futureYear = 2050;

var beforeBday = (futureYear - birthYear) - 1;
var afterBday = futureYear - birthYear;

console.log("I will either be " + beforeBday + " or " + afterBday + " in " + futureYear);

// -----------------------
/*
You know how old your dog is in human years, but what about dog years? Calculate it!
Write a function named calculateDogAge
that:
takes 1 argument: your puppy's age.
calculates your dog's age based on the conversion rate of 1 human year to 7 dog years.
outputs the result to the screen like so: "Your doggie is NN years old in dog years!"
Call the function three times with different sets of values.
Bonus: Add an additional argument to the function that takes the conversion rate of human
to dog years.
*/

function calculateDogAge(age) {
    console.log("Your doggie is " + (age * 7) + " years old in dog years!");
}

calculateDogAge(8);
calculateDogAge(2);
calculateDogAge(5);
