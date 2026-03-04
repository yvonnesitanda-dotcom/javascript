// while loop
// Below is a simple syntax of the while loop
//1. Initialization of a variable
// 2. While keyword
//3. condition to be checked 
//4. body of the loop
// increment/decrement
  
let i=0;
while(i<=10){
    console.log(i);
    i++;
}

console.log("==============================")
// Come up with a js example of a map loop

let number = [ 1, 2 , 3 , 4 , 5 ]
let squares = number.map(num => num **2);

console.log(squares)

console.log("=================================")
const users = [

{ id: 1, name: 'Andrew', email: 'andrew@gmail.com' },

{ id: 2, name: 'Bob', email: 'bob@gmail.com' },

{ id: 3, name: 'Charlie', email: 'charlie@gmail.com' }

];

// Extract only the names into a simple string array

const userNames = users.map(user => user.name);

console.log(userNames);

// Output: ["Andrew", "Bob", "Charlie"]

// check the tasks at page 30

// Write a for loop to print all odd numbers from 1 to 19
for (let odd=1; odd<=19 ; odd++){
    if(odd%2==1){
        console.log(odd)
    }
}

console.log("===========================================")

