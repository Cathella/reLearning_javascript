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
