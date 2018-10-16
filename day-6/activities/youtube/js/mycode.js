var links = document.querySelectorAll("a");

for (var i = 0; i < links.length; i++){
    var link = links[i];
    var url = link.getAttribute("href");
    var img = document.createElement("img");
    img.setAttribute("src", youtube.generateThumbnailUrl(url));
    link.appendChild(img);
}


