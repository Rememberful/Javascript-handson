class Person {
  constructor(name) {
    this._name = name;    // private-like variable
  }
  // Getter
  get name() {
    return this._name;
  }
  // Setter
  set name(value) {
    this._name = value;
  }
}
const p = new Person("Alice");
console.log(p.name); // uses getter → "Alice"
p.name = "Bob";      // uses setter
console.log(p.name); // "Bob"
