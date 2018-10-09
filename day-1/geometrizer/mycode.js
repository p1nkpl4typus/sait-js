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



