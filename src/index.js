// -------------excercise1
// function sum(num1, num2, num3, num4, num5) {
//   let sum = num1 + num2 + num3 + num4 + num5;

//   // console.log("\nenter a number num1:" + num1)
//   // console.log("\nenter a number num2:" + num2)
//   console.log("\n total sum is" + sum);
// }

// sum(5, 13, 7, 21, 48);
// let num;
// if (num % 2 === 0) {
//   console.log("even");
// } else {
//   console.log("odd");
// }

// --------------excercise2
// const num = prompt("enter a number")

//   if(num % 2 ===0) {

//     console.log("even")
//   }

// else{
//   console.log("odd")
// }

// -------------------excercise3

// function GreatestNo(num1, num2, num3) {
//   if (num1 > num2 && num1 > num3) {
//     console.log("num 1 is greatest no");
//   } else if (num2 > num1 && num2 > num3) {
//     console.log("num 2 is greatest no");
//   } else {
//     console.log("num3 is greatest");
//   }
// }

// GreatestNo(8, 23, 17);

/// excercise 4

// function MinimumNo(num1, num2, num3) {
//   if (num1 < num2 && num1 < num3) {
//     console.log("num 1 is Minimum no");
//   } else if (num2 < num1 && num2 < num3) {
//     console.log("num 2 is minimum no");
//   } else {
//     console.log("num3 is minimum");
//   }
// }

// MinimumNo(35, 29, 46);

/// excercise5

// function Month (month, year) {
//   var newDate = new Date(year, month, 0).getDate();
//   return newDate;
// };

// console.log(Month(4, 2020));

// excercise6

// for (let i = 1; i <= 100; i++) {
//   if (i % 3 === 0 && i % 5 === 0) {
//     console.log("FizzBuzz");
//   } else if (i % 3 === 0) {
//     console.log("Fizz");
//   } else if (i % 5 === 0) {
//     console.log("Buzz");
//   }
//   console.log(i);
// }

// excercise7

// for (let i = 1; i <= 5; i++) {
//   let star = "*";
//   for (let j = 1; j < i; j++) {
//     star += "*";
//   }

//   console.log(star);
// }

// Write a program to take a number input from user and print multiplication table 12 times for that number.

// let number = "enter a number";

// for (let i = 1; i <= 12; i++) {
//   let result = number * i;

//   console.log(`${number} * ${i} = ${result}`);

// }

// 0

// Write a program to take an input from a user and find its Factorial. Example: Factorial of 5 is 120

// let num = parseInt(prompt("enter a num"));

// if (num < 0) {
//   console.log("factoial of negative  number is not exist");
// } else if (num === 0) {
//   console.log("factoial of negative  number is 1"`${num}`);
// } else {
//   let fact = 1;
//   for (let i = 1; i <= num; i++) {
//     fact *= i;
//   }
//   console.log(fact);
// }

// Write a program to return a Fibonacci series : 0,1,1,2,3,5,8,13,21....

// let number = parseInt(prompt("enter a number"));

// let num1, num2, nextTerm;

// num1 = 0;
// num2 = 1;

// for (let i = 1; i <= number; i++) {
//   console.log(num1);
//   nextTerm = num1 + num2;
//   num1 = num2;
//   num2 = nextTerm;
// }

// -----------second method

// let numbers = parseInt(prompt("enteranumber"))

// let a=0;
// let b=1;
// let num3;

// console.log(a);
// console.log(b)

// num3 = a+b

// while ( num3 <=numbers) {
//   console.log(num3);

//     num3= a+b;
//     a=b;
//     b=num3

// }

// Write a Program to take a number input from user and find if the number is Prime or not.

// let number = prompt("enter a number");

// let isPrime = true;

// if (number === 1) {
//   console.log("neither a prime nor a composite");
// } else if (number > 1) {
//   for (let i = 2; i < number; i++) {
//     if (number % i === 0) {
//       isPrime = false;
//       break;
//     }
//   }

//   if (isPrime) {
//     console.log("number is prime");
//   } else {
//     console.log("not prime number");
//   }
// }

//Write a program to take a day as an input and determine whether it is a weekday or weekend. Example: Tuesday is weekday.

// let day = prompt("enter a day");

// let Day = prompt("enter a day");
// switch (Day) {
//   case "mon":
//     console.log("weekdays");
//     break;

//   case "tue":
//     console.log("weekdays");
//     break;

//   case "wed":
//     console.log("weekdays");
//     break;

//   case "thu":
//     console.log("weekdays");
//     break;

//   case "fri":
//     console.log("weekdays");
//     break;

//   default:
//     console.log("weekend");

// }
