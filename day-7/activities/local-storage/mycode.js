var submit = document.getElementById("submit");

submit.addEventListener("click", function(event){
    var name = document.getElementById("name").value;
    var greet = document.getElementById("greet");

    event.preventDefault();

    var message = document.createElement("p");
    message.innerHTML = "How are your doing today, " + name + "?";
    greet.appendChild(message);



})
