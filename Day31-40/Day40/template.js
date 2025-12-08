// 1. Basic Class with Constructor
class Person {
    // constructor runs automatically when object is created
    constructor(name, age) {
        this.name = name;    // property 1
        this.age = age;      // property 2
    }

    // simple method
    introduce() {
        console.log(`Hi, I am ${this.name} and I am ${this.age} years old.`);
    }
}

// creating objects
let p1 = new Person("Aditya", 21);
let p2 = new Person("Riya", 19);

p1.introduce();
p2.introduce();



// 2. Constructor without parameters
class Hello {
    constructor() {
        this.msg = "This is default constructor";
    }
}

let h = new Hello();
console.log(h.msg);



// 3. Class with multiple methods
class Car {
    constructor(model, year) {
        this.model = model;
        this.year = year;
    }

    start() {
        console.log(this.model + " engine started");
    }

    stop() {
        console.log(this.model + " engine stopped");
    }
}

let c = new Car("BMW", 2023);
c.start();
c.stop();



// 4. Inheritance: Child class extends Parent class
class Animal {
    constructor(name) {
        this.name = name;
    }

    speak() {
        console.log(this.name + " makes a sound");
    }
}

class Dog extends Animal {
    constructor(name, breed) {
        super(name);          // calls parent constructor
        this.breed = breed;   // child's own property
    }

    // overriding parent method
    speak() {
        console.log(this.name + " (Dog) barks");
    }
}

let d = new Dog("Bruno", "Labrador");
d.speak();
console.log("Breed:", d.breed);



// 5. If no constructor is written
class Example {
    // JS automatically adds: constructor() {}
    show() {
        console.log("Class without custom constructor works fine!");
    }
}

let ex = new Example();
ex.show();
