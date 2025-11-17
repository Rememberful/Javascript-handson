// 1. Basic Callback
function sayHello() {
    console.log("Hello");
}
function run(callback) {
    callback();
}
run(sayHello);



// 2. Callback with setTimeout
setTimeout(function() {
    console.log("This runs after 2 seconds");
}, 2000);



// 3. Callback with Arguments
function greet(name) {
    console.log("Hello " + name);
}
function process(callback) {
    callback("Aditya");
}
process(greet);



// 4. Real Task Callback
function done() {
    console.log("Task finished");
}
function startTask(callback) {
    console.log("Starting task...");
    callback();
}
startTask(done);



// 5. Anonymous Callback
function doWork(callback) {
    callback();
}
doWork(function() {
    console.log("Anonymous callback executed");
});



// 6. Callback inside Event (requires browser and a button)
document.body.innerHTML += '<button id="btn">Click</button>';
document.getElementById("btn").addEventListener("click", function() {
    console.log("Button clicked (callback in event)");
});



// 7. Callback Hell Example
setTimeout(() => {
    console.log("Step 1");
    setTimeout(() => {
        console.log("Step 2");
        setTimeout(() => {
            console.log("Step 3");
        }, 1000);
    }, 1000);
}, 1000);
