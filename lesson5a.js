//Arrow Functions
// This is a function that was introduced in the ECMA Script 6 and they give us the latest modern way of defining functions in compact manner.
// At times , arrow functions can bs said to be anonymous functions 
// This is because they use the names of the variables they are contained in.

const sayHello=()=>{
    console.log("This is an arrow Function")
}


sayHello();

console.log("==================================")

// Create an arrow function that is able to find a product of three numbers
const product=()=>{
    let num1=3
    let num2= 4
    let num3=5
    answer=num1*num2*num3
    console.log("This is the product:",answer)
}
product()