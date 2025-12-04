console.log("1. Basic try–catch");
try {
    console.log(a); // a is not defined → error
} catch (err) {
    console.log("Caught error:", err.message);
}



console.log("\n2. try–catch with finally");
try {
    console.log("Running risky code...");
    throw new Error("Something broke!");
} catch (err) {
    console.log("Caught:", err.message);
} finally {
    console.log("Finally always runs.");
}



console.log("\n3. try–catch only catches synchronous errors");
try {
    setTimeout(() => {
        console.log(b); // b is not defined → error
    }, 500);
} catch (err) {
    console.log("This will NOT run");
}



console.log("\n4. Correct way: try–catch *inside* setTimeout (async error handling)");
setTimeout(() => {
    try {
        console.log(c); // c is not defined → error
    } catch (err) {
        console.log("Caught inside setTimeout:", err.message);
    }
}, 1000);



console.log("\n5. Custom error throwing with throw");
try {
    let age = -5;
    if (age < 0) {
        throw new Error("Age cannot be negative");
    }
} catch (err) {
    console.log("Custom error:", err.message);
}



console.log("\n6. Using error object details");
try {
    JSON.parse("{bad json}"); // invalid JSON
} catch (err) {
    console.log("Name:", err.name);        // SyntaxError
    console.log("Message:", err.message);  // Unexpected token b...
}
