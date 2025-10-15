// ==============================================
// 🚀 JavaScript Operators and Expressions Template
// ==============================================

// ----------------------------
// 1. Arithmetic Operators
// ----------------------------
// Used for performing mathematical operations

let a = 10;
let b = 3;

console.log("Addition:", a + b);       // 13
console.log("Subtraction:", a - b);    // 7
console.log("Multiplication:", a * b); // 30
console.log("Division:", a / b);       // 3.333...
console.log("Modulus:", a % b);        // 1 (remainder)
console.log("Exponentiation:", a ** b);// 1000 (10³)

// ----------------------------
// 2. Assignment Operators
// ----------------------------
// Used to assign or update values

let x = 5;
x += 2;   // same as x = x + 2
x -= 1;   // same as x = x - 1
x *= 3;   // same as x = x * 3
x /= 2;   // same as x = x / 2
console.log("Final value of x:", x);

// ----------------------------
// 3. Comparison Operators
// ----------------------------
// Used to compare two values — returns true or false

let p = 10, q = "10";

console.log("Equal (==):", p == q);      // true (value only)
console.log("Strict Equal (===):", p === q); // false (value + type)
console.log("Not Equal (!=):", p != q);  // false
console.log("Strict Not Equal (!==):", p !== q); // true
console.log("Greater Than:", p > 5);     // true
console.log("Less Than:", p < 5);        // false
console.log("Greater or Equal:", p >= 10); // true
console.log("Less or Equal:", p <= 9);     // false

// ----------------------------
// 4. Logical Operators
// ----------------------------
// Used to combine multiple conditions

let isAdult = true;
let hasID = false;

console.log("AND (&&):", isAdult && hasID);  // false
console.log("OR (||):", isAdult || hasID);   // true
console.log("NOT (!):", !isAdult);           // false

// ----------------------------
// 5. Increment & Decrement Operators
// ----------------------------
// Used to increase or decrease a value by 1

let count = 5;
console.log("Pre-Increment:", ++count);  // 6
console.log("Post-Increment:", count++); // 6 (then becomes 7)
console.log("After Post-Increment:", count); // 7
console.log("Pre-Decrement:", --count);  // 6
console.log("Post-Decrement:", count--); // 6 (then becomes 5)
console.log("After Post-Decrement:", count); // 5

// ----------------------------
// 6. String Operators
// ----------------------------
// The '+' operator is used for string concatenation

let firstName = "Aditya";
let lastName = "Kumar";
console.log("Full Name:", firstName + " " + lastName);

// ----------------------------
// 7. Ternary Operator
// ----------------------------
// Shortcut for if-else conditions

let age = 18;
let canVote = (age >= 18) ? "Yes, can vote" : "No, too young";
console.log("Eligible to vote:", canVote);

// ----------------------------
// 8. Type Operators
// ----------------------------
// Used to check or convert types

console.log("Type of 'a':", typeof a);  // number
console.log("Is Array?", Array.isArray([1, 2, 3])); // true

// ----------------------------
// 9. Expressions
// ----------------------------
// Expression = combination of values, variables, and operators that produces a result

let expressionResult = (10 + 5) * 2; // 30
console.log("Expression result:", expressionResult);

// ==============================================
// ✅ Best Practices
// ==============================================
// 1. Use strict equality (===, !==) for accurate comparisons.
// 2. Avoid mixing data types (e.g., number + string) unexpectedly.
// 3. Use parentheses () to make expressions clear.
// 4. Keep expressions simple and readable.
// 5. Test boundary conditions in comparison logic.

