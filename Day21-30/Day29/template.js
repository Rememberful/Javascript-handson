// ---------------------------------------------------------
// 1. Basic Syntax of a Promise
// ---------------------------------------------------------
let promise1 = new Promise((resolve, reject) => {
    // Do some work...
    resolve("Success value");  // success
    reject("Error value");     // failure (won't run because resolve came first)
});

// ---------------------------------------------------------
// 2. Very Basic Example
// ---------------------------------------------------------
let promise2 = new Promise((resolve) => {
    resolve("Hello");
});

// ---------------------------------------------------------
// 3. Using .then() (success handler)
promise2.then((value) => {
    console.log("Then Example:", value);
});

// ---------------------------------------------------------
// 4. Using .catch() (error handler)
let promise3 = new Promise((resolve, reject) => {
    reject("Error occurred");
});

promise3.catch((error) => {
    console.log("Catch Example:", error);
});

// ---------------------------------------------------------
// 5. Using Both .then() and .catch()
let promise4 = new Promise((resolve, reject) => {
    let ok = true;
    if (ok) resolve("All Good");
    else reject("Problem Occurred");
});

promise4
    .then((value) => console.log("Then+Catch Example:", value))
    .catch((error) => console.log("Then+Catch Example:", error));

// ---------------------------------------------------------
// 6. Pending → Resolved Example
// ---------------------------------------------------------
let promise5 = new Promise((resolve, reject) => {
    console.log("Promise is running...");
    setTimeout(() => {
        resolve("Done after 3 seconds");
    }, 3000);
});

console.log("Pending Promise:", promise5); // shows pending

// ---------------------------------------------------------
// 7. Chaining Promises
// ---------------------------------------------------------
new Promise(resolve => resolve(10))
    .then(num => num * 2)
    .then(num => num + 5)
    .then(result => console.log("Chaining Result:", result)); // 25

// ---------------------------------------------------------
// 8. Promise Error Handling
// ---------------------------------------------------------
let promise6 = new Promise((resolve, reject) => {
    reject("Something went wrong");
});

promise6
    .then(value => console.log(value))
    .catch(err => console.log("Error Handling Example:", err)); // runs

// ---------------------------------------------------------
// 9. async/await version
// ---------------------------------------------------------
let promise7 = new Promise(resolve => {
    resolve("Data received");
});

async function run() {
    let result = await promise7;
    console.log("Async/Await Example:", result);
}
run();

// ---------------------------------------------------------
// 10. Real Use Case: Fetch API
// (Works only in browser or Node with fetch enabled)
// ---------------------------------------------------------
fetch("https://api.example.com/user")
    .then(response => response.json())
    .then(data => console.log("Fetch Result:", data))
    .catch(err => console.log("Fetch Error:", err));
