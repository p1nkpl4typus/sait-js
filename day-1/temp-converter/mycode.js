// Exercises
// The Temperature Converter

/*
It's cold out! Let's make a converter based on the steps here.
Store a celsius temperature into a variable.
Convert it to fahrenheit and output "NN°C is NN°F".
Now store a fahrenheit temperature into a variable.
Convert it to celsius and output "NN°F is NN°C."
*/

var tempCelsius = 11;

var convertFahrenheit = Math.round((tempCelsius * 9) / 5 + 32);
console.log(tempCelsius + "°C is " + convertFahrenheit  + "°F");

var tempFahrenheit = 80;

var convertCelsius = Math.round(((tempFahrenheit - 32) * 5) / 9);
console.log(tempFahrenheit + "°F is " + convertCelsius + "°C");
