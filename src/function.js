//1. Given a and b, your function should return the value of ab

function Power(a, b) {
  var result = parseInt(Math.pow(a, b));
  // var result = Math.pow(a, b);

  return result;
}

console.log(Power(2, 3));

//2. Given length of a regular hexagon, your function should return area of the hexagon.

function areaofHexagon(num) {
  // var result = parseFloat((6 * (num * num)) / (4 * Math.tan(Math.PI / 6)));
  var result = parseFloat(3 * ((Math.sqrt(3) * (num * num)) / 2));

  return result;
}

console.log(areaofHexagon(10));

//3. Given a sentence, your functions should return the number of words in the sentence.

//  function Numberofwords(word) {

//   var result = length(word)

//   return result;

//  }

//  console.log(Numberofwords())

//4.Given n numbers, your function should return the minimum of them all. The number of parameters won't be accepted from user.

function minNumber(...num) {
  var result = Math.min(...num);

  return result;
}

console.log(minNumber(5, 24, 3, 4, 9, 11));

//5. Given n numbers, your function should return the maximum of them all. The number of parameters won't be accepted from user.

function maxNumber(...num1) {
  var result = Math.max(...num1);

  return result;
}

console.log(maxNumber(33, 5, 55, 67, 89, 102, 21));

// -------------------Medium level------------------------------

// 1 Given an array, your function should return the length of the array.
// Example:
// Input: arrayLength([1,5,3,7,8]) ––> Output: 5

function arrayLength(arr) {
  return arr.length;
}

console.log(arrayLength([1, 2, 7, 11, 13, 19]));

//2. Given an array and an item, your function should return the index at which the item is present.
//  example: Input: indexOf([1,6,3,5,8,9], 3) ––> Output: 2

function arrayIndex(arr, item) {
  return arr.indexOf(item) >= 0 ? arr.indexOf(item) : false;
}

console.log("\n excercise 2 output is :" + arrayIndex([1, 6, 3, 5, 8, 9], 3));

// yessssss i can do it

/// using es6
const arrayIndex2 = (arr, item) => {
  return arr.indexOf(item);
};
console.log(arrayIndex2([1, 6, 3, 5, 8, 9], 5));
