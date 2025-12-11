// let x = 10; // global variable
// function show() {
//     console.log(x); // can access
// }
// show();
// console.log(x); // accessible here too

// function run() {
//     let a = 5;  // local variable
//     console.log(a);
// }

// run();
// console.log(a); // ERROR → not accessible outside

// {
//     let b = 20;
//     console.log(b); // OK
// }

// console.log(b); // ERROR

let a = 10;

function outer() {
    let b = 20;
    function inner() {
        console.log(a); // OK
        console.log(b); // OK
    }
    inner();
}
outer();
// b not accessible here → ERROR

