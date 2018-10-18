var quiz = document.geoQuiz;
var reloadBtn = document.getElementById("again");
var submitBtn = quiz.submit;


function scoreQuiz(event) {
    var result = 0;
    var score = document.getElementById("score");

    var ansOne = document.getElementById("answer-one");
    var ansTwo = document.getElementById("answer-two");
    var ansThree = document.getElementById("answer-three");
    var ansFour = document.getElementById("answer-four");
    var ansFive = document.getElementById("answer-five");

    var errOne = document.getElementById("err1");
    var errTwo = document.getElementById("err2");
    var errThree = document.getElementById("err3");
    var errFour = document.getElementById("err4");
    var errFive = document.getElementById("err5");

    var divQuiz = document.getElementById("quiz");
    var divResult = document.getElementById("quiz-result");

    var qOne = quiz.question1.value
    var qOneUpperCase = qOne.toUpperCase();
    var qTwo = quiz.capital.value;
    var qThree = Number(quiz.question3.value);
    var qFour = quiz.river.value;
    var qFive = quiz.question5.value;

    var validated = true;

    errOne.style.display = "none";
    errTwo.style.display = "none";
    errThree.style.display = "none";
    errFour.style.display = "none";
    errFive.style.display = "none";

    if (!qOne){
        event.preventDefault();
        errOne.style.display  = "block";
        validated = false;
    }

    if (!qTwo) {
        event.preventDefault();
        errTwo.style.display = "block";
        validated = false;
    }

    if (qThree <= 0) {
        event.preventDefault();
        errThree.style.display = "block";
        validated = false;
    }

    if (!qFour) {
        event.preventDefault();
        errFour.style.display = "block";
        validated = false;
    }

    if (!qFive) {
        event.preventDefault();
        errFive.style.display = "block";
        validated = false;
    }

    if (validated && qOneUpperCase === "ASIA") {
        result++;
    }

    if (validated && qTwo === "Baku") {
        result++;
    }

    if (validated && qThree === 7) {
        result++;
    }
    
    if (validated && qFour === "The Nile") {
        result++;
    }

    if (validated && qFive === "True") {
        result++;
    }

    if(validated) {
        event.preventDefault();
        score.innerHTML = result + " out of 5 - " + ((result / 5) * 100) + "%"; 
        ansOne.innerHTML = qOne;
        ansTwo.innerHTML = qTwo;
        ansThree.innerHTML = qThree;
        ansFour.innerHTML = qFour;
        ansFive.innerHTML = qFive;
        divResult.style.display = "block";
        divQuiz.style.display = "none";
        window.scrollTo(0,0);
    }
}

submitBtn.addEventListener("click", scoreQuiz);

reloadBtn.addEventListener("click", function(){
    window.location.reload(true);
})
