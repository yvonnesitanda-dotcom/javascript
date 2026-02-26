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

console.log("The entire array of fruits is;", fruits)
// To access the items of an array we use the index
console.log(fruits[3])

// you can slice items of an array
console.log(fruits.slice(2,5))