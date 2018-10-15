var submitButton = document.squareForm.submit;
var result = document.getElementById("result");

function squareNumber(num) {
    var squared = Math.pow(num, 2);
    result.innerHTML = squared;
};

submitButton.addEventListener("click", function(event) {
    event.preventDefault();

    var number = document.squareForm.number.value;
    squareNumber(number);

});
