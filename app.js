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

