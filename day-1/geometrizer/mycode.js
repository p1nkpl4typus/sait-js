// Exercises
// The Geometrizer

/*
Calculate properties of a circle, using these definition.
Store a radius into a variable.
Calculate the circumference based on the radius, and output "The circumference is NN" into the console.
Calculate the area based on the radius, and output "The area is NN" into the console.
*/

var myCircleRadius = 3;
var pi = Math.PI;
var myCircleCircumference = 2 * pi * myCircleRadius;
console.log("The circumference is", myCircleCircumference);

var myCircleArea = pi * Math.pow(myCircleRadius, 2);

console.log("The area is", myCircleArea);

// --------------------------------
/*
Create 2 functions that calculate properties of a circle, using the definitions here.
Create a function called calcCircumfrence :
Pass the radius to the function.
Calculate the circumference based on the radius, and output "The circumference is NN".
Create a function called calcArea :
Pass the radius to the function.
Calculate the area based on the radius, and output "The area is NN".
*/

function calcCircumfrence(radius) {
    console.log("The circumference is " + 2 * pi * radius);
}

calcCircumfrence(3);

function calcArea(radius) {
    console.log("The area is " + pi * Math.pow(radius, 2));
}

calcArea(3);
