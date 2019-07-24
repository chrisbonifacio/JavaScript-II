// Create a higher order function and invoke the callback function to test your work. You have been provided an example of a problem and a solution to see how this works with our items array.  Study both the problem and the solution to figure out the rest of the problems.

const items = [
  "Pencil",
  "Test Item",
  "Notebook",
  "yo-yo",
  "Gum",
  "Pencil",
  "Gum",
  "yo-yo",
  "Test Item",
  "Notebook"
];

/* 

  //Given this problem: 
  
  function firstItem(arr, cb) {
    // firstItem passes the first item of the given array to the callback function.
  }

  // Potential Solution:

  // Higher order function using "cb" as the call back
  function firstItem(arr, cb) {
    return cb(arr[0]);
  }

  // Function invocation 
  firstItem(items, function(first) {
    console.log(first)
  });

*/

function getLength(arr, cb) {
  // getLength passes the length of the array into the callback.
  return cb(arr.length);
}
getLength(items, function(length) {
  console.log(length);
});

function last(arr, cb) {
  // last passes the last item of the array into the callback.
  return cb(arr[arr.length - 1]); // gets last item from array
}

last(items, function(last) {
  console.log(last);
});

function sumNums(x, y, cb) {
  // sumNums adds two numbers (x, y) and passes the result to the callback.
  return cb(x + y);
}

sumNums(3, 5, function(sum) {
  console.log(sum);
});

function multiplyNums(x, y, cb) {
  // multiplyNums multiplies two numbers and passes the result to the callback.
  return cb(x * y);
}

multiplyNums(12, 12, function(product) {
  console.log(product);
});

function contains(item, list, cb) {
  // contains checks if an item is present inside of the given array/list.
  return cb(list.includes(item));
  // Pass true to the callback if it is, otherwise pass false.
}

contains("yo-yo", items, function(test) {
  console.log(test);
});

/* STRETCH PROBLEM */

function removeDuplicates(array, cb) {
  // removeDuplicates removes all duplicate values from the given array.
  // Do not mutate the original array.

  // we use filter() to return a new array of items that meet a condition
  let newArray = array.filter(function(item, index) {
    // for the condition we use indexOf() to return the first index of the item passed as an argument,
    // and checks if it's index matches the current index in the loop. Only the first item will match and be added to the new array. The duplicates further in the array have indexes that don't match the first found item so they return false and do not get added.
    return array.indexOf(item) === index;
  });
  // Pass the duplicate free array to the callback function.
  return cb(newArray);
}

removeDuplicates(items, function(test) {
  console.log(test);
});
