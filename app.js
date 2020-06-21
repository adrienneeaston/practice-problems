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