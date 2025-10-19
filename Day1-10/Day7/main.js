//write a program to print the marks of a student in an object using for loop

// let obj = {
//     harry: 88,
//     rohan: 70,
//     aakash: 90
// };

// for (const key in obj) {
//     console.log("Marks of", key, "is", obj[key]);
// }

//Write a program to print "try again" until the user enters the correct number
let our_number = 9;
let user_number;

while (our_number!=user_number) {
    user_number = Number(prompt("Enter the number:"));
    if(our_number!=user_number){
        console.log("Try again");
    }
    else{
        console.log("You guessed 9 as correct");
    }
}

// console.log("You entered the correct number!");

//Function to find mean of 5 numbers
// function mean(a,b,c,d,e){
//     let m = (a+b+c+d+e)/5;
//     return m;
// }

// console.log(mean(5,6,7,8,9));

//Function to find the mean of 5 numbers entered by user
// let a = prompt("Enter a:");
// let b = prompt("Enter b:");
// let c = prompt("Enter c:");
// let d = prompt("Enter d:");
// let e = prompt("Enter e:");
// function mean(a,b,c,d,e){
//     let x = (a+b+c+d+e)/5;
//     return x;
// }
// console.log(mean());

// // Prompt the user to enter five values
// Note: prompt() always returns a string
// let a = prompt("Enter a:");  
// let b = prompt("Enter b:");
// let c = prompt("Enter c:");
// let d = prompt("Enter d:");
// let e = prompt("Enter e:");

// // Function to calculate the mean of five numbers
// // The parameters here are local to the function
// function mean(a, b, c, d, e) {
//     // Calculate the mean
//     // If the arguments are numbers, this works correctly
//     // If the arguments are strings, JS will concatenate them, which can lead to unexpected results
//     let x = (a + b + c + d + e) / 5;
//     return x; // Return the result
// }

// // Call the function with **literal numbers** (ignoring the prompted values)
// // Here, a=2, b=3, c=4, d=5, e=6 inside the function
// console.log(mean(2, 3, 4, 5, 6)); // Output: 4


// Prompt the user to enter five values
// Note: prompt() always returns a string, so we convert it to a number
// let a = Number(prompt("Enter a:"));  
// let b = Number(prompt("Enter b:"));
// let c = Number(prompt("Enter c:"));
// let d = Number(prompt("Enter d:"));
// let e = Number(prompt("Enter e:")); // 5th value from user

// // Function to calculate the mean of five numbers
// function mean(a, b, c, d, e) {
//     // All parameters are numbers now
//     let x = (a + b + c + d + e) / 5;
//     return x; // Return the mean
// }

// // Call the function
// // Here, the first four arguments are literals, and the 5th comes from user input
// console.log(mean(2, 3, 4, 5, e)); 


// Prompt the user to enter five values
let a = Number(prompt("Enter a:"));  
let b = Number(prompt("Enter b:"));
let c = Number(prompt("Enter c:"));
let d = Number(prompt("Enter d:"));
let e = Number(prompt("Enter e:")); // user enters something, but will be ignored

// Function to calculate the mean of five numbers
function mean(a, b, c, d, e) {
    // The 5th parameter 'e' will be undefined if not passed
    let x = (a + b + c + d + e) / 5;
    return x;
}

// Call the function with only 4 arguments
console.log(mean(2, 3, 4, 5)); // Output: NaN
