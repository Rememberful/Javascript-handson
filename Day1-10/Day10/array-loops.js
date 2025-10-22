// =====================================================
// USING LOOPS WITH ARRAYS IN JAVASCRIPT
// =====================================================

// Sample array
let fruits = ["Apple", "Banana", "Mango", "Orange"];

// ------------------------------------------
// 1️⃣ For Loop
// ------------------------------------------
// Traditional loop using index
console.log("FOR LOOP:");
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

// ------------------------------------------
// 2️⃣ While Loop
// ------------------------------------------
console.log("\nWHILE LOOP:");
let i = 0;
while (i < fruits.length) {
  console.log(fruits[i]);
  i++;
}

// ------------------------------------------
// 3️⃣ Do...While Loop
// ------------------------------------------
console.log("\nDO WHILE LOOP:");
let j = 0;
do {
  console.log(fruits[j]);
  j++;
} while (j < fruits.length);

// ------------------------------------------
// 4️⃣ For...of Loop (Best for values)
// ------------------------------------------
console.log("\nFOR...OF LOOP:");
for (let fruit of fruits) {
  console.log(fruit);
}

// ------------------------------------------
// 5️⃣ For...in Loop (Iterates over indexes)
// ------------------------------------------
console.log("\nFOR...IN LOOP:");
for (let index in fruits) {
  console.log(index, ":", fruits[index]);
}

// ------------------------------------------
// 6️⃣ forEach() Method
// ------------------------------------------
console.log("\nFOREACH METHOD:");
fruits.forEach(function (item, index, array) {
  console.log(index, ":", item);
});

// Arrow function version
fruits.forEach((item) => console.log(item));

// ------------------------------------------
// 7️⃣ Combining Loops with Conditions
// ------------------------------------------
console.log("\nFILTER USING LOOP:");
let longNames = [];
for (let fruit of fruits) {
  if (fruit.length > 5) {
    longNames.push(fruit);
  }
}
console.log("Fruits with long names:", longNames);

// ------------------------------------------
// 8️⃣ Nested Loops Example (for 2D Arrays)
// ------------------------------------------
console.log("\nNESTED LOOPS (2D ARRAY):");
let numbers = [
  [1, 2, 3],
  [4, 5, 6],
];
for (let row of numbers) {
  for (let num of row) {
    console.log(num);
  }
}

// =====================================================
// ✅ KEY POINTS / INTERVIEW NOTES
// =====================================================
// 1. Arrays are zero-indexed → elements start at index 0.
// 2. Use 'for...of' for array values, 'for...in' for indexes.
// 3. 'forEach()' cannot be stopped with 'break' or 'continue'.
// 4. 'for' loop gives you maximum control (good for conditions, skipping, etc.).
// 5. Avoid using 'for...in' with arrays (can include prototype keys).
// 6. 'forEach()' is clean, modern, and functional.
// 7. 'for...of' is the simplest for reading values directly.
// =====================================================
