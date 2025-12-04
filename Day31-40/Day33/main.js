// try {
//     Aditya;
// } catch (error) {
//     console.log(error.name);
//     console.log(error.message);
// }

//Custom error
// function login(user) {
//     if (!user) {
//         throw new Error("User not found!");
//     }
//     return "Logged in";
// }

// try {
//     login(null);
// } catch (err) {
//     console.log(err.message); // User not found!
// }

function divide(a, b) {
    if (b === 0) {
        throw new Error("Cannot divide by zero");
    }
    return a / b;
}
console.log(divide(4, 2));

