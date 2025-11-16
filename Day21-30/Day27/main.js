// function greet(name, callback) {
//     console.log("Hello " + name);
//     callback(); // calling the callback
// }
// function done() {
//     console.log("Greeting completed");
// }
// greet("Aditya", done);

// function sayHello() {
//     console.log("Hello");
// }
// function doSomething(callback) {
//     callback();  // calling the callback function
// }
// doSomething(sayHello);

// setTimeout(function() {
//     console.log("This runs after 1 second");
// }, 1000);

function finish() {
    console.log("Task Done!");
}
function startTask(callback) {
    console.log("Starting...");
    callback(); // run the callback
}
startTask(finish);



