//write a program using prompt function to take input from user and then decide if he/she can dirve or not using the alert function

let age = Number.parseInt(prompt("Enter your age:"));
console.log("You entered age:", age);
if (age>=18) {
    alert("You can drive");
}
else {
    alert("You cannot drive");
}

// for above question confirm if user want to enter again 
// let runAgain = true;

// while (runAgain) {
//     let age = Number.parseInt(prompt("Enter your age:"));
    
//     if (isNaN(age)) {
//         alert("Please enter a valid number!");
//     } else if (age >= 18) {
//         alert("You can drive");
//     } else {
//         alert("You cannot drive");
//     }

//     runAgain = confirm("Do you want to enter your age again?");
// }

//for same question, check if age entered is negative
// let runAgain = true;
// while (runAgain) {
//     let age = Number.parseInt(prompt("Enter your age:"));
//     if (isNaN(age)) {
//         alert("Please enter a valid number!");
//     } else if (age < 0) {
//         console.log("Age cannot be negative!");
//     } else if (age >= 18) {
//         alert("You can drive");
//     } else {
//         alert("You cannot drive");
//     }
//     runAgain = confirm("Do you want to enter your age again?");
// }

//Ask the user to enter a number.
// Check if the number is greater than 5.
// If yes → redirect the user to Google.com.
// Otherwise → show a message saying they are not redirected.

// let num = Number.parseInt(prompt("Enter a number:"));

// if (isNaN(num)) {
//     alert("Please enter a valid number!");
// } else if (num > 5) {
//     // Redirect to Google
//     window.location.href = "https://www.google.com";
// } else {
//     alert("Number is not greater than 5. You stay here!");
// }


// Asks the user to enter a color name (like red, blue, green, etc.).
// Changes the background color of the web page to that color.
let color = prompt("Enter a color name (e.g., red, blue, green, yellow):");

if (color) {
    document.body.style.backgroundColor = color;
} else {
    alert("No color entered!");
}

