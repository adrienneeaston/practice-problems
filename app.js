//FROM FREE CODE CAMP

//arrays, objects, for loops

var contacts = [
  {
      "firstName": "Akira",
      "lastName": "Laine",
      "number": "0543236543",
      "likes": ["Pizza", "Coding", "Brownie Points"]
  },
  {
      "firstName": "Harry",
      "lastName": "Potter",
      "number": "0994372684",
      "likes": ["Hogwarts", "Magic", "Hagrid"]
  },
  {
      "firstName": "Sherlock",
      "lastName": "Holmes",
      "number": "0487345643",
      "likes": ["Intriguing Cases", "Violin"]
  },
  {
      "firstName": "Kristian",
      "lastName": "Vos",
      "number": "unknown",
      "likes": ["JavaScript", "Gaming", "Foxes"]
  }
];


function lookUpProfile(name, prop){
  for (var i = 0; i < contacts.length; i++) {
      if(name === contacts[i].firstName) {
          if(contacts[i][prop]) {
              return contacts[i][prop];  
          } 
          return "No such property";
      }
  }
  return "No such contact"
}

lookUpProfile("Akira", "likes");

//recursion

function rangeOfNumbers(startNum, endNum) {
  if (startNum > endNum) {
    return [];
  }
  const countArray = rangeOfNumbers(startNum, endNum - 1);
  countArray.push(endNum);
  return countArray;
};

// Destructuring Assignment

const LOCAL_FORECAST = {
  yesterday: { low: 61, high: 75 },
  today: { low: 64, high: 77 },
  tomorrow: { low: 68, high: 80 }
};

const { today: { low: lowToday, high: highToday }} = LOCAL_FORECAST;

// destructuring assignments - swaps assignments

let a = 8, b = 6;

[a, b] = [b, a];

console.log(a); // 6
console.log(b); // 8

// destructuring using rest parameter

const source = [1,2,3,4,5,6,7,8,9,10];
function removeFirstTwo(list) {
  "use strict";
  const [a, b, ...arr] = list; 
  return arr;
}
const arr = removeFirstTwo(source);

console.log(arr);

// Destructuring Assignment to Pass an Object as a Function's Parameters

const stats = {
  max: 56.78,
  standard_deviation: 4.34,
  median: 34.54,
  mode: 23.87,
  min: -0.75,
  average: 35.85
};

const half = ({ max, min }) => (max + min) // 2.0;

// template literals

const result = {
  success: ["max-length", "no-amd", "prefer-arrow-functions"],
  failure: ["no-var", "var-on-top", "linebreak"],
  skipped: ["id-blacklist", "no-dup-keys"]
};

function makeList(arr) {
  "use strict";
  const resultDisplayArray = [];
  for (let i = 0; i < arr.length; i++) {
    resultDisplayArray.push(`<li class="text-warning">${arr[i]}</li>`);
  }
  return resultDisplayArray;
}

const resultDisplayArray = makeList(result.failure);

console.log(resultDisplayArray);

// Concise Object Literal Declarations Using Object Property Shorthand

const createPerson = (name, age, gender) => {
  "use strict";
  return ({ name, age, gender });
};

createPerson("Adrienne", 44, "female");

// getters and setters in an object

class Thermostat {
  constructor(fahrenheit) {
    this._fahrenheit = fahrenheit;
  }

  get temperature() {
    return 5/9 * (this._fahrenheit - 32);
  }

  set temperature(celcius) {
    this._fahrenheit = celcius * 9.0 / 5 + 32;
  }
}

const thermos = new Thermostat(76); // Setting in Fahrenheit scale
let temp = thermos.temperature; // 24.44 in Celsius
thermos.temperature = 26;
temp = thermos.temperature; // 26 in Celsius

// promise, then, and catch

const makeServerRequest = new Promise((resolve, reject) => {
  let responseFromServer = false;
    
  if(responseFromServer) {
    resolve("We got the data");
  } else {  
    reject("Data not received");
  }
});

makeServerRequest.then(result => {
  console.log(result);
});

makeServerRequest.catch(error => {
  console.log(error);
});

// alternative

// makeServerRequest.then(result => {
//   console.log(result);
// }).catch(error => {
//   console.log(error);
// });

// alternative

// function logger(whatever) {
//   console.log(whatever);
// }

// makeServerRequest.then(logger).catch(error => {
//   console.log(error);
// });


// regix - username

let username = "JackOfAllTrades";
let userCheck = /(?:^[A-Z]{2,}|^[A-Z][0-9]{2})[0-9]*$/i; // Change this line
let result = userCheck.test(username);

// 1) Usernames can only use alpha-numeric characters.

// 2) The only numbers in the username have to be at the end. There can be zero or more of them at the end. Username cannot start with the number.

// 3) Username letters can be lowercase and uppercase.

