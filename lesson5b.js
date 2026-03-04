//Arrow functions with parameters

const greet= (name)=>{
    console.log("Hello " + name + " How have you been?I trust you are good.")
}
greet("James");
greet ("Joseph");

console.log("================================")
// Example 2
// Below is function to find the area of a circle
const CircleArea= (pi, radius) =>{
    let area = pi* radius * radius 
    console.log("The area of the circle " + area + "cm\u00B2")
}

CircleArea(3.142,7)
CircleArea(3.142,28)

console.log("==========================")
// come up with your own example of an arrow function that utilises 3 parameters

const PersonUser= (firstname,secondname,thirdname) =>{
    let name = firstname + secondname + thirdname
    console.log(name)
}
PersonUser("Yvonne ", "Nekesa ", "Standa")
PersonUser("Jackson ", "Joel ", "Murunga")