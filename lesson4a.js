// Function with parameters
// Parameters are values that get past as arguements when we invoke a function
// They help us to create functions that can be reusable through out a program.

function greeting(name){
    console.log("Hello",name,"How have you been?")
}

greeting("Standa Yvonne")//Standa Yvonne is considered an arguement
// If we reuse
greeting("John James")
greeting("Treasure Mbijiwe")


// Below is a function with parameters to calculate the sum of two numbers
function addition (number1, number2){
    sum= number1 + number2
    console.log(number1 + number2)
    console.log("The sum of the numbers is:", sum)
}


addition(45,60)

// calculate the area of a triangle whose base is 20 and height is 12

function area(base, height){
    product= 0.5 * base * height
    console.log(0.5* base* height)
    console.log("The area is:",product,"cm\u00B2")
}

area(20,12)
area(90,60)

console.log("=================================")
// Find the simple interest given as 50000, rate as 5% and time as 8 years.

function simpleInterest(principle,rate,time){
    interest= (principle*rate*time)/100
    console.log(principle*rate*time)
    console.log ("The interest is:",interest)
}
simpleInterest(50000,5,8)