document.bgColor = "papayawhip";

console.log(navigator.userAgent);

console.log(navigator.vendor);

console.log(navigator.platform);


function success(position) {
    var latitude = position.coords.latitude;
    var longitude = position.coords.longitude;
    document.write(latitude, longitude);
}

function geoError(errorObj) {
    alert("Uh oh, something went wrong");
}

if (typeof navigator.geolocation != "undefined") {
    navigator.geolocation.getCurrentPosition(success, geoError);
} else {
    alert("This browser can not provide location.");
}

console.log(screen.height);
console.log(screen.width);
console.log(screen.colorDepth);
console.log(screen.orientation);




