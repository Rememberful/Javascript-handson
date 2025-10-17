// =============================================
// 🚀 WHILE LOOP AND DO...WHILE LOOP IN JAVASCRIPT
// =============================================

// ------------------------------
// 1️⃣ WHILE LOOP - BASIC CONCEPT
// ------------------------------

// The while loop repeats a block of code 
// as long as the given condition is TRUE.

let i = 0; // initialization

while (i < 5) { // condition
    console.log("While Loop - Count:", i);
    i++; // increment
}

// Output:
// While Loop - Count: 0
// While Loop - Count: 1
// While Loop - Count: 2
// While Loop - Count: 3
// While Loop - Count: 4



// ----------------------------------------
// 2️⃣ WHILE LOOP - AVOIDING INFINITE LOOPS
// ----------------------------------------

// Always ensure your loop variable changes,
// otherwise it runs forever (infinite loop).

let count = 3;

while (count > 0) {
    console.log("Countdown:", count);
    count--; // decreases every iteration
}

// Output:
// Countdown: 3
// Countdown: 2
// Countdown: 1



// ----------------------------------
// 3️⃣ WHILE LOOP - USING BREAK/CONTINUE
// ----------------------------------

let num = 1;

while (num <= 5) {
    if (num === 3) {
        num++;
        continue; // skips current iteration
    }

    if (num === 5) {
        break; // stops loop completely
    }

    console.log("Number:", num);
    num++;
}

// Output:
// Number: 1
// Number: 2
// Number: 4



// =============================
// 4️⃣ DO...WHILE LOOP - BASICS
// =============================

// The do...while loop always executes its body at least ONCE,
// then checks the condition.

let x = 0;

do {
    console.log("Do...While - Count:", x);
    x++;
} while (x < 3);

// Output:
// Do...While - Count: 0
// Do...While - Count: 1
// Do...While - Count: 2



// ---------------------------------------------
// 5️⃣ DIFFERENCE BETWEEN WHILE AND DO...WHILE
// ---------------------------------------------

let a = 5;

while (a < 5) {
    console.log("While Loop Executed"); // ❌ Will NOT run because condition is false
}

do {
    console.log("Do...While Executed Once"); // ✅ Runs at least once
} while (a < 5);

// Output:
// Do...While Executed Once



// --------------------------------------
// ✅ BEST PRACTICES
// --------------------------------------
/*
1. Always modify the loop variable inside the loop.
2. Keep the condition simple and meaningful.
3. Use 'while' when you don’t know the exact number of iterations.
4. Use 'do...while' when you need at least one guaranteed run.
5. Avoid infinite loops unless intentionally used (e.g., servers, listeners).
*/
