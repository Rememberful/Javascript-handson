// console.log("Hello");

// setTimeout(() => {
//   console.log("World");
// }, 2000); // 2 seconds delay

// console.log("Hey Aditya");


// let promise = new Promise((resolve, reject) => {
//     console.log("Hello");
//     resolve(59);
// });

// console.log("Hello2");

// setTimeout(() => {
//   console.log("World");
// }, 2000); // 2 seconds delay

// console.log("Hey Aditya");
// console.log(promise);


// let promise = new Promise((resolve, reject) => {
//     console.log("Promise is pending ...");
//     setTimeout(() => {
//         console.log("I am a promise and I am resolved");
//         resolve(true);
//     }, 5000);
// });

// console.log(promise); //it will show pending state as 5s are remaining

// let promise = new Promise((resolve, reject) => {
//     console.log("Promise is pending ...");
//     setTimeout(() => {
//         console.log("I am a promise and I am rejected");
//         reject(new Error("Some error occurred"));
//     }, 5000);
// });

// console.log(promise); //it will show pending state as 5s are remaining

let p1 = new Promise((resolve, reject) => {
    console.log("Promise is pending ...");
    setTimeout(() => {
        console.log("I am a promise and I am resolved");
        resolve(true);
    }, 5000);
});

let p2 = new Promise((resolve, reject) => {
    console.log("Promise is pending ...");
    setTimeout(() => {
        console.log("I am a promise and I am rejected");
        reject(new Error("Some error occurred"));
    }, 5000);
});

p1.then((value) => {
    console.log(value); //true will be printed after 5s
})

p2.catch((value) => {
    console.log("Some error occured in p2"); 
})