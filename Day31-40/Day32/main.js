// async function greet() {
//     return "Hello";
// }

// greet().then(console.log); // prints: Hello


async function demo() {
    let promise = new Promise((resolve) => {
        resolve("Hello World");
    });

    let result = await promise;  // waits for the promise
    console.log(result);
}

demo();