// 4) Usernames have to be at least two characters long. A two-character username can only use alphabet letters as characters.


// Regex look aheads

// Use lookaheads in the pwRegex to match passwords that are greater than 5 characters long, do not begin with numbers, and have two consecutive digits.

let sampleWord = "astronaut";
let pwRegex = /^\D(?=.*\d{2}.*)(?=.{5,})/; 
let result = pwRegex.test(sampleWord);


// Regex - mixed groupings

let myString = "Eleanor Roosevelt";
let myRegex = /(Franklin|Eleanor)\s.*Roosevelt/; 
let result = myRegex.test(myString); 

// Regex - capture groups and reusing patterns

// Use capture groups in reRegex to match numbers that are repeated only three times in a string, each separated by a space.

let repeatNum = "42 42 42";
let reRegex = /^(\d+)\s\1\s\1$/; 
let result = reRegex.test(repeatNum);

//Regex - remove empty space from beginning and end of strings

let hello = "   Hello, World!  ";
let wsRegex = /^\s*(.*\S)\s*$/; 
let result = hello.replace(wsRegex, '$1'); 

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

// Return largest numbers in array

function largestOfFour(arr) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    let temp = -Infinity;
    for (let j = 0; j < arr[i].length; j++) {
      if (arr[i][j] > temp) {
        temp = arr[i][j];
      }  
    }
    console.log(temp);
    newArr.push(temp);  
    
    // let high = Math.max.apply(null, arr[i]);
    // newArr.push(high);

  }
  return newArr;
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);

// comfirm ending of a string

function confirmEnding(str, target) {
  let newStr = str.split("").slice(str.length - target.length).join("");
  if (newStr == target) {
    return true
  }
  return false;
}

confirmEnding("Bastian", "n");

// Create a function that looks through an array (first argument) and returns the first element in the array that passes a truth test (second argument). If no element passes the test, return undefined.

function findElement(arr, func) {
  let num = 0;
  for (let i = 0; i < arr.length; i++) {
    if (func(arr[i]) == true) {
      num = arr[i];
      return num;
    }
  }
  return undefined;
}

findElement([1, 2, 3, 4], num => num % 2 === 0);

// Title Case a Senetence

function titleCase(str) {
  str = str.split(" ");
  for (let i = 0; i < str.length; i++) {
    let letter = str[i][0].toUpperCase();
    let moreLetters = str[i].slice(1).toLowerCase();
    str[i] = letter + moreLetters;
  }  
  return str.join(" ");
}

titleCase("I'm a little tea pot");

// You are given two arrays and an index.
// Use the array methods slice and splice to copy each element of the first array into the second array, in order.
// Begin inserting elements at index n of the second array.
// Return the resulting array. The input arrays should remain the same after the function runs.

function frankenSplice(arr1, arr2, n) {
  let newArr = [...arr2];
  newArr.splice(n, 0, ...arr1);
  return newArr;
}

frankenSplice([1, 2, 3], [4, 5, 6], 1);

// remove all falsey values from an array

function bouncer(arr) {
  for(let i = 0; i < arr.length; i++) {
    if (!arr[i]) {
      arr.splice(i, 1);
      i--;
    }
  }

// for(let i = arr.length - 1; i >= 0; i--) {
//   if (!arr[i]) {
//     arr.splice(i, 1);
//   }
// }

  return arr;
}

bouncer([7, "ate", "", false, 9]);

// Return the lowest index at which a value (second argument) should be inserted into an array (first argument) once it has been sorted. The returned value should be a number.

function getIndexToIns(arr, num) {
  arr.sort((a, b) => a - b);
  for (let i = 0; i <= arr.length; i++) {
    if (num <= arr[i]) {
      return i; 
    }
  }
  return arr.length;
}

// Return true if the string in the first element of the array contains all of the letters of the string in the second element of the array.

function mutation(arr) {
  let mainStr = arr[0].toLowerCase();
  let targetStr = arr[1].toLowerCase();
  for (let i = 0; i < targetStr.length; i++) {
    if (!mainStr.includes(targetStr[i])) {
      return false;
    }
  }
  return true;
}

mutation(["hello", "hey"]);

// Write a function that splits an array (first argument) into groups the length of size (second argument) and returns them as a two-dimensional array.

function chunkArrayInGroups(arr, size) {
  let newArr = [];
  let counter = 0;
  let start = 0;
  while (counter < arr.length/size) {
    newArr.push(arr.slice(start, start + size))
    counter++;
    start = start + size;
  }
  return newArr;
}

chunkArrayInGroups(["a", "b", "c", "d"], 2);

//Object oriented Propgramming - own properties

function Bird(name) {
  this.name = name;
  this.numLegs = 2;
}

let canary = new Bird("Tweety");
let ownProps = [];

for (let property in canary) {
  if(canary.hasOwnProperty(property)) {
    ownProps.push(property);
  }
}