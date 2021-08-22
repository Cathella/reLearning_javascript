{
  // var lets you create global variables.
  // dont use it at any time
  var cheese = `gouda`
}

console.log(cheese) // gouda

{
  // let will return a reference error
  let cheese = `gouda`
}

console.log(cheese) // gouda