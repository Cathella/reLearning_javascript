// Use an Array to Store a Collection of Data
let yourArray = [1, 99, "hello", "there", true];

// Access an Array's Contents Using Bracket Notation
yourArray[1] = "nope";

// Add Items to an Array with push() and unshift()
yourArray.push(7, 'VIII', 9); // add to the end of the array
yourArray.unshift('I', 2, 'three'); // add to the beginning of the array

// Remove Items from an Array with pop() and shift()
function popShift(arr) {
  let popped = arr.pop(); // pop() removes an element from the end of an array
  let shifted = arr.shift(); // shift() removes an element from the beginning
  return [shifted, popped];
}

// Remove Items Using splice()
const arr = [2, 4, 5, 1, 7, 5, 2, 1];
arr.splice(0, 1); // splice() - remove any number of consecutive elements from anywhere in an array.
arr.splice(3);

// Add Items Using splice()
function htmlColorNames(arr) {
  // we pass the following to splice(): The index at which to begin deleting elements (0), 
  // the number of elements to be deleted (2), and the remaining arguments ('DarkSalmon', 'BlanchedAlmond') 
  // will be inserted starting at that same index
  arr.splice(0, 2, 'DarkSalmon', 'BlanchedAlmond')
  return arr;
}

// Copy Array Items Using slice()
function forecast(arr) {
  // slice() copies or extracts a given number of elements to a new array, 
  // slice() takes only 2 parameters — 
  // the first is the index at which to begin extraction, 
  // and the second is the index at which to stop extraction 
  // (extraction will occur up to, but not including the element at this index)
  let weather = arr.slice(2, 4);
  return weather;
}
console.log(forecast(['cold', 'rainy', 'warm', 'sunny', 'cool', 'thunderstorms']));

// Copy an Array with the Spread Operator
function copyMachine(arr, num) {
  let newArr = [];
  while (num >= 1) {
    newArr.push([...arr])
    num--;
  }
  return newArr;
}
console.log(copyMachine([true, false, true], 2));

// Combine Arrays with the Spread Operator
function spreadOut() {
  let fragment = ['to', 'code'];
  let sentence = ['learning', ...fragment, 'is', 'fun'];
  return sentence;
}

// Check For The Presence of an Element With indexOf()
function quickCheck(arr, elem) {
  if (arr.indexOf(elem) >= 0) {
    return true;
  }
  return false;
}

// Iterate Through All an Array's Items Using For Loops
function filteredArray(arr, elem) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].indexOf(elem) == -1) {
      newArr.push(arr[i])
    }
  }
  return newArr;
}
console.log(filteredArray([[3, 2, 3], [1, 6, 3], [3, 13, 26], [19, 3, 9]], 3));

// Create complex multi-dimensional arrays
let myNestedArray = [
  'level 1',
  ['level 2'],
  [['deep']],
  [[['deeper']]],
  [[[['deepest']]]]
];

// Access Multi-Dimensional Arrays With Indexes
var myArray = [[1,2,3], [4,5,6], [7,8,9], [[10,11,12], 13, 14]];
var myData = myArray[2][1]; // 8

// Manipulate Arrays With push()
// - way to append data to the end of an array
var myArray = [["John", 23], ["cat", 2]];
myArray.push(["dog", 3]);

// Manipulate Arrays With pop()
// - function to remove the last item from myArray
var myArray = [["John", 23], ["cat", 2]];
var removedFromMyArray = myArray.pop();

// Manipulate Arrays With shift() 
// - function to remove the first item from myArray
var myArray = [["John", 23], ["dog", 3]];
var removedFromMyArray = myArray.shift();

// Manipulate Arrays With unshift()
var myArray = [["John", 23], ["dog", 3]];
myArray.shift();
myArray.unshift(["Paul", 35], ["dog", 3]);

// Shopping List
var myList = [
  ["soap", 1000], 
  ["cooking oil", 500], 
  ["tomatoes", 300], 
  ["onions", 200], 
  ["curry powder", 100]
];


