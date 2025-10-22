// =====================================================
// ARRAYS IN JAVASCRIPT - FULL TEMPLATE (BASICS TO ADVANCED)
// =====================================================

// 1️⃣ WHAT IS AN ARRAY?
// Arrays are special objects used to store multiple values in a single variable.
// They are dynamic and can hold mixed data types.

let arr1 = [10, 20, 30, 40];              // Literal notation (recommended)
let arr2 = new Array("A", "B", "C");      // Using Array constructor
let mixed = [10, "Hello", true, null];    // Mixed data types

console.log("Array 1:", arr1);
console.log("Array 2:", arr2);
console.log("Mixed Array:", mixed);


// 2️⃣ ACCESSING AND UPDATING ELEMENTS
console.log("\nAccess & Update:");
console.log(arr1[0]);     // Access first element (10)
arr1[1] = 25;             // Update element at index 1
console.log(arr1);


// 3️⃣ ARRAY LENGTH
console.log("\nArray Length:", arr1.length);


// 4️⃣ ADDING & REMOVING ELEMENTS
let fruits = ["Apple", "Banana", "Mango"];
console.log("\nOriginal Fruits:", fruits);

fruits.push("Orange");       // Add at end
fruits.unshift("Kiwi");      // Add at start
console.log("After push & unshift:", fruits);

fruits.pop();                // Remove from end
fruits.shift();              // Remove from start
console.log("After pop & shift:", fruits);


// 5️⃣ SEARCHING ELEMENTS
console.log("\nSearching Methods:");
console.log(fruits.indexOf("Banana"));   // 0 or 1 (based on array)
console.log(fruits.includes("Mango"));   // true
console.log(fruits.lastIndexOf("Mango")); // last position


// 6️⃣ SLICE AND SPLICE
let letters = ["A", "B", "C", "D", "E"];
console.log("\nSlice & Splice:");
console.log("slice(1,4):", letters.slice(1, 4));  // ["B", "C", "D"]

letters.splice(2, 1, "Z");                        // Remove 1 at index 2 & insert Z
console.log("After splice:", letters);


// 7️⃣ CONCAT & JOIN
let nums1 = [1, 2];
let nums2 = [3, 4];
console.log("\nConcat & Join:");
console.log(nums1.concat(nums2));          // [1,2,3,4]
console.log(nums1.join(" - "));            // "1 - 2"


// 8️⃣ ITERATION METHODS
let numbers = [10, 20, 30, 40];

console.log("\nIteration:");
numbers.forEach(num => console.log("forEach:", num));      // Print each

let doubled = numbers.map(num => num * 2);                 // Returns new array
console.log("map:", doubled);

let filtered = numbers.filter(num => num > 20);            // Elements > 20
console.log("filter:", filtered);

let total = numbers.reduce((sum, num) => sum + num, 0);    // Sum of elements
console.log("reduce:", total);

let found = numbers.find(num => num > 25);                 // First element > 25
console.log("find:", found);

let findIndex = numbers.findIndex(num => num === 30);      // Index of 30
console.log("findIndex:", findIndex);


// 9️⃣ SORTING & REVERSING
let sortArr = [5, 1, 10, 2];
console.log("\nSorting & Reversing:");
console.log("Default sort:", sortArr.sort());              // As strings: [1, 10, 2, 5]
console.log("Numeric sort:", sortArr.sort((a, b) => a - b)); // [1, 2, 5, 10]
console.log("Reverse:", sortArr.reverse());                // [10, 5, 2, 1]


// 🔟 TESTING METHODS
let testArr = [2, 4, 6, 8];
console.log("\nTesting Methods:");
console.log("every > 0:", testArr.every(x => x > 0));      // true
console.log("some > 5:", testArr.some(x => x > 5));        // true


// 11️⃣ OTHER USEFUL METHODS
let otherArr = [1, 2, 3, 4, 5];
console.log("\nOther Useful Methods:");
console.log("fill:", otherArr.fill(0, 1, 4));              // [1, 0, 0, 0, 5]
console.log("Array.from('ABC'):", Array.from("ABC"));      // ["A","B","C"]
console.log("isArray:", Array.isArray(otherArr));          // true

let nested = [1, [2, [3, 4]]];
console.log("flat:", nested.flat(2));                      // [1, 2, 3, 4]


// 12️⃣ MULTI-DIMENSIONAL ARRAYS
let matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
console.log("\n2D Array Element:", matrix[1][2]);          // 6


// 13️⃣ COMBINING METHODS (CHAINING)
let chainExample = [10, 15, 20, 25, 30];
let result = chainExample
    .filter(x => x > 15)
    .map(x => x * 2)
    .reduce((sum, x) => sum + x, 0);

console.log("\nChaining Result:", result);


// 14️⃣ DESTRUCTURING ARRAYS
let [a, b, c] = ["Red", "Green", "Blue"];
console.log("\nDestructuring:", a, b, c);


// 15️⃣ SPREAD OPERATOR WITH ARRAYS
let arrA = [1, 2, 3];
let arrB = [4, 5];
let merged = [...arrA, ...arrB];   // Merging arrays
console.log("\nSpread Operator:", merged);


// 16️⃣ EMPTY SLOTS AND SPARSE ARRAYS
let sparse = [1, , 3]; // Missing element
console.log("\nSparse Array:", sparse);
console.log("Length:", sparse.length);
console.log("Index 1:", sparse[1]); // undefined


// =====================================================
// ✅ KEY INTERVIEW / EXAM POINTS
// =====================================================
// 1. Arrays are zero-indexed.
// 2. Arrays are dynamic and can store mixed data types.
// 3. Arrays in JS are objects (not contiguous in memory).
// 4. 'slice()' doesn’t modify original, 'splice()' does.
// 5. 'map()', 'filter()', 'reduce()' → return new arrays (functional methods).
// 6. 'push()', 'pop()', 'shift()', 'unshift()' modify the array directly.
// 7. 'sort()' treats elements as strings by default.
// 8. Use 'Array.isArray()' to check if a value is an array.
// 9. Strings are immutable; arrays are mutable.
// 10. Arrays support chaining of methods for cleaner code.
// =====================================================
