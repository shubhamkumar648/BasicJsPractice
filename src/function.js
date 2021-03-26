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
