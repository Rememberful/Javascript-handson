/*******************************************************
 *                DATA TYPES IN JAVASCRIPT
 *******************************************************/

/* ======================================================
   1. PRIMITIVE DATA TYPES
   ====================================================== */

// 1. Number
let age = 25;
let price = 99.99;
console.log("Number:", age, typeof age);  // Number: 25 'number'

// 2. String
let name = "Aditya";
let city = 'Delhi';
console.log("String:", name, typeof name);  // String: Aditya 'string'

// 3. Boolean
let isStudent = true;
let isPassed = false;
console.log("Boolean:", isStudent, typeof isStudent);  // Boolean: true 'boolean'

// 4. Undefined
let score;
console.log("Undefined:", score, typeof score);  // Undefined: undefined 'undefined'

// 5. Null
let emptyValue = null;
console.log("Null:", emptyValue, typeof emptyValue);  // Null: null 'object' (JS quirk)

// 6. Symbol (unique and immutable identifier)
let id = Symbol("id");
let id2 = Symbol("id");
console.log("Symbol:", id === id2);  // false (every Symbol is unique)

// 7. BigInt (for very large numbers)
let bigNumber = 123456789012345678901234567890n;
console.log("BigInt:", bigNumber, typeof bigNumber);  // BigInt: 123456789012345678901234567890n 'bigint'


/* ======================================================
   2. NON-PRIMITIVE DATA TYPES (OBJECT TYPES)
   ====================================================== */

// 1. Object
let person = {
    name: "Aditya",
    age: 22,
    city: "Delhi"
};
console.log("Object:", person, typeof person);

// 2. Array
let fruits = ["Apple", "Banana", "Mango"];
console.log("Array:", fruits, typeof fruits);
console.log("Is Array?", Array.isArray(fruits));  // true

// 3. Function
function greet() {
    return "Hello, World!";
}
console.log("Function:", greet(), typeof greet);

// 4. Date Object
let today = new Date();
console.log("Date:", today, typeof today);


/* ======================================================
   3. TYPE CHECKING
   ====================================================== */
console.log("Type of city:", typeof city);          // string
console.log("Type of bigNumber:", typeof bigNumber); // bigint
console.log("Type of person:", typeof person);      // object


/* ======================================================
   4. DIFFERENCE BETWEEN PRIMITIVE AND OBJECT TYPES
   ====================================================== */

// Primitive (copied by value)
let x = 10;
let y = x;
y = 20;
console.log("Primitive Example:", x, y); // x=10, y=20 (different copies)

// Object (copied by reference)
let obj1 = { value: 10 };
let obj2 = obj1;
obj2.value = 20;
console.log("Object Example:", obj1.value, obj2.value); // both 20 (same reference)


/* ======================================================
   5. BEST PRACTICES
   ====================================================== */

// 1. Use 'typeof' to check variable types.
// 2. Always initialize variables before using them.
// 3. Use BigInt only when large numbers are required.
// 4. Prefer 'const' for objects and arrays that should not be reassigned.
// 5. Use 'Array.isArray()' to check if a variable is an array.
// 6. Remember: 'typeof null' returns 'object' (a known JavaScript quirk).
// 7. Keep data organized — use objects for structured data.

