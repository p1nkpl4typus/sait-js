var direction = 0;


function catWalk() {
    var img = document.getElementById('cat');
    var currentLeft = parseInt(img.style.left);

    if (currentLeft > (window.innerWidth - img.width)) {
        direction = 0;
        img.style.transform = "scaleX(-1)";
    }

    if (currentLeft <= 0) {
        direction = 1;
        img.style.transform = "scaleX(1)";
    }
    
    if (direction) {
        img.style.left = (currentLeft + 10) + "px";
    } else {
        img.style.left = (currentLeft - 10) + "px";
    }
}

setInterval(catWalk, 50);
