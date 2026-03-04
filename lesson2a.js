// Objects data types:
// An object in javascript is a data type that stores in form of key value pairs.

let person = {
    Name:"Yvonne Nekesa",
    Age : 70,
    isRegistered: true

};
console.log("The details of the person is :", person)

// First method is by use of square brackets
console.log(person["Age"])

// The second method is by use of the dot notation
console.log(person.Name)

// Check the data type
console.log(typeof(person))

//An array : This refers to a collection of items that are on indexes
let fruits= ["Mango", "Pineapple", "Apple", "Banana", "Melon", " Lemon", "Grapes"]
fruits.unshift("berries") // Add item on the list in the beginning
console.log("The entire array of fruits is;", fruits)
// To access the items of an array we use the index
console.log(fruits[3])

// you can slice items of an array
console.log(fruits.slice(2,5))


// Push
//Add to the end of an array
// Adds one or more elements at the end of an array
// Changes the original array
let fruiteez= ["apple", "banana"];

fruits.push("mango");

console.log(fruiteez);



console.log("==============================")
//pop
//Remove from the end of an array
//Removes the last element
//Changes the original array
//Returns the removed element
// Example
let fruitz = ["apple", "banana", "mango"];

let removed = fruits.pop();

console.log(fruitz);
console.log(removed);

console.log("=======================")

//Unshift
//Add to the beginning of an array
//Adds one or more elements at the start
// Changes the original array
// Examples
let fruitx = ["banana", "mango"];

fruits.unshift("apple");

console.log(fruitx);

console.log("======================")

//slice
//Copy part of an array
// Does NOT change the original array
// Returns a new array
//  Takes start index and end index (not included)
// Example
let fruitk = ["apple", "banana", "mango", "orange"];

let slicedFruits = fruits.slice(1, 3);

console.log(slicedFruits);
console.log(fruitk);



