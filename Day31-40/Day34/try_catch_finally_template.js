// === TEMPLATE: TRY — CATCH — FINALLY ===

// 1. Basic try-catch-finally
try {
    console.log("Trying something risky...");

    // risky code (may cause error)
    let result = riskyFunction();   
    console.log(result);

} catch (error) {
    console.log("Error caught:", error.message);
} finally {
    console.log("This always runs (cleanup code).");
}



// 2. With a manual error using throw
try {
    let age = -5;

    if (age < 0) {
        throw new Error("Age cannot be negative");
    }

    console.log("Age is valid:", age);

} catch (err) {
    console.log("Caught:", err.message);
} finally {
    console.log("Cleanup after manual error.");
}



// 3. Error inside async callback (needs inner try-catch)
try {
    setTimeout(() => {
        try {
            console.log(x); // error: x not defined
        } catch (innerErr) {
            console.log("Caught inside setTimeout:", innerErr.message);
        }
    }, 1000);
} catch (outerErr) {
    console.log("Caught outside:", outerErr.message);
} finally {
    console.log("This runs immediately (before timeout).");
}



// 4. try/catch with return — finally still runs
function test() {
    try {
        return "Returning from try";
    } catch (err) {
        return "Returning from catch";
    } finally {
        console.log("Finally still runs even with return!");
    }
}

console.log(test());
