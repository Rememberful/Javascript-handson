// =======================================
// 🚀 FUNCTIONS IN JAVASCRIPT (BASICS TO TYPES)
// =======================================

// 1️⃣ Basic Function
function sayHello() {
    console.log("Hello, welcome to JS!");
}
sayHello();

// 2️⃣ Function with Parameters
function greet(name) {
    console.log("Hello, " + name + "!");
}
greet("Aditya");

// 3️⃣ Function with Return Value
function add(a, b) {
    return a + b;
}
let sum = add(5, 10);
console.log("Sum is:", sum);

// 4️⃣ Function Expression
let multiply = function (x, y) {
    return x * y;
};
console.log("Product:", multiply(4, 6));

// 5️⃣ Arrow Function (ES6)
let divide = (a, b) => a / b;
console.log("Division:", divide(10, 2));

// 6️⃣ Default Parameters
function greetUser(name = "Guest") {
    console.log("Hello, " + name + "!");
}
greetUser();
greetUser("Aditya");

// 7️⃣ Function with Return and Logic
function checkEven(num) {
    if (num % 2 === 0) {
        return "Even";
    } else {
        return "Odd";
    }
}
console.log("Number is:", checkEven(5));

// ✅ Best Practices
/*
1. Use meaningful function names (e.g., calculateTotal, getUserName).
2. Keep functions short — one specific task per function.
3. Use return when you need to pass a value back.
4. Use default parameters to handle missing arguments.
5. Prefer arrow functions for short, one-line logic.
*/
