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

