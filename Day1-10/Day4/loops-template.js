// ===========================================
// 🔁 JavaScript Loops — Complete Template
// ===========================================

// ------------------------------
// 1️⃣ for Loop
// ------------------------------
// Runs code a specific number of times

console.log("----- for Loop -----");

for (let i = 0; i < 5; i++) {
    console.log("Count:", i);
}
// Output: 0 1 2 3 4


// ------------------------------
// 2️⃣ while Loop
// ------------------------------
// Runs while a condition is true

console.log("\n----- while Loop -----");

let j = 0;
while (j < 5) {
    console.log("Number:", j);
    j++;
}
// Output: 0 1 2 3 4


// ------------------------------
// 3️⃣ do...while Loop
// ------------------------------
// Runs at least once, even if condition is false

console.log("\n----- do...while Loop -----");

let k = 0;
do {
    console.log("Value:", k);
    k++;
} while (k < 5);
// Output: 0 1 2 3 4


// ------------------------------
// 4️⃣ for...in Loop
// ------------------------------
// Used to iterate over object properties (keys)

console.log("\n----- for...in Loop (Objects) -----");

let student = {
    name: "Aditya",
    age: 21,
    course: "BCA"
};

for (let key in student) {
    console.log(key + ":", student[key]);
}
// Output:
// name: Aditya
// age: 21
// course: BCA


// ------------------------------
// 5️⃣ for...of Loop
// ------------------------------
// Used to iterate over iterable objects (arrays, strings)

console.log("\n----- for...of Loop (Arrays) -----");

let fruits = ["Apple", "Banana", "Cherry"];

for (let fruit of fruits) {
    console.log(fruit);
}
// Output:
// Apple
// Banana
// Cherry


// ------------------------------
// 6️⃣ break and continue
// ------------------------------
// break → exits the loop early
// continue → skips one iteration

console.log("\n----- break & continue Example -----");

for (let i = 1; i <= 5; i++) {
    if (i === 3) {
        continue; // skip 3
    }
    if (i === 5) {
        break; // stop loop when i = 5
    }
    console.log("Value:", i);
}
// Output: 1 2 4


// ===========================================
// ✅ Best Practices
// ===========================================
// 1. Use for → when number of iterations is known.
// 2. Use while → when iterations depend on a condition.
// 3. Use do...while → when you need to run the code at least once.
// 4. Use for...in → for objects.
// 5. Use for...of → for arrays, strings, or iterable data.
// 6. Avoid infinite loops — always have a stopping condition.
// 7. Keep loops simple and readable.

