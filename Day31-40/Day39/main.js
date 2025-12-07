let obj = {
    age: 30,
};
console.log(obj);

let p = {
    run: () => {
        console.log("Running");
    }
}

p.__proto__={
    name: "Bob",
}
obj.__proto__ = p;
obj.run();
console.log(obj.name);