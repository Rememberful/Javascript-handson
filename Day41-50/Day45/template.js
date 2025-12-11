// ===========================
// 1. IIFE (Immediately Invoked Function Expression)
// ===========================
(function () {
  console.log("IIFE runs immediately!");
})();

// ===========================
// 2. Array Destructuring
// ===========================
const numbers = [10, 20, 30];

const [a, b, c] = numbers;
console.log(a, b, c); // 10 20 30

// Destructuring with rest
const [x, ...restNums] = [1, 2, 3, 4];
console.log(x);         // 1
console.log(restNums);  // [2, 3, 4]

// ===========================
// 3. Object Destructuring
// ===========================
const user = { name: "Alice", age: 25, country: "USA" };

// Basic
const { name, age } = user;
console.log(name, age); // Alice 25

// Renaming + rest
const { country: ctry, ...restProps } = user;
console.log(ctry);      // USA
console.log(restProps); // { name: "Alice", age: 25 }

// ===========================
// 4. Spread Operator with Arrays
// ===========================
const arr1 = [1, 2];
const arr2 = [3, 4];

// Merge arrays
const mergedArr = [...arr1, ...arr2];
console.log(mergedArr); // [1, 2, 3, 4]

// Copy array
const arrCopy = [...arr1];
console.log(arrCopy); // [1, 2]

// ===========================
// 5. Spread Operator with Objects
// ===========================
const obj1 = { a: 1 };
const obj2 = { b: 2 };

// Merge objects
const mergedObj = { ...obj1, ...obj2 };
console.log(mergedObj); // { a: 1, b: 2 }

// Copy object
const objCopy = { ...obj1 };
console.log(objCopy); // { a: 1 }

// ===========================
// 6. Destructuring in Functions
// ===========================
function greet({ name, age }) {
  console.log(`Hello ${name}, age ${age}`);
}
greet(user); // Hello Alice, age 25

// Array destructuring in function
function printCoords([x, y]) {
  console.log(`X=${x}, Y=${y}`);
}
printCoords([5, 10]); // X=5, Y=10
