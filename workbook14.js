// 14 Arrays
var pets = ["bird", "cat", "dog"];

console.log(pets);

// 14-2
var cellPhone = ["iphone", "samsung"];
console.log(cellPhone);

// 14-3
var schoolProgram = [];

schoolProgram[0] = "computerScience";
schoolProgram[1] = "business";
schoolProgram[2] = "arts";

console.log(schoolProgram);

// 14-4
var supplies = [];

supplies[0] = "erasers";
supplies[2] = "erasers";
supplies[4] = "erasers";

console.log(supplies);

// 14-5
var differentPetTypes = ["bird", "cat", "dog"];
differentPetTypes.pop(); // .pop - remove the last element

console.log(differentPetTypes);

// 14-6
var schoolPrograms = ["computer science", "business", "art"];
schoolPrograms.pop();

console.log(schoolPrograms);

// 14-7
var schoolPrograms = ["computer science", "business", "arts"];
schoolPrograms.push("medicine");

console.log(schoolPrograms);

// 14-8
var schoolPrograms = ["computer science", "business", "arts"];
schoolPrograms[1] = "medicine";

console.log(schoolPrograms);

// 14-9
var cars = new Array("Toyota", "Ford", "BMW", "Nissan");

console.log(cars);

// 14-10
var starbuksHotDrinks = new Array("Hot Chololate", "Caramel Apple Spice", "Steamed Milk", "Vanilla Steamer");

console.log(starbuksHotDrinks);

// 14-11
var schoolPrograms = [];

schoolPrograms[0] = ["Computer Systems (Database)", "Computer Systems (Human Computer Interface)", "Computer Systems (Network Security Administration)"];
schoolPrograms[1] = "business";
schoolPrograms[2] = "arts";

console.log(schoolPrograms);

// 14-12
var schoolPrograms = ["computer science", "business", "art"];
var schoolProgramsTwo = ["medicine", "contruction"];

console.log(schoolPrograms.concat(schoolProgramsTwo));

// 14-13
var schoolProgramsOne = ["computer science", "business", "arts"];
var schoolProgramsTwo = ["medicine", "condtruction"];

var totalSchoolPrograms = schoolProgramsOne.concat(schoolProgramsTwo);

console.log(totalSchoolPrograms);
console.log(totalSchoolPrograms.slice(1,4));

// 14-14
/**
 * @desc change the position of array
 * @param {*} arr is the array
 * @returns the new position of array
 */
function swap(arr) {
    var hold = arr[0];
    arr[0] = arr[1];
    arr[1] = hold;
    return arr;
}

var item = ["hello", "world"];

console.log(item); // ['hello', 'world']
console.log(swap(item)); // ['world','hello']

// 14-15
/**
 * @desc check the types of fruits in the basket
 * @param {*} arrayFruits is the fruits
 * @param {*} size is the number of fruits
 */
function fruitBasket(arrayFruits,size) {
    var sentence ="";
    sentence = `The number of fruits in the basket is ${size}.\nThe types of fruits in the basket are: ${arrayFruits[0]}, ${arrayFruits[1]}, and ${arrayFruits[2]}.`;
    console.log(sentence);
}

var fruits = ["apple", "oranges", "bananas"];
fruitBasket(fruits, fruits.length);

// 14-16
/**
 * @desc check if it is the right planet
 * @param {*} arrayPlanets is the planet that I am located
 * @param {*} size is the size of the planet
 * @returns 
 */
function space(arrayPlanets,size) {
    if(arrayPlanets[2] == "Earth" && size == 9) {
        return "You are on planet " + arrayPlanets[2];
    }
    return "Not the right planet.";
}

var planets = ["Mercury", "Venus", "Earth", "Mars", "Jupiter", "Saturn", "Uranus", "Neptunr", "Pluto"];
var sentence = space(planets, planets.length);

console.log(sentence); // You are on planet Earth