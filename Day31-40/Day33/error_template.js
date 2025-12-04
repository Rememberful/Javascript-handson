// -----------------------------------------------------
// 1. Custom Error Class
// -----------------------------------------------------
class MyCustomError extends Error {
    constructor(message) {
        super(message);           // inherit from Error
        this.name = "MyCustomError";
    }
}

// -----------------------------------------------------
// 2. Function demonstrating manual errors + built-in errors
// -----------------------------------------------------
function riskyOperation(value) {
    if (value === null) {
        throw new MyCustomError("Value cannot be null!"); // custom error
    }
    if (typeof value !== "number") {
        throw new TypeError("Value must be a number"); // built-in error
    }
    return value * 2;
}

// -----------------------------------------------------
// 3. Function demonstrating async error handling
// -----------------------------------------------------
async function asyncOperation() {
    // Simulating async error
    throw new Error("Async operation failed!");
}

// -----------------------------------------------------
// 4. Main try-catch block containing everything
// -----------------------------------------------------
try {
    console.log("Start");

    // A. Built-in + custom errors
    let result = riskyOperation("hello"); 
    console.log("Result:", result);

    // B. Async error handling inside try-catch
    await asyncOperation();

    // C. setTimeout error example (must have its own try-catch)
    setTimeout(() => {
        try {
            console.log(nonExistentVar); // ReferenceError
        } catch (err) {
            console.log("Caught inside setTimeout:", err.message);
        }
    }, 500);

} catch (err) {

    // D. Handling different errors differently  
    if (err instanceof MyCustomError) {
        console.log("Custom Error Caught:", err.message);
    }
    else if (err instanceof TypeError) {
        console.log("Type Error Caught:", err.message);
    }
    else {
        console.log("General Error Caught:", err.message);
    }

    // E. Re-throwing the error if necessary
    // throw err; // (optional)

} finally {
    // F. Runs always
    console.log("Finally block executed");
}

// -----------------------------------------------------
// 5. Execution continues here
// -----------------------------------------------------
console.log("Program did not crash");
