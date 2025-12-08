// Parent Class (Base Class)
class ParentClass {
    constructor(parentProperty1, parentProperty2) {
        this.parentProperty1 = parentProperty1;
        this.parentProperty2 = parentProperty2;
    }

    parentMethod() {
        console.log("This is a method from the parent class.");
    }
}

// Child Class (Derived Class)
class ChildClass extends ParentClass {
    constructor(parentProperty1, parentProperty2, childProperty) {
        super(parentProperty1, parentProperty2);  // Call parent constructor
        this.childProperty = childProperty;
    }

    // Method overriding
    parentMethod() {
        super.parentMethod(); // Optional: call parent version
        console.log("This is the overridden method in the child class.");
    }

    childMethod() {
        console.log("This is a method from the child class.");
    }
}

// Creating an object
let obj = new ChildClass("value1", "value2", "value3");

// Using methods
obj.parentMethod();
obj.childMethod();
