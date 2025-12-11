class Person {
  constructor(name) {
    this._name = name;
  }
  get name() {
    return this._name;
  }
  set name(value) {
    this._name = value;
  }
}
const p = new Person("Alice");
// Using instanceof
console.log(p instanceof Person); // true
console.log(p instanceof Object); // true
