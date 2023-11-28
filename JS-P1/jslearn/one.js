//wap given number is even or odd number
var prompt = require('prompt-sync')();

let num = prompt("Enter Number:")

if(num % 2 ==0){
    console.log("Given Number is Even Number:")
}
else{
    console.log("Given Number is Odd Number:")
}