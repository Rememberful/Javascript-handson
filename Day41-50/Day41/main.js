// // class Animal{
// //     constructor(name, color){
// //         this.name = name;
// //         this.color = color;
// //     }
// //     run(){
// //         console.log(this.name + " is running");
// //     }
// //     shout(){
// //         console.log(this.name + " is shouting");
// //     }
// // }

// // class Monkey extends Animal{
// //     eatBanana(){
// //         console.log(this.name + " is eating banana");
// //     }
// // }

// // let ani = new Animal("Tom","yellow");
// // let mon = new Monkey("Jack","brown");

// // ani.shout();
// // mon.eatBanana();


// // Base class
// class Vehicle {
//     constructor(brand) {
//         this.brand = brand;
//     }
//     start() {
//         console.log(this.brand + " is starting");
//     }
// }
// // Child class that inherits from Vehicle
// class Car extends Vehicle {
//     honk() {
//         console.log(this.brand + " is honking");
//     }
// }
// // Creating objects
// let v = new Vehicle("Generic Vehicle");
// let c = new Car("Toyota");
// // Calling methods
// v.start();      // Output: Generic Vehicle is starting
// c.start();      // Output: Toyota is starting (inherited method)
// c.honk();       // Output: Toyota is honking

// Parent class
class Device {
    turnOn() {
        console.log("Device is turning on.");
    }
    turnOff() {
        console.log("Device is turning off.");
    }
}

// Child class
class Phone extends Device {
    makeCall() {
        console.log("Phone is making a call.");
    }
    // Method overriding
    turnOn() {
        console.log("Phone is turning on with animation.");
    }
}

// Grandchild class
class Smartphone extends Phone {
    openApp(appName) {
        console.log("Opening app: " + appName);
    }
}
let d = new Device();
let p = new Phone();
let s = new Smartphone();
// Calling methods
d.turnOn();
p.turnOn();          // Overridden method
p.makeCall();
s.turnOn();          // Inherits overridden version from Phone
s.openApp("YouTube");
