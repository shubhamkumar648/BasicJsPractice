// passing function as an argument


function multiply (num1 , num2) {

    return (num1*num2);
}


function substract(num1,num2 ) {
 

    return (num1-num2);

}


const add= (num1,num2)  => num1 + num2;

const subtract = (num1,num2) => num1 - num2;

// function calculator (num1,num2,operator) {

//     return  operator(num1, num2);
// }


//using es6 function

const calculator = (num1,num2,operator) => operator(num1,num2)


console.log(calculator(4,5,substract))
console.log(calculator(3,9,multiply))
console.log(calculator(12,9,add))

