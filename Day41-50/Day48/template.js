// 1. Basic Arrow Function
const add = (a, b) => a + b;
console.log("Add:", add(5, 3));


// 2. Arrow Function with One Parameter
const square = x => x * x;
console.log("Square:", square(4));


// 3. Arrow Function with No Parameters
const greet = () => "Hello!";
console.log("Greet:", greet());


// 4. Arrow Function with Multiple Lines (needs return)
const multiply = (a, b) => {
    let result = a * b;
    return result;
};
console.log("Multiply:", multiply(4, 5));


// 5. Returning an Object (needs parentheses)
const getUser = () => ({ name: "Aditya", age: 22 });
console.log("User:", getUser());


// 6. Arrow Function in Callback (like setTimeout)
setTimeout(() => {
    console.log("Inside setTimeout (arrow function): No own 'this'");
}, 1000);


// 7. Arrow Functions in Array Methods (very common)
const nums = [1, 2, 3, 4];
const doubled = nums.map(n => n * 2);
console.log("Doubled:", doubled);


// 8. Arrow Functions DO NOT have their own 'this'
const person = {
    name: "Aditya",
    showNameNormal: function () {
        setTimeout(function () {
            console.log("Normal function this.name:", this.name); // undefined
        }, 500);
    },
    showNameArrow: function () {
        setTimeout(() => {
            console.log("Arrow function this.name:", this.name); // Aditya
        }, 500);
    }
};

person.showNameNormal();
person.showNameArrow();


// 9. Arrow Functions Cannot Be Constructors
const Car = () => {};
try {
    const c = new Car(); // ❌ TypeError
} catch (err) {
    console.log("Arrow cannot be used with new:", err.message);
}


// 10. Arrow Functions Do NOT Have 'arguments'
function testNormal() {
    console.log("Normal arguments:", arguments);
}
testNormal(1, 2, 3);

const testArrow = () => {
    try {
        console.log(arguments); // ❌ ReferenceError
    } catch (err) {
        console.log("Arrow has no arguments:", err.message);
    }
};
testArrow(1, 2, 3);


// 11. Arrow Functions with Promises (very common)
const promise = new Promise(resolve => resolve("Promise resolved"));
promise.then(res => console.log(res));


// 12. Arrow Function inside Fetch API
fetch("https://jsonplaceholder.typicode.com/posts/1")
    .then(res => res.json())
    .then(data => console.log("Fetched:", data))
    .catch(err => console.log(err));
