var submitBtn = document.getElementById("submit");
var lyricsDisplay = document.getElementById("lyrics");
var artistErr = document.getElementById("artistErr");
var titleErr = document.getElementById("titleErr");

submitBtn.addEventListener("click", function(event) {
    artistErr.style.display = "none";
    titleErr.style.display = "none";


    var artist = document.getElementById("artist").value;
    var title = document.getElementById("title").value;

    event.preventDefault();

    if (!artist) {
        artistErr.style.display = "block";
    }

    if (!title) {
        titleErr.style.display = "block";
    }

    var url = "https://api.lyrics.ovh/v1/" + artist + "/" + title;

    if (artist && title){
    fetch(url)
    .then(handleErrors)
    .then(function(res) {
        return res.json();
    })
    .then(function(data){
        var lyrics = data.lyrics;
        lyrics = lyrics.replace(/(?:\r\n|\r|\n)/g, '<br />'); //replacing newlines with line breaks


        var lyricBox = document.createElement("p");
        lyricBox.classList.add("lyric-wrap");
        lyricBox.innerHTML = lyrics;
        var lyricTitle = document.createElement("h2");
        lyricTitle.innerHTML = title + " by " + artist;

        lyricsDisplay.innerHTML = "";
        lyricsDisplay.appendChild(lyricBox);
        lyricsDisplay.insertBefore(lyricTitle, lyricBox);
    })
    .catch(displayErrors);

    function handleErrors(res){
        if(!res.ok) {
            throw Error(res.status)
        }
        return res;
    }

    function displayErrors(err){
        var songErr = document.createElement("div");
        songErr.classList.add("main-err");
        songErr.innerHTML = "<p>" + err + "</p><p>Song Not Found - Please Try a New Song</p>";
        lyricsDisplay.innerHTML = "";
        lyricsDisplay.appendChild(songErr);
    }
    }


})
