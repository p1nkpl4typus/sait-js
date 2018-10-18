// for (var i = 0; i < 10; i++) {
//     console.log(i); // cycles through 0 - 9 and displays each number
// }
// console.log(i); // displays 10

// for (let i = 0; i < 10; i++) {
//     console.log(i); //cycles through 0-9 and displays each number
// }
// console.log(i); // i is not defined

let condition = true;

if (condition) {
    let a = "Zeta";
    console.log(a);
}

const arr = [1, 2, 3];
const obj = { id: 0, name: "Alpha"};

arr.push(4);
obj.id = 2;

console.log(arr);
console.log(obj);

const funcs = [];

for (let i = 0; i < 3; i++) {
    funcs.push(function() {
        console.log(i);
    });
}

for (let j = 0; j < funcs.length; j++) {
    funcs[j]();
}


//ORIGINAL
// const sum = function(num1, num2) {
//     return num1 + num2;
// }

// const fibonacci = function(n) {
//     if (n < 3) {
//         return 1;
//     }
//     return fibonacci (n - 1) + fibonacci (n - 2);
// }

//REFACTORED
const sum = (num1, num2) => num1 + num2;

console.log(sum(3,4));

const fibonacci = n => {
    if (n < 3) {
        return 1
    }
    return fibonacci (n - 1) + fibonacci (n - 2);
}

console.log(fibonacci(9));

//Immediately Invoked Arror Function
(() => console.log("hello"))();

//****

const multiply = (a, b = 1) => {
    if(!a) {
        throw Error("Please add at least one number!")
    } else {
    return a * b;
    }
}

console.log(multiply(2, 10));
console.log(multiply(10));
// console.log(multiply());

let array = [2, 3,4, 1];

for (let value of array) {
    console.log(value);
}

// SPREAD/REST

const product = (...numbers) => numbers.reduce((currentProduct, number) => currentProduct * number, 1);

console.log(product(3, 4, 5));
console.log(product(3, 4, 5, 6));
console.log(product(1, 2, 3, 4, 5, 6));

const join = (array1, array2) => array1 = [...array1, ...array2];

console.log(join([1, 2, 3], [4, 5, 6]));

// TEMPLATE LITERALS

// `` - backtick 

const user = {
    name: 'Cody',
    loginCount: 1,
    goldStatus: true
};

const className = 'container';

const html = `<div class="${className}"><h2>Welcome${(user.goldStatus ? ' to our Gold Status Member' : ', ')} ${user.name}!</h2><p>Today is ${new Date()}</p><p>You have logged in ${++user.loginCount} times.</p></div>`

document.getElementById('target').innerHTML = html;

// DESTRUCTURING AN OBJECT

const myEmployee = {
    active: true,
    department: 'Engineering'
   };

function isActiveEngineer(employee) {
    const {active, department} = employee;
    return department === 'Engineering' && active;
   };

console.log(`Is myEmployee active? ${isActiveEngineer(myEmployee)}`);

//FOR EACH

const trips = [
    { mph: 10, hours: 3 },
    { mph: 30, hours: 2 },
    { mph: 25, hours: 4 }
   ];

trips.forEach((trip) => console.log(trip.mph * trip.hours));

// for (let i = 0; i < trips.length; i++) {
//     console.log(trips[i].mph * trips[i].hours);
//    }


//EVERY & SOME
console.log("*******************");
   
const availableLaptops = [
    { name: 'MacBook', RAM: 8 },
    { name: 'Asus', RAM: 32 },
    { name: 'Lenovo', RAM: 16 },
    { name: 'HP', RAM: 4 }
   ];

const inventoryCheck = availableLaptops.every(laptop => laptop.RAM >= 16);
console.log(inventoryCheck);

const anyLaptop = availableLaptops.some(laptop => laptop.RAM >= 16);
console.log(anyLaptop);

console.log("*******************");

//FILTER
const users = [
    { username: 'ryan10', active: true },
    { username: 'morgan', active: false }
   ];
   const activeUsers = users.filter(user => user.active);
   console.log(activeUsers);

// Create an array of groceries
const groceries = [
    { name: 'bananas', aisle: 'produce', price: 2 },
    { name: 'flour', aisle: 'baking', price: 5 },
    { name: 'avocados', aisle: 'produce', price: 4},
    { name: 'lettuce', aisle: 'produce', price: 5 },
    { name: 'olive oil', aisle: 'baking', price: 10 },
    { name: 'shampoo', aisle: 'beauty', price: 12 }
   ];

const produceLessThan5 = groceries.filter(produce => produce.aisle === 'produce' && produce.price < 5);
// Output the produce
console.log(produceLessThan5);

//MAP
const trips2 = [
    { miles: 5, hours: 1},
    { miles: 6, hours: 0.5},
    { miles: 4, hours: 2 }
   ];

const speeds = trips2.map(trip => trip.miles / trip.hours);
console.log(speeds);

speeds.forEach(speed => console.log(`${speed} miles per hour`));

//FIND

// An array of posts
const posts = [
    { id: 23, title: 'Becoming an ES6 Wizard', body: 'Ille vivere. Ut ad te ...' },
    { id: 29, title: 'JavaScript Pro Tips', body: 'Pellentesque euismod ...' },
    { id: 31, title: 'Acing your next JS interview', body: 'Lorem ipsum dolor sit amet...'}
   ];

// Find the post with ID 29
const currentId = 29;

const currentPost = posts.find(post => post.id === currentId);

console.log("*******************");
console.log(currentPost.title);
console.log(currentPost.body);

// REDUCE

const transactions = [ 5, 10, 15 ];

const sum2 = transactions.reduce((currentSum, transaction) => currentSum + transaction, 0);

console.log(sum2); // 30







   
   
