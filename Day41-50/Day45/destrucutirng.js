// const numbers = [1, 2, 3, 4, 6,7, 8];
// let [a, b, c, ...rest] = numbers;
// console.log(a,b,c, rest);

// let [x, , z] = [1, 2, 3];
// console.log(x, z); // 1 3

// let [a = 5, b = 10] = [];
// console.log(a, b); // 5 10

// let user = { name: "Aditya", age: 23 };
// let { name, age } = user;
// console.log(name, age);

// let { name: username } = user;
// console.log(username); // Aditya

let { city = "Unknown" } = user;
console.log(city); // Unknown




