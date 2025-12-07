// -------------------------------
// 1. Simple object with prototype
// -------------------------------
let base = {
    baseValue: 100,
    sayHello() {
        console.log("Hello from base prototype!");
    }
};

// -------------------------------
// 2. Another object linked to base using __proto__
// -------------------------------
let obj = {
    name: "Aditya"
};

obj.__proto__ = base;

// Accessing inherited property/method
console.log(obj.baseValue);   // 100
obj.sayHello();               // Hello from base prototype!



// -------------------------------
// 3. Constructor Function & .prototype
// -------------------------------
function Person(name, age) {
    this.name = name;
    this.age = age;
}

// Adding methods to prototype (shared by all objects)
Person.prototype.greet = function () {
    console.log("Hi, I am " + this.name);
};

Person.prototype.showAge = function () {
    console.log("My age is " + this.age);
};

// Creating objects using constructor
let p1 = new Person("John", 25);
let p2 = new Person("Sara", 30);

// Using inherited methods
p1.greet();     // Hi, I am John
p2.showAge();   // My age is 30



// -------------------------------
// 4. Checking the prototype chain
// -------------------------------
console.log(p1.__proto__ === Person.prototype);     // true
console.log(Person.prototype.__proto__ === Object.prototype); // true
console.log(Object.prototype.__proto__);            // null (end of chain)



// -------------------------------
// 5. Overriding a prototype method
// -------------------------------
p1.greet = function () {
    console.log("Custom greet from p1");
};

p1.greet();  // Custom greet from p1
p2.greet();  // Hi, I am Sara (uses prototype method)



// -------------------------------
// 6. Adding new prototype methods later (extends all objects)
// -------------------------------
Person.prototype.sayBye = function () {
    console.log("Bye!");
};

p1.sayBye();  // Bye!
p2.sayBye();  // Bye!



// -------------------------------
// 7. Inheriting prototypes from other prototypes
// -------------------------------
function Student(name, age, grade) {
    Person.call(this, name, age);
    this.grade = grade;
}

// Linking prototypes → prototype inheritance
Student.prototype.__proto__ = Person.prototype;

// Adding Student-specific method
Student.prototype.showGrade = function () {
    console.log("My grade is " + this.grade);
};

let s1 = new Student("Karan", 20, "A");

s1.greet();       // Inherited from Person
s1.showGrade();   // Specific to Student
s1.sayBye();      // Inherited from Person (added later)
