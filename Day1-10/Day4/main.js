//Loops in jS

//For loop

// for (let i = 0; i <=5; i++) {
//     console.log(i+1); 
// }

// let sum = 0;
// let n = 3;
// for (let i = 1; i < n; i++) {
//     sum += i + 1;
// }
// console.log(sum); 

//factorial using loops
// let n = 5;
// let fact = 1;
// for (let i = 1; i <= n; i++) {
//     fact *= i; 
// }
// console.log(fact);


//For ... in loop
// let obj ={
//     a: "Aditya",
//     b: "Banana",
//     c: "Cat",
//     d: "Date"
// };
// //For...in
// for (let keyword_name in obj) {
//        console.log(keyword_name);
// }

//To print both key and value
// let obj ={
//     a: "Aditya",
//     b: "Banana",
//     c: "Cat",
//     d: "Date"
// };
// //For...in
// for (let keyword_name in obj) {
//        console.log(keyword_name + " equals " + obj[keyword_name]);
// }

//For...of loop
for (const b of "Aditya") {
    console.log(b);
}