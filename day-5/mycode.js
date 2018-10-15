var myForm = document.myForm;

console.log(myForm);

var fullName = myForm.name;

console.log(fullName);

var email = myForm.email;

// email.focus();

var checkboxList = myForm.feature;

for (var i = 0; i < checkboxList.length; i++) {
    if (checkboxList[i].checked) {
        console.log(checkboxList[i].value);
    }
}



