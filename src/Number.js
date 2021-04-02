//  3.Write a program to calculate the kinetic energy of a body with mass 'm' and volume 'v'.

// Formula : 0.5 * m * v * v

// const m = parseInt(("enter a value"));
// // const v = parseInt(prompt("enter a value"));

// let result = 0.5 * m * v * v;

// console.log("\nresult KI = :" + result);

// 4 . Write a program to convert Fahrenheit to Celsius. For Celsius to Fahrenheit
//  conversion use: T = 9*T/5 + 32 'T' is the temperature on the Celsius scale.

// const T = parseInt(prompt("enter a value"));

// let result = 9*T/(5+32);

// console.log(result);

// Calculate the area, perimeter of a s1.re of side 'a'. Also, calculate the surface area and the volume of a cube of side 'a'.

// const A= parseInt(("enter a value"));

// let Area = A*A;
// let perimeter = 4*A;
// let SurfaceArea = 6*A*A;
// let volume = A*A*A;

// console.log("\n Area:"+Area)
// console.log("\n  Area of Perimeter:"+perimeter)
// console.log("\n Surface Area:"+SurfaceArea)
// console.log("\n Volume:"+volume)

// Write a program to calculate sum of N natural digits, as input by the users?

// const n= parseInt(("enter a value"));

// let result = n*(n+1)/2

// console.log(result)

// Write a Program to Print N Odd Number in Descending Order.

//3. Write a JavaScript program that reverses a number.

function reversed(num) {
  num = parseFloat(num.toString().split("").reverse().join(""));

  return num;
}

console.log(reversed(123454));

//4. Write a Program to Print N Odd Number in Descending Order.

let num = parseInt("enter a value");

for (let i = 1; i <= num; i++) {
  let result = 2 * i - 1;
  console.log(result);
}

//  Write a JavaScript program to compute the sum of all digits that occur in a given string.

function sumofDigit(num) {
  let sum = 0;

  while (num) {
    let digit = num % 10;

    sum = sum + digit;

    num = (num - digit) / 10;
  }

  return sum;
}

console.log(sumofDigit(123568));
