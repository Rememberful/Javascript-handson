// class Animal {
//     speak() {
//         console.log("Animal makes a sound");
//     }
// }

// class Dog extends Animal {
//     speak() {   // overriding
//         console.log("Dog barks");
//     }
// }
// let d = new Dog();
// d.speak(); // Dog barks

// class Animal {
//     constructor(name) {
//         this.name = name;
//     }
// }
// class Dog extends Animal {
//     constructor(name, breed) {
//         super(name);  // call Animal constructor
//         this.breed = breed;
//     }
// }
// let d = new Dog("Bruno", "Labrador");
// console.log(d.name, d.breed);

class Animal {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    info() {
        console.log(`${this.name} is ${this.age} years old.`);
    }
}
class Dog extends Animal {
    constructor(name, age, breed) {
        super(name, age);  // Call parent constructor
        this.breed = breed;
    }
    info() {  // overriding the parent method
        super.info(); // use the parent's version
        console.log(`${this.name} is a ${this.breed}.`);
    }
    bark() {
        console.log(`${this.name} is barking!`);
    }
}
let d = new Dog("Bruno", 3, "Labrador");
d.info();
d.bark();
