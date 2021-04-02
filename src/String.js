// Write a program that converts the string into uppercase

const name = "hello";

console.log(name.toUpperCase());

// Write a program that reads two strings and append first string to the second. So if first string is Good second string is Morning , the program should print MorningGood

const str1 = "Good";
const str2 = "Morning".concat(str1);

console.log(str2);

// Program that reads string and count number of characters present in the string

const count = "NeoGcamp is best";

// console.log(count);

console.log(count.length);
console.log(count.charAt(7));
console.log(count.charAt(count.length - 1));

// Write a program that converts string like "124" to 124

const num = "124";

console.log(parseInt(num, 10));

// Write a program to delete all vowels from a string. Assume string is not more than 80 characters long

const strings = ["My Name is Shubham"];

const result = strings.map((string) => string.replace(/[aeiou]/g, ""));

console.log(result);

//using function

function Vowel(strings) {
  let input = strings.length;
  console.log(input);
  if (input >= 80) {
    return "character is more than 80";
  } else {
    return strings.map((string) => string.replace(/[aeiou]/g, ""));
  }
}

console.log(Vowel([" my rock rolla is shubhan"]));

// Write a program to check whether the string is alphanumeric or not , eg:batman@45 contains digit 45

// function aplhaNUmerric(str) {
//   var Exp = "/((^[0-9]+[a-z]+)|(^[a-z]+[0-9]+))+[0-9a-z]+$/i";

//   return Exp.match(str) ? true : false;
// }
// console.log(aplhaNUmerric("shubham@123"));
