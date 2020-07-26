// BASIC DATA STRUCTURES

// data structures - slice

function forecast(arr) {
  let newArray = arr.slice(2, 4);
  return newArray;
}
console.log(forecast(['cold', 'rainy', 'warm', 'sunny', 'cool', 'thunderstorms']));

// data structures - spread operators

function copyMachine(arr, num) {
  let newArr = [];
  while (num >= 1) {
    newArr.push([...arr])
    num--;
  }
  return newArr;
}

console.log(copyMachine([true, false, true], 2));

// More spread operators

function spreadOut() {
  let fragment = ['to', 'code'];
  let sentence = ['learning', ...fragment, 'is', 'fun'];
  return sentence;
}

console.log(spreadOut());

// let...in

function countOnline(usersObj) {
  let counter = 0;
  for (let user in usersObj) {
    if(usersObj[user].online == true) {
      counter++;   
    }
  }
  return counter;
}

// Object.keys();

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

// Modify an array stored in an object

let user = {
  name: 'Kenneth',
  age: 28,
  data: {
    username: 'kennethCodesAllDay',
    joinDate: 'March 26, 2016',
    organization: 'freeCodeCamp',
    friends: [
      'Sam',
      'Kira',
      'Tomo'
    ],
    location: {
      city: 'San Francisco',
      state: 'CA',
      country: 'USA'
    }
  }
};

function addFriend(userObj, friend) {
  let friendArr = userObj.data.friends;
  friendArr.push(friend);
  return friendArr;
}

console.log(addFriend(user, 'Pete'));

