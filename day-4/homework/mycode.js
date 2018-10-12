let quoteBlock = document.getElementById("quote");
let author = document.getElementsByTagName("cite")[0];
let nextQuote = document.getElementById("next");
let prevQuote = document.getElementById("back");
let currentIndex = 0;

let quotes = [
    {pos: 0, line: "<p>People are like music. Some speak the truth, and others are just noise.</p>", author: "- Bill Murray (start)"},
    {pos: 1, line: "<p>Follow your passion. Stay true to yourself. Never follow someone else’s path unless you’re in the woods and you’re lost and you see a path. By all means, you should follow that.</p>", author: "- Ellen DeGeneres (quote 2)"},
    {pos: 2, line: "<p>Love what you do. Get good at it. Competence is a rare commodity in this day and age.</p>", author: "- Jon Stewart (quote 3)"},
    {pos: 3, line: "<p>Laughter rises out of tragedy, when you need it the most, and rewards you for your courage.</p>", author: "- Erma Bombeck (quote 4)"},
    {pos: 4, line: "<p>Tomorrow is often the busiest day of the week.</p>", author: "- Spanish Proverb (end)"}
]

function changeQuote() {
    quoteBlock.innerHTML = quotes[currentIndex].line;
    author.innerHTML = quotes[currentIndex].author;
}

function testFunction(startPos) {
    for (var i = startPos; i < quotes.length; i++){
    } 
    console.log(currentIndex);
    changeQuote();
}

function autoPlay() {
        setInterval(function(){
            currentIndex >= quotes.length-1 ? currentIndex = 0 : currentIndex++;
            testFunction(currentIndex)
        }, 2000);
    }

// autoPlay();


function getNext() {
    if (currentIndex === 0) {
        currentIndex = 1;
    }

    if (currentIndex < 5) {
        changeQuote();
        currentIndex++;
    } 

    if (currentIndex === 5) {
        currentIndex = 4;
    }
}

function getPrev(){
    if (currentIndex === 4) {
        currentIndex = 3;
    }

    if (currentIndex > -1) {
        changeQuote();
        currentIndex--;        
    }

    if (currentIndex === -1) {
        currentIndex = 0;
    }
}

nextQuote.addEventListener("click", getNext);
prevQuote.addEventListener("click", getPrev);
