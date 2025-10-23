// =====================================================
// MAP, FILTER & REDUCE - COMPLETE TEMPLATE
// =====================================================

// Sample array
let numbers = [1, 2, 3, 4, 5];

console.log("Original Array:", numbers);

// ------------------------------------------
// 1️⃣ MAP() - Transform each element
// ------------------------------------------
console.log("\n--- MAP() ---");

// Multiply each element by 2
let doubled = numbers.map(num => num * 2);
console.log("Doubled:", doubled); // [2,4,6,8,10]

// Convert numbers to string
let strNumbers = numbers.map(num => "Number: " + num);
console.log("String Array:", strNumbers);

// ------------------------------------------
// 2️⃣ FILTER() - Select elements by condition
// ------------------------------------------
console.log("\n--- FILTER() ---");

// Keep only numbers greater than 2
let filtered = numbers.filter(num => num > 2);
console.log("Filtered (>2):", filtered); // [3,4,5]

// Keep even numbers
let even = numbers.filter(num => num % 2 === 0);
console.log("Even Numbers:", even); // [2,4]

// ------------------------------------------
// 3️⃣ REDUCE() - Reduce array to single value
// ------------------------------------------
console.log("\n--- REDUCE() ---");

// Sum of all elements
let sum = numbers.reduce((total, num) => total + num, 0);
console.log("Sum:", sum); // 15

// Product of all elements
let product = numbers.reduce((total, num) => total * num, 1);
console.log("Product:", product); // 120

// Create an object counting elements
let countObj = numbers.reduce((acc, num) => {
    acc[num] = (acc[num] || 0) + 1;
    return acc;
}, {});
console.log("Count Object:", countObj);

// ------------------------------------------
// 4️⃣ CHAINING EXAMPLE - map -> filter -> reduce
// ------------------------------------------
console.log("\n--- CHAINING ---");

let result = numbers
    .map(num => num * 2)      // [2,4,6,8,10]
    .filter(num => num > 5)   // [6,8,10]
    .reduce((sum, num) => sum + num, 0); // 24

console.log("Chaining Result:", result);

// ------------------------------------------
// 5️⃣ USING FOR COMPLEX OBJECTS
// ------------------------------------------
console.log("\n--- COMPLEX OBJECTS ---");

let users = [
    {name: "Alice", age: 25},
    {name: "Bob", age: 30},
    {name: "Charlie", age: 18}
];

// Get all names
let names = users.map(user => user.name);
console.log("Names:", names); // ["Alice","Bob","Charlie"]

// Filter users older than 20
let adults = users.filter(user => user.age > 20);
console.log("Adults:", adults);

// Sum of ages
let totalAge = users.reduce((sum, user) => sum + user.age, 0);
console.log("Total Age:", totalAge);

// ------------------------------------------
// ✅ KEY POINTS / INTERVIEW NOTES
// ------------------------------------------
// 1. map() transforms array → returns new array
// 2. filter() selects elements → returns new array
// 3. reduce() accumulates elements → returns single value
// 4. Original array is never modified
// 5. Use chaining to combine multiple operations
// 6. Always provide initial value in reduce
// 7. Arrow functions make these methods concise and readable
// =====================================================
