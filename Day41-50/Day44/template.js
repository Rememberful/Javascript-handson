// Class Template
class ClassName {
  constructor(value) {
    this._property = value;   // private-like variable
  }

  // Getter → used to read the value
  get property() {
    return this._property;
  }

  // Setter → used to update the value
  set property(newValue) {
    this._property = newValue;
  }
}

// Creating object
const obj = new ClassName("Initial Value");

// Using getter
console.log(obj.property);      // calls getter

// Using setter
obj.property = "Updated Value"; // calls setter
console.log(obj.property);      // calls getter again

// Using instanceof
console.log(obj instanceof ClassName); // true
console.log(obj instanceof Object);    // true
