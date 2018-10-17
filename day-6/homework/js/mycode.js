var form = $("form");

form.on("submit", function(event) {
    $("div").remove(".box");

    var numOfColors = parseInt($("#colorNum").val());
    var hue = $("input[name='colorHue']:checked").val();
    var lumin = $("input[name='colorLumin']:checked").val();

    event.preventDefault();

    var palette = randomColor({
        count: numOfColors,
        hue: hue,
        luminosity: lumin
    });


    $.each(palette, function(index, value) {
        var color = value;
        var colorBox = $("<div><p>" + value.toUpperCase() + "</p></div>");
        colorBox.addClass("box").css({"background-color": color});
        $("#palette-display").append(colorBox);
    })

})