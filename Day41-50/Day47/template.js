// ===============================================
// 1. BASIC CLOSURE — inner function + lexical scope
// ===============================================
function basicClosure() {
  let msg = "I remember my parent variables";

  function inner() {
    console.log("Basic:", msg);
  }

  return inner; // Returning creates a closure
}
const basic = basicClosure();
basic();


// ===============================================
// 2. PRIVATE VARIABLE — Data hiding using closure
// ===============================================
function createCounter() {
  let count = 0; // private variable

  return {
    increment() {
      count++;
      console.log("Counter:", count);
    },
    getValue() {
      return count;
    }
  };
}
const counter = createCounter();
counter.increment();
counter.increment();
console.log("Private value:", counter.getValue());


// ===============================================
// 3. FUNCTION FACTORY — closure remembering arguments
// ===============================================
function multiplier(x) {
  return function(y) {
    return x * y; // x is remembered
  };
}
const double = multiplier(2);
const triple = multiplier(3);
console.log("Factory:", double(5), triple(5));


// ===============================================
// 4. CLOSURE IN LOOPS — classic interview question
// ===============================================

// Using let (block scope)
for (let i = 1; i <= 3; i++) {
  setTimeout(() => console.log("Let loop:", i), 500);
}

// Using var (fixed using closure)
for (var i = 1; i <= 3; i++) {
  (function(n) {
    setTimeout(() => console.log("Var loop:", n), 500);
  })(i);
}


// ===============================================
// 5. CLOSURE WITH CALLBACKS — storing state
// ===============================================
function delayedMessage(msg, delay) {
  setTimeout(function() {
    console.log("Callback:", msg);
  }, delay);
}
delayedMessage("Hello after 1s", 1000);


// ===============================================
// 6. PRACTICAL CLOSURE — Module Pattern
// Encapsulating logic and exposing only selected data
// ===============================================
const userModule = (function() {
  let username = "guest"; // private variable

  function login(name) {
    username = name;
    console.log("User logged in:", username);
  }

  function getUser() {
    return username;
  }

  // only these are exposed publicly
  return {
    login,
    getUser
  };
})();

userModule.login("Alice");
console.log("Module:", userModule.getUser());
