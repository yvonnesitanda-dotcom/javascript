// Javascript For Loop
// Loops are used to iterate something(Repeat something a number of times)
// Structure of the for loop
//1.for keyword followed by paranthesis
//2. initialization ; set the condition ; increment/decrement
//3. Body of the for loop

for(let i = 0 ; i <= 10 ; i++){
   console.log("The new value of i is:",i)
}

console.log("===================")
 

    // Create a for loop that is able to print out all the leap years from 2000 to 2026
    //on pdf check page 28
for (let year = 2000; year <= 2026; year++) {
    if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
        console.log(year);
    }

}

// Task
// Write a for loop to print all odd numbers from 1 to 19.
for (let odd=1 ; odd <=19 ; odd++){
   if(odd%2==1){
      console.log(odd)
   }
}
console.log("=======================================")


//Write a for loop to count down from 10 to 1 and print the numbers in the console.
for(let cd=10 ; cd>=1 ; cd--){
   console.log(cd)
}
console.log("===========================================")

//Write a for loop to find the largest number in the array: [10, 20, 4, 45, 99, 1].


//Write a for loop to print the multiplication table of 5 from 5 x 1 to 5 x 10.
