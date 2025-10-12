/*******************************************************
 *                  JAVASCRIPT VARIABLES TEMPLATE
 *******************************************************/

/* ======================================================
   1. Variable Declaration Types
   ====================================================== */

// Using var (function-scoped, can be redeclared and updated)
var userName = "Aditya";
var age = 25;

// Using let (block-scoped, can be updated but not redeclared in same scope)
let city = "Delhi";
city = "Mumbai"; // Updating is allowed

// Using const (block-scoped, cannot be updated or redeclared)
const country = "India";
// country = "USA"; // ❌ This will give an error

/* ======================================================
   2. Variable Rules
   ====================================================== */

// 1. Must start with a letter, _ or $
// let 1name = "John"; // ❌ Invalid
let _user = "Alice"; // ✅ Valid
let $price = 100;    // ✅ Valid

// 2. Can contain letters, numbers, _ or $
// let user-name = "Bob"; // ❌ Invalid
let user1 = "Bob";      // ✅ Valid

// 3. Case-sensitive
let age1 = 30;
let Age1 = 40; // Different variable

// 4. Cannot use reserved keywords
// let for = 10; // ❌ Invalid

// 5. Should be meaningful
let userScore = 100; // ✅ Good
let x = 100;         // ❌ Not recommended

// 6. Use camelCase for multi-word names
let totalAmount = 500;

/* ======================================================
   3. Data Types Examples
   ====================================================== */

let numberVar = 10;            // Number
let stringVar = "Hello";       // String
let booleanVar = true;         // Boolean
let undefinedVar;              // Undefined
let nullVar = null;            // Null
let objectVar = { name: "Aditya", age: 25 }; // Object
let arrayVar = [1, 2, 3, 4];   // Array

/* ======================================================
   4. Printing Variables
   ====================================================== */
console.log("User Name:", userName);
console.log("City:", city);
console.log("Country:", country);
console.log("Number:", numberVar);
console.log("Object:", objectVar);
console.log("Array:", arrayVar);

/* ======================================================
   5. Best Practices for Variables
   ====================================================== */

// 1. Use 'let' for variables that change, 'const' for constants.
// 2. Give meaningful and descriptive names.
// 3. Use camelCase for multi-word variable names.
// 4. Avoid using 'var' in modern JavaScript.
// 5. Declare variables close to where they are used.
// 6. Avoid global variables as much as possible.
// 7. Initialize variables when declaring them (if possible).

