// const add = (a, b) => {
//   return a + b;
// };

// const add2 = (a,b) => a+b;


// const sayHello = name => `Hello, ${name}!`;

// console.log(sayHello('Alice'));

// const sayHello = (name, greeting) => `${greeting}, ${name}!`;

// console.log(sayHello('Alice', 'Welcome'));

// const greet = () => "Hello!";
// console.log(greet());

// const square = x => x * x;
// console.log(square(5));

const person = {
  name: "Aditya",
  showName: function() {
    setTimeout(() => {
      console.log(this.name); 
    }, 1000);
  }
};

person.showName(); // Aditya



