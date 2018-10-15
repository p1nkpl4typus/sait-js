var result = 0;
var quiz = document.geoQuiz;
var submitBtn = quiz.submit;

console.log(submitBtn);

function scoreQuiz(event) {
    var qOne = quiz.question1.value.toUpperCase();
    var qTwo = quiz.capital.value;
    var qThree = Number(quiz.question3.value);
    var qFour = quiz.river.value;
    var qFive = quiz.question5.value;

    console.log(qOne, qTwo, qThree, qFour, qFive);

    event.preventDefault();

    if (qOne === "ASIA") {
        result++;
        console.log(result);
    }

    if (qTwo === "Baku") {
        result++;
        console.log(result);
    }

    if (qThree === 7) {
        result++;
        console.log(result);
    }

    if (qFour === "The Nile") {
        result++;
        console.log(result);
    }

    if (qFive == "true") {
        result++;
        console.log(result);
    }
    console.log(result);
}

submitBtn.addEventListener("click", scoreQuiz);
