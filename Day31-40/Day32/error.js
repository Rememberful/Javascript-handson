// setTimeout(() => {
//     console.log("This is a delayed message 1.");
// }, 1000);

// try {
//     console.log(Aditya); //will generate ReferenceError: Aditya is not defined
// } catch (error) {
//     console.log("An error occurred:", error.message);
// }

// setTimeout(() => {
//     console.log("This is a delayed message 2.");
// }, 2000);

// setTimeout(() => {
//     console.log("This is a delayed message 3.");
// }, 3000);

// try {
//     setTimeout(() => {
//         console.log(x);   // x is not defined
//     }, 1000);
// } catch (error) {
//     console.log("Caught error:", error);
// }


try {
    setTimeout(() => {
        try {
            console.log(x); // x is not defined → error
        } catch (err) {
            console.log("Caught inside setTimeout:", err.message);
        }
    }, 1000);
} catch (error) {
    console.log("Caught outside:", error.message);
}


