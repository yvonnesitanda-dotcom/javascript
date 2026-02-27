// Comparison operators
// They usually evaluates to a boolean answer

let number1 = 5
let number2= 10
let number3= 20

console.log(number1==number2)
console.log(number1>=number2)
console.log(number1<=number2)
console.log(number1>number2)
console.log(number1<number2)
console.log(number2!=number2)


// Triple equal sign- Research in Javascript
// Is known as strict equality. It compares both the value and the data type of two operands.Two values are considered equal only if they have the same value and the same type.
let x=5
let y="5"
console.log(x===y) // strict equality- value and type
console.log(x==y) // loose equality- value only

// Logical operators are used to evaluate two or more conditions and they also give a boolean answer
// Logical AND(&&)- it evaluates to true if and only if all of the conditions/statements are true
console.log((number1 < number2) && (number2> number1))&& (number3>number2)

//logical OR(||) It evaluates to treus if one of the conditions is true.
console.log((number1 > number2)) ||
(number2> number1)

//Logical MOT (!) It is used to negate a condition/statement
console.log(number1<number2) 
