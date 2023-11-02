// example 1
// 16-1 Create an array with the different pet types bird, cat, dog.
// Initialise it to the variable pets. Console log pets.

var pets = ["bird", "cat", "dog"]; // array

console.log(pets);
console.log(pets[0]);
console.log(pets[1]);
console.log(pets[2]);


// example 2
// 16-2 Create an array with the different cellphone types: iphone
// and samsung and initialise it to the variable cell phones
// console log out the cell phones

var cellPhones = ["iphone", "samsung"];

console.log(cellPhones);
console.log(cellPhones[1]); // have to put 1 as it start from 0;


//example 3
// 16-3 Create an empty array called school program. Then provide the
// elements needed inside the array in this specific order: computer
// science, business, arts.
// Then console log the school programs

var schoolPrograms = [];

schoolPrograms[0] = "computer science";
schoolPrograms[1] = "business";
schoolPrograms[2] = "arts";

console.log(schoolPrograms);
console.log(schoolPrograms[1]);


// example 4
/** 16-4
 * Create an empty array called supplies
 * Then provide the elements needed inside the array
 * in this specific order;
 * erasers, <empty item>, pens, <empty item>, paper
 * Then console log the supplies.
 */

var supplies = [];
supplies[0] = "erasers";
supplies[2] = "pens";
supplies[4] = "paper";

console.log(supplies);


// example 5
/** 16-5
 * Create an array with the different pet types;
 * bird, cat, dog
 * Then remove the last item in the array using pop
 * Console log out pets.
 */

var petTypes = ["bird", "cat", "dog"];
console.log(petTypes);

petTypes.pop();
console.log(petTypes);


// example 6:
var dogs = new Array();

dogs[0] = "German Shepard";
dogs[1] = "Husky";
dogs[2] = "Chiwawa";

console.log(dogs);


// example 7: take the strings in the order
var dogs = []; 

dogs[3] = "German Shepard"; // do not have to put 0 position as started
dogs[1] = "Husky"; // will leave empty place for position 0
dogs[2] = "Chiwawa";

console.log(dogs);

// example 8 take one specific letter
var food = [
    "hot dog", //like english grammar - have more things to add by seperating","
    "salad", // take the letter "L" - indiviual letter
    "chips"
]

console.log(food);
console.log(food[1]);
console.log(food[1][2]);


// example 9 grab all strings with comma
var food = [
    "hot dog", 
    "salad",
    "chips"
]

console.log(food.toString()); // just grab all information with the regular spaces


// example 10 grab all infotmation without comma
var food = [
    "hot dog", 
    "salad",
    "chips"
] // show without comma

console.log(food.join(" ")); // grab all the information without comma


// examaple 11 - multi-dimensional array
var shoppingList = [
    junkFood = ["chips", "crackers", "cookies"], // position 0
    drinks = ["coffee", "cola", "orange", "milk"], // position 1
]

console.log(shoppingList[1][2]); // second one + third one


// example 12 mergin 2 arrays into 1
var houesOne = ["laptop", "oven", "bed"];
var houseTwo = ["jacket", "desktop", "paper"];

var stuff = houesOne.concat(houseTwo) // concat is concatenate 2 or more things together

console.log(stuff);


// new line characters \n - seperate into different lines
var textOne = "Welcome to Canada";
console.log("textOne:", textOne);

var textTwo = "Welcome\nto\nCanada"; // seperate into 3 lines
console.log("textTwo:", textTwo);


// tabs (tabulars) \t - putting the spaces between words
var textOne = "Welcome to Canada";
console.log("textOne", textOne);

var textTwo = "Welcome\tto\tCanada"; // tab for space
console.log("textTwo", textTwo);