// Iterate with JavaScript While Loops
var myArray = [];
var i = 5;
while(i >= 0) {
  myArray.push(i);
  i--;
}
console.log(myArray)

// Iterate with JavaScript For Loops
var myArray = [];
for (var i = 1; i <= 5; i++) {
  myArray.push(i)
}
console.log(myArray)

// Iterate Odd Numbers With a For Loop
var myArray = [];
for (var i = 1; i <= 9; i += 2) {
  myArray.push(i);
}
console.log(myArray);

// Count Backwards With a For Loop
var myArray = [];
for (var i = 9; i >= 1; i -= 2) {
  myArray.push(i);
}
console.log(myArray)

// Iterate Through an Array with a For Loop
var myArr = [ 2, 3, 4, 5, 6];
var total = 0;
for (var i = 0; i < myArr.length; i++) {
  console.log(total += myArr[i]); 
}

