// Add Key-Value Pairs to JavaScript Objects
let foods = {
  apples: 25,
  oranges: 32,
  plums: 28
};
foods.bananas = 13;
foods.grapes = 35;
foods.strawberries = 27;
console.log(foods);

// Modify an Object Nested Within an Object
let userActivity = {
  id: 23894201352,
  date: 'January 1, 2017',
  data: {
    totalUsers: 51,
    online: 42
  }
};
userActivity.data.online = 45;
console.log(userActivity);

// Access Property Names with Bracket Notation
let foods = {
  apples: 25,
  oranges: 32,
  plums: 28,
  bananas: 13,
  grapes: 35,
  strawberries: 27
};

function checkInventory(scannedItem) {
  return foods[scannedItem];
}
console.log(checkInventory("apples"));

// Use the delete Keyword to Remove Object Properties
let foods = {
  apples: 25,
  oranges: 32,
  plums: 28,
  bananas: 13,
  grapes: 35,
  strawberries: 27
};

delete foods.oranges;
delete foods.plums;
delete foods.strawberries;
console.log(foods);

// Check if an Object has a Property
let users = {
  Alan: {
    age: 27,
    online: true
  },
  Jeff: {
    age: 32,
    online: true
  },
  Sarah: {
    age: 48,
    online: true
  },
  Ryan: {
    age: 19,
    online: true
  }
};

// users.hasOwnProperty('Alan');
// 'Alan' in users; - in keyword

function isEveryoneHere(userObj) {
  if (userObj.hasOwnProperty('Alan') && userObj.hasOwnProperty('Sarah') && userObj.hasOwnProperty('Ryan') && userObj.hasOwnProperty('Jeff')) {
    return true;
  }
  return false;
}
console.log(isEveryoneHere(users));

// Iterate Through the Keys of an Object with a for...in Statement
function countOnline(usersObj) {
  let result = 0;

  for (let user in usersObj) {
    if (usersObj[user].online === true) {
      result++;
    }
  }
  return result;
}

// Generate an Array of All Object Keys with Object.keys()
let users = {
  Alan: {
    age: 27,
    online: false
  },
  Jeff: {
    age: 32,
    online: true
  },
  Sarah: {
    age: 48,
    online: false
  },
  Ryan: {
    age: 19,
    online: true
  }
};

function getArrayOfUsers(obj) {
  return Object.keys(obj);
}
console.log(getArrayOfUsers(users));


