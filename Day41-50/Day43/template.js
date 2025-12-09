// ==============================
// CLASS TEMPLATE WITH STATIC KEYWORDS
// ==============================

class MyClass {
  // ===== 1. Static Property =====
  // Shared by the class, not by instances
  static count = 0;

  // ===== 2. Constructor =====
  constructor(name) {
    this.name = name; // instance property
    MyClass.count++;  // update static property
  }

  // ===== 3. Instance Method =====
  // Works on individual objects
  greet() {
    console.log(`Hello, my name is ${this.name}`);
  }

  // ===== 4. Static Method =====
  // Belongs to the class itself
  static sayWelcome() {
    console.log("Welcome to MyClass!");
  }

  // ===== 5. Static Method using parameters =====
  static compare(obj1, obj2) {
    if (obj1.name.length > obj2.name.length) {
      return `${obj1.name} has a longer name`;
    } else if (obj1.name.length < obj2.name.length) {
      return `${obj2.name} has a longer name`;
    } else {
      return "Both names are the same length";
    }
  }

  // ===== 6. Static Factory Method =====
  // Creates a new object with default properties
  static createDefault() {
    return new MyClass("Default Name");
  }
}

// ==============================
// USAGE EXAMPLES
// ==============================

// Static property
console.log("Initial count:", MyClass.count);

// Static method
MyClass.sayWelcome(); // "Welcome to MyClass!"

// Creating objects
let obj1 = new MyClass("Alice");
let obj2 = new MyClass("Bob");

// Instance methods
obj1.greet(); // "Hello, my name is Alice"
obj2.greet(); // "Hello, my name is Bob"

// Static method using objects
console.log(MyClass.compare(obj1, obj2));

// Static factory method
let obj3 = MyClass.createDefault();
obj3.greet(); // "Hello, my name is Default Name"

// Static property updated automatically
console.log("Total objects created:", MyClass.count);
