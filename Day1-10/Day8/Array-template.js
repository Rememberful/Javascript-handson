// ==========================================
// ARRAYS IN JAVASCRIPT - COMPLETE TEMPLATE
// ==========================================

// 1️⃣ Creating Arrays
let fruits = ["Apple", "Banana", "Mango"];          // Using array literal (recommended)
let numbers = new Array(10, 20, 30, 40);            // Using Array constructor
let mixed = ["Aditya", 21, true, null];             // Mixed data types

console.log("Fruits:", fruits);
console.log("Numbers:", numbers);
console.log("Mixed:", mixed);


// 2️⃣ Accessing & Updating Elements
console.log("\nAccessing Elements:");
console.log(fruits[0]);        // Apple
console.log(fruits[2]);        // Mango

fruits[1] = "Orange";          // Updating an element
console.log("Updated Fruits:", fruits);


// 3️⃣ Array Properties
console.log("\nArray Length:", fruits.length); // 3


// 4️⃣ Adding and Removing Elements
fruits.push("Kiwi");           // Add at end
fruits.unshift("Lemon");       // Add at start
console.log("After push & unshift:", fruits);

fruits.pop();                  // Remove last element
fruits.shift();                // Remove first element
console.log("After pop & shift:", fruits);


// 5️⃣ Common Array Methods
let arr = [10, 20, 30, 40, 50];
console.log("\nArray Methods:");

console.log("slice(1,4):", arr.slice(1, 4));            // Extract elements (1 to 3)
arr.splice(2, 1, 99);                                   // Remove 1 item at index 2 & add 99
console.log("After splice:", arr);

console.log("concat:", arr.concat([60, 70]));           // Join arrays
console.log("join:", fruits.join(", "));                // Convert to string
console.log("includes(99):", arr.includes(99));         // true
console.log("indexOf(40):", arr.indexOf(40));           // Index of 40
console.log("reverse:", arr.reverse());                 // Reverse the array
console.log("sort:", fruits.sort());                    // Sort alphabetically


// 6️⃣ Looping Through Arrays
let colors = ["Red", "Green", "Blue"];

console.log("\nUsing for loop:");
for (let i = 0; i < colors.length; i++) {
    console.log(colors[i]);
}

console.log("\nUsing for...of loop:");
for (let color of colors) {
    console.log(color);
}

console.log("\nUsing forEach():");
colors.forEach((color, index) => {
    console.log(`${index}: ${color}`);
});


// 7️⃣ Multi-dimensional Arrays
let matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
console.log("\n2D Array:", matrix);
console.log("Access element (2,3):", matrix[1][2]);  // 6


// 8️⃣ Array with Mixed Data
let data = ["John", 25, { city: "Delhi" }, [100, 200]];
console.log("\nMixed Array:", data);


// ==========================================
// ✅ Key Notes
// - Arrays are zero-indexed
// - Can hold multiple data types
// - Are mutable (can be changed)
// - Use for...of or forEach for iteration
// - Strings are immutable, Arrays are not
// ==========================================
