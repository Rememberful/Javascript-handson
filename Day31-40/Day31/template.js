// -----------------------------------------------------
// 1. Promise.resolve()
// -----------------------------------------------------
let p1 = Promise.resolve("Resolved immediately");

p1.then((value) => {
    console.log("Promise.resolve():", value);
});

// -----------------------------------------------------
// 2. Promise.reject()
// -----------------------------------------------------
let p2 = Promise.reject("Rejected immediately");

p2.catch((error) => {
    console.log("Promise.reject():", error);
});

// -----------------------------------------------------
// Mock promises for testing
// -----------------------------------------------------
let slow = new Promise((resolve) => {
    setTimeout(() => resolve("Slow done"), 3000);
});

let fast = new Promise((resolve) => {
    setTimeout(() => resolve("Fast done"), 1000);
});

let fail = new Promise((_, reject) => {
    setTimeout(() => reject("Failed promise"), 2000);
});

// -----------------------------------------------------
// 3. Promise.all()
// (fails if ANY promise fails)
// -----------------------------------------------------
Promise.all([fast, slow])
    .then((results) => {
        console.log("Promise.all():", results);
    })
    .catch((err) => {
        console.log("Promise.all() error:", err);
    });

// -----------------------------------------------------
// 4. Promise.allSettled()
// (never fails, returns result for each promise)
// -----------------------------------------------------
Promise.allSettled([fast, fail, slow])
    .then((results) => {
        console.log("Promise.allSettled():", results);
    });

// -----------------------------------------------------
// 5. Promise.race()
// (first promise to finish wins)
// -----------------------------------------------------
Promise.race([fast, slow, fail])
    .then((value) => {
        console.log("Promise.race():", value);
    })
    .catch((error) => {
        console.log("Promise.race() error:", error);
    });

// -----------------------------------------------------
// 6. Promise.any()
// (returns first SUCCESSFUL promise)
// -----------------------------------------------------
Promise.any([fail, slow, fast])
    .then((value) => {
        console.log("Promise.any():", value);
    })
    .catch((err) => {
        console.log("Promise.any() error:", err);
    });
