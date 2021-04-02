// Find sum of an array and display the output . Example [10,4,5,2,5,6,9].

let arr1 = [1, 3, 4, 5, 7];

let result = arr1.reduce((a, b) => (a + b) / arr1.length);

console.log(result);

// Find average of an array and display the output.

let arr2 = [1, 4, 5, 6, 8, 3];

let median,
  total = 0;

for (let i = 0; i < arr2.length; i++) {
  total += arr2[i];
}
let avg = total / arr2.length;

console.log(avg);

// Find maximum and minimum of an array.

console.log(Math.min(...arr2));
console.log(Math.max(...arr2));

// Find Median and Mode of an array.
// Median : (N+1/2)th term.

// do later------
// median = arr2[i]+1/2;

console.log(median);

// Find sum of two arrays.

let array1 = [2, 3, 4, 5, 6];
let array2 = [3, 4, 5, 6, 7];

const SumofTwoArray = array1.map((arrChar, index) => arrChar + array2[index]);

console.log(SumofTwoArray);

// Find number of constants and vowels in a string.

function getCount(str) {
  let VowelCount = 0;
  let vowels = ["a", "e", "i", "o", "u"];
  for (let Char of str) {
    if (vowels.includes(Char)) {
      VowelCount++;
    }
  }

  return VowelCount;
}

console.log(getCount("shubham"));

//// Find number of constants and vowels in a string.
// second method

function Vowelcount(str) {
  let vowelMatch = str.match(/[aeiou]/gi);

  if (vowelMatch) {
    return vowelMatch.length;
  } else {
    return 0;
  }
}

console.log(Vowelcount("rahula"));
