// ------------------------------
// 1. CREATE A PROMISE
// ------------------------------
function fetchData() {
    return new Promise((resolve, reject) => {
        console.log("Promise started...");

        setTimeout(() => {
            const success = true; // change to false to test rejection

            if (success) {
                resolve("Step 1: Data fetched");
            } else {
                reject("Something went wrong in Step 1");
            }
        }, 1000);
    });
}

// ------------------------------
// 2. PROMISE CHAINING WITH .then()
// ------------------------------
fetchData()
    .then((result1) => {
        console.log(result1);
        return "Step 2: Processing data";
    })
    .then((result2) => {
        console.log(result2);
        return "Step 3: Saving data";
    })
    .then((result3) => {
        console.log(result3);
        // Final returned value of chain
        return "All steps completed successfully";
    })

// ------------------------------
// 3. CATCHING ERRORS WITH .catch()
// ------------------------------
    .catch((error) => {
        console.log("Error caught:", error);
    })

// ------------------------------
// 4. FINALLY (runs ALWAYS)
// ------------------------------
    .finally(() => {
        console.log("Promise operation finished (success or fail)");
    });

// ------------------------------
// 5. MULTIPLE HANDLERS ON SAME PROMISE
// ------------------------------
const demoPromise = fetchData();

// Handler #1
demoPromise.then((msg) => {
    console.log("Handler 1 received:", msg);
});

// Handler #2
demoPromise.then((msg) => {
    console.log("Handler 2 also received:", msg);
});
