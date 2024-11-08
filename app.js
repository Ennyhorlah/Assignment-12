// Convert to lowercase
const message = "Welcome to Javascript ES6!";
const lowerCasemessage = message.toLowerCase();

console.log(lowerCasemessage);     // Output: 'welcome to javascript es6!'
// Find the position of the word "Javascript"
const index = message.indexOf(Javascript);

console.log(index);     // Output: 10
// Replace "Javascript" with "ES6"
const newmessage = message.replace("Javascript", "ES6");

console.log(newmessage);      // Output: 'Welcome to ES6 ES6!'

// Arrow function with filter metthod
const numbers = [3, 6, 9, 12, 15, 18, 21];

const add_numbers = numbers.filter(num => num > 10);

console.log(add_numbers);     // Output: [12, 15, 18, 21]

//Map function

const items = ["apple", "banana", "cherry"];

const new_items = items.map(items => items.toUpperCase);

console.log(new_items);     // Output: ['APPLE', 'BANANA', 'CHERRY']

// Code using find and findIndex methods
const products = [{id: 1, name: "Laptop"}, {id: 2, name: "Phone"}, {id: 3, name: "Tablet"}];

const foundProduct = products.find(products => products.Phone);

console.log(foundProduct);    // Output: Phone

const found_Product = products.findIndex(products => products.$(id = 3));

console.log(found_Product);    // Output: Tablet


// Code using every and some methods
const ages = [21, 18, 45, 30];

const age_num = ages.every(ages => ages >= 18);

console.log(age_num);    // Output: true

const age_number = ages.some(ages => ages < 20);

console.log(age_number);   // Output: true


// Using the spread operator
const arr1 = [1, 2, 3];

const arr2 = [4, 5, 6];

const all_array = [...arr1, ...arr2];

console.log(all_array);   // Output: [1, 2, 3, 4, 5, 6]


// Using reduce method
const scores = [10, 15, 20, 25];

const sum_scores = scores.reduce(function (acc, curValue) {
    return acc + curValue
}, 0);

console.log(sum_scores);   // Output: 70


//Parameter
const greet = name ("Alisha");

function greet(name) {
    return ("Hello, [name]!");
} 

console.log(greet);  // Output: Hello, Alisha!

const name = "Javascript";
const greeting = "The length of the word '${name}' is 10 characters";

console.log(greeting);   // Output: The length of the word Javascript is 10 characters