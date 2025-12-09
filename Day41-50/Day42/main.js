// class Employee {
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }

//     getInfo() {
//         return `${this.name} is ${this.age} years old.`;
//     }
// }
// class Programmer extends Employee {
//     // No constructor → automatically uses parent's constructor
// }
// const p1 = new Programmer("Alice", 25);
// console.log(p1.getInfo());

// class Employee {
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }
// }
// class Programmer extends Employee {
//     constructor(name, age, language) {
//         super(name, age);  // must call super() first
//         this.language = language;
//     }
//     getDetails() {
//         return `${this.name} is a ${this.age}-year-old programmer who codes in ${this.language}.`;
//     }
// }
// const p2 = new Programmer("Bob", 30, "JavaScript");
// console.log(p2.getDetails());

// class Employee {
//     constructor(name) {
//         this.name = name;
//     }
// }
// class Programmer extends Employee {
//     constructor(name, level) {
//         super(name); // still must be called
//         this.level = level;
//     }
//     promote() {
//         this.level++;
//     }
// }
// const p3 = new Programmer("Charlie", 1);
// console.log(p3.name);     // Charlie
// console.log(p3.level);    // 1
// p3.promote();
// console.log(p3.level);    // 2

class Employee {
    constructor(name = "Unknown", salary = 0) {
        this.name = name;
        this.salary = salary;
    }
}
class Programmer extends Employee {
    constructor(name, salary, language = "JavaScript") {
        super(name, salary);
        this.language = language;
    }
}
const p4 = new Programmer("Derrick", 50000);
console.log(p4);
