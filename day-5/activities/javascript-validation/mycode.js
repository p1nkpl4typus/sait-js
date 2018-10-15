var submitBtn = document.getElementById("submitBtn");
var errorName = document.getElementById("errorName");
var errorAge = document.getElementById("errorAge");
var errorMinor = document.getElementById("errorMinor");

submitBtn.addEventListener("click", function(event) {
    errorName.style.display = "none";
    errorAge.style.display = "none";
    errorMinor.style.display = "none";

    var name = document.form1.txtName.value;
    var age = Number(document.form1.txtAge.value);

    if (!name) {
        event.preventDefault();
        errorName.style.display = "block";
    }

    if (!age) {
        event.preventDefault();
        errorAge.style.display = "block";
    } else if (age < 18) {
        event.preventDefault();
        errorMinor.style.display = "block";
    }
  
})
