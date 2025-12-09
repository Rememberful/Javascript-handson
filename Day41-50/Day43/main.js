// class Hello {
//   static sayHi() {
//     console.log("Hi!");
//   }
// }

// Hello.sayHi(); // prints "Hi!"

// class MathHelper {
//   static add(a, b) {
//     return a + b;
//   }
// }
// console.log(MathHelper.add(5, 3)); // 8

class Person {
  constructor(name) {
    this.name = name;
  }
  // Instance method (belongs to the object)
  sayHello() {
    console.log("Hello, I'm " + this.name);
  }
  // Static method (belongs to the class)
  static sayWelcome() {
    console.log("Welcome to the class!");
  }
}
Person.sayWelcome(); // static method → works
let p = new Person("Alice");
p.sayHello();        // instance method → works
// p.sayWelcome();      // ❌ ERROR: object can't use static method

