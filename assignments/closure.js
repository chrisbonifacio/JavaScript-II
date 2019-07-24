// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!
let myName = "Chris";

function greeting() {
  let friendName = "Wilson";
  console.log(`Hi, my name is ${myName}`);

  return function farewell() {
    console.log(`Goodbye, ${friendName}`);
  };
}

const helloGoodbye = greeting();

helloGoodbye();

/* STRETCH PROBLEMS, Do not attempt until you have completed all previous tasks for today's project files */

// ==== Challenge 2: Create a counter function ====
// IIFE - Immediately Invoked Functin Expression
const counter = (function() {
  let counter = 0;
  // Return a function that when invoked increments and returns a counter variable.
  return function() {
    counter += 1;
    return counter;
  };
})();
console.log(counter());
console.log(counter());
console.log(counter());
console.log(counter());
console.log(counter());

// Example usage: const newCounter = counter();
// newCounter(); // 1
// newCounter(); // 2

// ==== Challenge 3: Create a counter function with an object that can increment and decrement ====
const counterFactory = () => {
  // Return an object that has two methods called `increment` and `decrement`.
  const count = {
    // `increment` should increment a counter variable in closure scope and return it.
    increment: function() {
      let counter = 0;
      function increaseFunc() {
        return counter++;
      }
      return increaseFunc;
    },
    // `decrement` should decrement the counter variable and return it.
    decrement: function() {
      let counter = 0;
      function decreaseFunc() {
        return counter--;
      }
      return decreaseFunc;
    }
  };
  return count;
};

console.log(counterFactory().increment());
console.log(counterFactory());
console.log(counterFactory());
