// Exercises
// The Lifetime Supply Calculator

/*
Ever wonder how much a "lifetime supply" of your favorite snack is? Wonder no more!
Store your current age into a variable.
Store a maximum age into a variable.
Store an estimated amount per day (as a number).
Calculate how many you would eat total for the rest of your life.
Output the result to the screen like so: "You will need NN to lastyou until the ripe old age of X"
*/

var currentAge = 31;
var maxAge = 99;
var candyPerDay = 3;

var lifetimeSupply = (maxAge - currentAge) * 365 * candyPerDay;

console.log("You will need " + lifetimeSupply + " pieces of candy to last you until the ripe old age of " + maxAge);

// ---------------------------
/*
Ever wonder how much a "lifetime supply" of your favorite snack is? Wonder no more!
Write a function named calculateSupply
that:
takes 2 arguments: age, amount per day.
calculates the amount consumed for rest of the life (based on a constant max age).
outputs the result to the screen like so: "You will need NN to last you until the ripe old
age of X"
Call that function three times, passing in different values each time.
Bonus: Accept floating point values for amount per day, and round the result to a round
number.
*/

function calculateSupply(currentAge, candyPerDay) {
    var maxAge = 99;
    var lifetimeSupply = Math.round((maxAge - currentAge) * 365 * candyPerDay);
    console.log("You will need " + lifetimeSupply + " pieces of candy to last you until the ripe old age of " + maxAge);
}

calculateSupply(31, 1.8);
calculateSupply(85, 3);
calculateSupply(12, 7);

