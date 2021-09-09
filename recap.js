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

// Iterate through all an array's items using for loops
// others are:- every(), forEach(), map(), for()

function filteredArray(arr, elem) {
  let newArr = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i].indexOf(elem) == -1) {
      newArr.push(arr[i]);
    }
  }

  return newArr;
}

// Add key-value pairs to JavaScript objects
let foods = {
  apples: 25,
  oranges: 32,
  plums: 28
};

foods.bananas = 13; // use the dot operator.
foods.grapes = 35;
foods.strawberries = 27;
foods['soft drinks'] = 10;

// Modify an Object Nested Within an Object
let userActivity = {
  id: 238942013552,
  date: 'September 9, 2021',
  data: {
    totalUsers: 51,
    online: 42
  }
};

userActivity.data.online = 45;

