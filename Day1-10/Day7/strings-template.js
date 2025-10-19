// ======================================
// 🚀 STRINGS IN JAVASCRIPT (BASICS)
// ======================================

// 1️⃣ String Declaration
let str1 = "Hello";      // Double quotes
let str2 = 'World';      // Single quotes
let str3 = `JavaScript`; // Backticks (Template literals)

console.log(str1); // Hello
console.log(str2); // World
console.log(str3); // JavaScript

// 2️⃣ String Concatenation
let firstName = "Aditya";
let lastName = "Kumar";

// Using + operator
let fullName = firstName + " " + lastName;
console.log(fullName); // Aditya Kumar

// Using template literals
let age = 21;
let greeting = `My name is ${firstName} ${lastName} and I am ${age} years old.`;
console.log(greeting);

// 3️⃣ Multi-line Strings
let multiLine = `This is
a multi-line
string example.`;
console.log(multiLine);

// 4️⃣ Accessing Characters
let language = "JavaScript";
console.log(language[0]); // J (first character)
console.log(language[4]); // S (fifth character)

// 5️⃣ String Length
console.log(language.length); // 10

// 6️⃣ Combining Strings Dynamically
let city = "Mumbai";
let country = "India";

let location = `${city}, ${country}`;
console.log("Location:", location);

// ✅ Best Practices
/*
1. Prefer template literals for dynamic strings.
2. Use meaningful variable names for strings.
3. Remember strings are immutable.
4. Avoid excessive concatenation with '+'; prefer template literals for readability.
5. Use backticks for multi-line strings.
*/
