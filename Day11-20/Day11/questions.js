// //Create an array and using the for loop take user input and store in this array.

//create an empty array
// let data = [];

// // ask how many items the user wants to enter
// let count = parseInt(prompt("How many items do you want to enter?"));

// // loop to take inputs
// for (let i = 0; i < count; i++) {
//   let item = prompt("Enter item " + (i + 1) + ":");
//   data.push(item);
// }

// // show the stored data
// console.log("You entered: ", data);
// alert("You entered: " + data.join(", "));

// let numbers = []; // empty array to store numbers

// while (true) {
//   let input = prompt("Enter a number (enter 0 to stop):");
//   let num = parseFloat(input);

//   // stop if user enters 0
//   if (num === 0) {
//     break;
//   }

//   // only add valid numbers
//   if (!isNaN(num)) {
//     numbers.push(num);
//   } else {
//     alert("Please enter a valid number!");
//   }
// }

// console.log("Numbers you entered:", numbers);
// alert("Numbers you entered: " + numbers.join(", "));


// given array
// let numbers = [5, 10, 23, 40, 50, 77, 100, 33];

// // filter numbers divisible by 10
// let divisibleByTen = numbers.filter(num => num % 10 === 0);

// // show the results
// console.log("Original array:", numbers);
// console.log("Numbers divisible by 10:", divisibleByTen);

// alert("Numbers divisible by 10: " + divisibleByTen.join(", "));


// given array of numbers
let numbers = [2, 5, 7, 10, 12];

// create a new array with squares of each number
let squares = numbers.map(num => num * num);

// show the results
console.log("Original numbers:", numbers);
console.log("Squares:", squares);

alert("Squares: " + squares.join(", "));

// // ask user for a number
// let n = parseInt(prompt("Enter a number to find its factorial:"));

// // create an array from 1 to n
// let numbers = [];
// for (let i = 1; i <= n; i++) {
//   numbers.push(i);
// }

// // use reduce to calculate factorial
// let factorial = numbers.reduce((acc, curr) => acc * curr, 1);

// console.log(`Factorial of ${n} is: ${factorial}`);
// alert(`Factorial of ${n} is: ${factorial}`);
