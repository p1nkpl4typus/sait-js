var links = $('a');

links.each(function(){
    var url = $(this).attr("href");
    var img = $("<img src=" + youtube.generateThumbnailUrl(url) + ">");
    $(this).append(img);
})
