// task 1 ; sum of all digits of a number
// let userNumber = prompt("Enter a number"); 

// let sum = 0;

// for( let i = 0; i < userNumber.length; i++ ) {

//    sum = parseInt(userNumber[i]) + sum;
// }
// console.log(sum);

 
// task 2 : sum of range of 2 numbers

// let firstNum = +prompt("Enter first number");
// let secondNum = +prompt("Enter second number");
// let sum = 0;

// for( let i = firstNum ; i <= secondNum; i++)   {
//    sum += i;
// }

// console.log(sum);


// task 3 average

// let numbers = [12 , 13 , 15 , 18 , 19]
// let Sum = 0;
// let average = "";
// for ( let i = 0; i < numbers.length; i++) {
//     Sum = Sum + numbers[i];
//     average = Sum / numbers.length;
// }
// console.log(average)

// task 4 compare strings by count of characters

// let stringFirst = prompt("Enter first string");
// let stringSecond = prompt("Enter second string");
// if(stringFirst.length == stringSecond.length)   {
//    console.log("equal")
// } else {
//    console.log("not equal")
// }


// task 5 name -> eamn

let value = prompt("Enter a string");
let swapping = value[value.length - 1] + value.slice(1, value.length -1) + value[0];
console.log(swapping);


