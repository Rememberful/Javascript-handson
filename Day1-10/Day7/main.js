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