// 🔹 Parent Class Template
class ParentClass {
    constructor(param1 = defaultValue1, param2 = defaultValue2) {
        // Initialize parent properties
        this.param1 = param1;
        this.param2 = param2;

        // Optional: Validation or setup code
        // this.validate();
    }

    // Optional: Parent methods
    parentMethod() {
        return `Parent method using ${this.param1}`;
    }
}



// 🔹 Child Class Template
class ChildClass extends ParentClass {
    constructor(param1, param2, childParam = defaultChildValue) {
        // super() MUST be the first line in the child constructor
        super(param1, param2);  

        // Initialize child-specific properties
        this.childParam = childParam;

        // Optional: Custom logic for child class
        // this.setupChild();
    }

    // Optional: Child methods
    childMethod() {
        return `Child method using ${this.childParam}`;
    }
}



// 🔹 Example of Creating an Object
const obj = new ChildClass("value1", "value2", "childValue");

console.log(obj.param1);     // From parent
console.log(obj.param2);     // From parent
console.log(obj.childParam); // From child
