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

//-------------------------------
/*
It's hot out! Let's make a converter based on the steps here.
Create a function called celsiusToFahrenheit :
Store a celsius temperature into a variable.
Convert it to fahrenheit and output "NN°C is NN°F".
Create a function called fahrenheitToCelsius :
Now store a fahrenheit temperature into a variable.
Convert it to celsius and output "NN°F is NN°C."
*/

function celsiusToFahrenheit(temp) {
    var newTemp = Math.round((temp * 9) / 5 + 32);
    console.log(temp + "°C is " + newTemp  + "°F");
}

function fahrenheitToCelsius(temp) {
    var newTemp = Math.round(((temp - 32) * 5) / 9);
    console.log(temp + "°F is " + newTemp + "°C");
}

celsiusToFahrenheit(15);
fahrenheitToCelsius(90);
