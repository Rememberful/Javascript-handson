console.log("1. Basic async function");
async function basic() {
    return "Hello";
}
basic().then(console.log); 



console.log("\n2. Using await inside async function");
function getMessage() {
    return new Promise((resolve) => {
        setTimeout(() => resolve("Message after 1 second"), 1000);
    });
}

async function showMessage() {
    let msg = await getMessage();  
    console.log(msg);
}
showMessage();



console.log("\n3. async function always returns a Promise");
async function add() {
    return 10 + 20;
}
add().then(result => console.log("Result:", result));



console.log("\n4. try–catch with async/await (error handling)");
function getError() {
    return Promise.reject("Something went wrong");
}

async function handleError() {
    try {
        let data = await getError();
        console.log(data);
    } catch (err) {
        console.log("Caught error:", err);
    }
}
handleError();



console.log("\n5. Using multiple awaits step-by-step");
function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function runSteps() {
    console.log("Step 1");
    await delay(1000);

    console.log("Step 2");
    await delay(1000);

    console.log("Step 3");
}
runSteps();



console.log("\n6. async/await with returned Promise value");
async function getNumber() {
    let numPromise = new Promise(resolve => {
        resolve(50);
    });

    let number = await numPromise;
    console.log("Number:", number);
}
getNumber();
