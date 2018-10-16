// $("a").html("Yahoo!");
// $("a").attr("href", "https://www.yahoo.com");
// $("a").css({"text-transform": "uppercase"});

console.log($("h1"));

$(".highlight").css({"background-color": "yellow"});

$("footer p").html("Extra Cool Footer").css({"color": "blue"});

$(document).ready(function() {
    var links = $("a");

    links.each(function() {
        var link = $(this);
        link.text("Search Engine!");
    });
});

$("#hi").on("click", function(){
    alert("Hey There!");
});

$("a").on("keypress", function(event) {
    console.log(event);
    console.log(event.which);
    console.log(event.target);
});

$("form").on("submit", function(event) {
    event.preventDefault();
    console.log("This form is not submitting!")
});

// $("#error").toggle(1000);

$("#error").hide();
$("#error").fadeIn(5000);
$("#error").show(1000, function(){
    $(this).addClass("alert");
})

$(".highlight").toggle(5000);
