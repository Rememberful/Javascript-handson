// let p1 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve("Value 1");
//     }, 1000);
// });

// let p2 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve("Value 2");
//     }, 2000);
// });

// let p3 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve("Value 3");
//     }, 3000);
// });

// p1.then((value) => {
//     console.log(value);
// });
// p2.then((value) => {
//     console.log(value);
// });
// p3.then((value) => {
//     console.log(value);
// });


// let p1 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve("Value 1");
//     }, 1000);
// });

// let p2 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve("Value 2");
//     }, 2000);
// });

// let p3 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve("Value 3");
//     }, 3000);
// });

// let promise_all = Promise.all([p1,p2,p3]);
// promise_all.then((values) => {
//     console.log(values);
// });


// let p1 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         reject("Some error occurred in p1");
//     }, 1000);
// });

// let p2 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve("Value 2");
//     }, 2000);
// });

// let p3 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve("Value 3");
//     }, 3000);
// });

// let promise_all = Promise.all([p1,p2,p3]);
// promise_all.then((values) => {
//     console.log(values);
// });

// let p1 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         reject("Some error occurred in p1");
//     }, 1000);
// });

// let p2 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve("Value 2");
//     }, 2000);
// });

// let p3 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve("Value 3");
//     }, 3000);
// });

// let promise_all = Promise.allSettled([p1,p2,p3]);
// promise_all.then((values) => {
//     console.log(values);
// });

let p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Value 1");
    }, 10000);
});

let p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject("Some error occurred in p2");
    }, 2000);
});

let p3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Value 3");
    }, 3000);
});

let promise_all = Promise.any([p1,p2,p3]);
promise_all.then((values) => {
    console.log(values);
});