let num = prompt("enter a number");

let a = 0;
b = 1;
let nextTerm;

for (let i = 1; i <= num; i++) {
  console.log(a);
  nextTerm = a + b;

  a = b;
  b = nextTerm;
}
