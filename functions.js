// Write Reusable JavaScript with Functions
function reusableFunction() {
  console.log("Hi World");
}
reusableFunction();

// Passing Values to Functions with Arguments
function functionWithArgs(param1, param2) {
  let sum = param1 + param2;
  console.log(sum);
}
functionWithArgs(4, 90);

// Global Scope and Functions
// scope refers to the visibility of variables.
// - Variables which are defined outside of a 
// - function block have Global scope
// - Variables which are declared without the var keyword 
// - are automatically created in the global scope.
// Declare the myGlobal variable below this line
var myGlobal = 10;

function fun1() {
  // Assign 5 to oopsGlobal Here
  oopsGlobal = 5;
}

function fun2() {
  var output = "";
  if (typeof myGlobal != "undefined") {
    output += "myGlobal: " + myGlobal;
  }
  if (typeof oopsGlobal != "undefined") {
    output += " oopsGlobal: " + oopsGlobal;
  }
  console.log(output);
}

// Local Scope and Functions
function myLocalScope() {
  var myVar = 5; 
  console.log('inside myLocalScope', myVar);
}
myLocalScope();
console.log('outside myLocalScope', myVar); // myVar is not defined outside of myLocalScope

// Global vs. Local Scope in Functions
// The function myOutfit will return the string sweater 
// because the local version of the variable is present.
var outerWear = "T-Shirt";
function myOutfit() {
  var outerWear = "sweater";
  return outerWear;
}
myOutfit();

// Return a Value from a Function with Return
function timesFive(num) {
  return num * 5;
}
var answer = timesFive(5);

// Understanding Undefined Value returned from a Function
var sum = 0;
function addThree() {
  sum = sum + 3;
}
// - The function will change the global sum variable 
// - but the returned value of the function is undefined.
function addFive() {
  sum = sum + 5;
}
addThree();
addFive();

// Assignment with a Returned Value
var processed = 0;
function processArg(num) {
  return (num + 3) / 5;
}
processed = processArg(7);

