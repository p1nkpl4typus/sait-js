// DAY 2 NOTES
// MORNING

//LOOPS
// for (var i = 0; i <= 20; i++) {
//     if (i % 2 === 0) {
//         console.log(i + " is even.");
//     } else {
//         console.log(i + " is odd.");
//     }
// }

// var sum = 1;

// console.log("This is a While Loop");

// while (sum < 13) {
//     console.log("9 x " + sum + " = " + (9 * sum));
//     sum += 1;
// }

// console.log("This is a For Loop");

// for (var i = 1; i < 13; i++){
//     if (i === 6) {
//         console.log("I hate the number 6");
//         break;
//     }
//     console.log("9 x " + i + " = " + (9 * i));
// }

console.log("****************");

//ARRAYS
// var faveFood = ["Ice Cream", "Rouladen", "Pho", "Donuts", "Fondue"];
// console.log(faveFood);
// console.log("****************");
// console.log(faveFood.length);
// console.log("****************");
// console.log(faveFood[3] + " - This is indexed item 3");
// console.log("****************");
// faveFood[3] = "Asparagus";
// console.log(faveFood);
// console.log("****************");
// faveFood.push("Apples");
// console.log(faveFood);
// console.log("****************");
// for (var i = 0; i < faveFood.length; i++) {
//     console.log(faveFood[i]);
// }

//OBJECTS
var recipe = {
    recipeTitle: "Peanut Butter Sandwich",
    recipeDescription: "A peanuty classic! A nostalgic delight!",
    ingredients: ["2 slices of bread", "peanut butter"],
    directions: "Take bread and using butter knife, spread peanut butter liberally.",
    rating: 5,
    cookTime: 5,
    letsCook: function() {
        console.log("I'm hungry! Let's cook " + this.recipeTitle);
    }
};

console.log(recipe);

console.log("****************");

console.log(recipe["recipeTitle"]);
console.log("Cook Time: " + recipe.cookTime + " minutes.");

console.log("****************");

recipe.servings = 1;
recipe.rating = 3.8;
delete recipe.cookTime;

console.log(recipe);

console.log("****************");

var movies = [
    {title: "Harry Potter", rating: 5},
    {title: "Geostorm", rating: 3.8}
]

for (var i = 0; i < movies.length; i++) {
    var movie = movies[i];
    console.log("I give " + movie.title + " " + movie.rating + " stars");
}

console.log("****************");

function snippet(x) {
    console.log(x.recipeTitle + " serves " + x.servings + " person/people.");
}

snippet(recipe);

console.log("****************");

recipe.letsCook();


