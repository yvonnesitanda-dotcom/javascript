let distance= 78
if (distance<=100){
    console.log("You are to pay 5 USD")
}
else if(distance> 101 && distance<=500){
    console.log("You are to pay 10 USD")
}
else if( distance>501 && distance<= 1000){
    console.log("You are to pay 20 USD")
}
else if (distance>=10001){
    console.log("You are tpo pay 40 USD")
}
else{
    console.log("ERROR")
}