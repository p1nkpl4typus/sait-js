let quoteBlock = document.getElementById("quote");
let author = document.getElementsByTagName("cite")[0];
let nextQuote = document.getElementById("next");
let prevQuote = document.getElementById("back");
let tweet = document.getElementById("twitter");
let currentIndex = 0;

let quotes = [
    {line: "People are like music. Some speak the truth, and others are just noise.", author: "- Bill Murray"},
    {line: "Follow your passion. Stay true to yourself. Never follow someone else’s path unless you’re in the woods and you’re lost and you see a path. By all means, you should follow that.", author: "- Ellen DeGeneres"},
    {line: "Love what you do. Get good at it. Competence is a rare commodity in this day and age.", author: "- Jon Stewart"},
    {line: "Laughter rises out of tragedy, when you need it the most, and rewards you for your courage.", author: "- Erma Bombeck"},
    {line: "Tomorrow is often the busiest day of the week.", author: "- Spanish Proverb"}
]

function changeQuote(startPos, index) {
    for (var i = startPos; i < quotes.length; i++){
    } 
    quoteBlock.innerHTML = "<p>" + quotes[index].line + "</p>";
    author.innerHTML = quotes[index].author;
}

function autoPlay() {
    setInterval(function(){
        currentIndex >= quotes.length-1 ? currentIndex = 0 : currentIndex++;
        changeQuote(0, currentIndex);
    }, 30000);
}

function getNext() {
    currentIndex >= quotes.length-1 ? currentIndex = 0 : currentIndex++;
    changeQuote(0, currentIndex);
}

function getPrev(){
    currentIndex <=0 ? currentIndex = quotes.length-1 : currentIndex--;
    changeQuote(0, currentIndex);
}

nextQuote.addEventListener("click", getNext);
prevQuote.addEventListener("click", getPrev);

autoPlay();

tweet.addEventListener("click", () => tweet.setAttribute("href", `https://twitter.com/intent/tweet?text="${quotes[currentIndex].line}" ${quotes[currentIndex].author}`));
