// Use an array to store a collection of data
let yourArray = ["catherine", 1, "hello", 100, true];

// Access an array's contents using bracket notation
yourArray[1] = "is now a string";

// Add items to an array with push() and unshift()
yourArray.push(23); // adds elements to the end of an array
yourArray.unshift("hello"); // adds elements to the beginning.

// Check For The Presence of an Element With indexOf()
function quickcheck(arr, elem) {
  // basic if-statement
  if (arr.indexOf(elem) >= 0) {
    return true;
  } else {
    return false;
  }
}

// solution 2 - using the conditional operator.
function quickcheck2(arr, elem) {
  return arr.indexOf(elem) >= 0 ? true : false
}

// solution 3 
function quickcheck3(arr, elem) {
  return arr.indexOf(elem) != -1
}

// Iteration in javascript
// every(), forEach(), map(), for()

function filteredArray(arr, elem) {
  let newArr = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i].indexOf(elem) == -1) {
      newArr.push(arr[i]);
    }
  }
  
  return newArr;
}

   