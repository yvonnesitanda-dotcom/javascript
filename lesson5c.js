//Exporting Modules
// We export Modules so that we can use / Utilise in other files/modules in our program

export const calculator= (x,y)=>{// Destructuring, obtaining
    let difference = x - y

    console.log("The difference of the two numbers is :", difference)
}

export const simpleInterest = ( principle ,rate ,time) =>{
    let si = ( principle * rate  *time)/100
    console.log ("The simple Interest is", si)
}

const bmi = ( weight , height)=>{
    let answer= weight/ (height**2)
    console.log ("The bmi is", answer)
};

export {bmi}