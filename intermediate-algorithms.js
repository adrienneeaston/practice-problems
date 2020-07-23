// INTERMEDIATE ALGORITHMS

// We'll pass you an array of two numbers. Return the sum of those two numbers plus the sum of all the numbers between them. The lowest number will not always come first.

function sumAll(arr) {
  let lesserValue = Math.min(...arr);
  let greaterValue = Math.max(...arr);
  let total = 0;

  while(lesserValue < greaterValue + 1) {
    total = total + lesserValue;
    lesserValue++;
  }

  return total;
}

console.log(sumAll([4, 1]));

// Compare two arrays and return a new array with any items only found in one of the two given arrays, but not both. In other words, return the symmetric difference of the two arrays.

function diffArray(arr1, arr2) {
  var newArr = [];

  arr1.forEach(element => {
    if(!arr2.includes(element)) {
      newArr.push(element);
    }
  })

  arr2.forEach(element => {
    if(!arr1.includes(element)) {
      newArr.push(element);
    }
  })

  return newArr;
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);

// arguments object - You will be provided with an initial array (the first argument in the destroyer function), followed by one or more arguments. Remove all elements from the initial array that are of the same value as these arguments.

function destroyer(arr) {
  let args = Array.from(arguments).slice(1);

  for (let i = arr.length - 1; i > -1; i--) {
    for (let j = 0; j <= args.length; j++) {
      if(arr[i] === args[j]){
        arr.splice(i, 1);
      }
    }
  }

  return arr;
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);

// Make a function that looks through an array of objects (first argument) and returns an array of all objects that have matching name and value pairs (second argument). Each name and value pair of the source object has to be present in the object from the collection if it is to be included in the returned array.

function whatIsInAName(collection, source) {
  var arr = [];
  // Only change code below this line

  let element = collection[0];
  let keys = Object.keys(source);
  let key1 = keys[0];
  console.log("value", source[key1])


  keys.forEach(key => {
     if(element[key1] === source[key]){
       arr.push(element);
     }
  })
 

  // collection.forEach(element => {
  //   if(element.last === source.last) {
  //     arr.push({first : element.first, last : element.last});
  //   }
  // }) 
  // Only change code above this line
  console.log(arr);
  return arr;
}

// whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });

console.log(whatIsInAName([{ first: "Tybalt", last: "Capulet", color: "green" }], { first: "Tybalt", last: "Capulet" }));

// Make a function that looks through an array of objects (first argument) and returns an array of all objects that have matching name and value pairs (second argument). Each name and value pair of the source object has to be present in the object from the collection if it is to be included in the returned array.

function whatIsInAName(collection, source) {
  var arr = [];

  // Only change code below this line

  collection.forEach(element => {
    let match = true;
    for (const key in source){
      if (source[key] !== element[key]) {
        match = false;
      }
    }
    if(match) {
      arr.push(element);
    }
  });
  return arr;

  // return collection.filter(element => {
  //   let match = true;
  //   for(const key in source){
  //     if(source[key] !== element[key]) {
  //       match = false;
  //     }
  //   }

  //   return match;
  // });
  // Only change code above this line
}

whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });

// Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes.

function spinalCase(str) {

  let re = /[_]|\s|((?<=[A-Za-z])[A-Z])/g;
  str = re[Symbol.replace](str, '-$1');

  return str.toLowerCase();
}

spinalCase('ThisIs Spinal Tap'); 

// change word to piglatin

function translatePigLatin(str) {

  // let reCons = /^[A-Za-z][^aeiou]/;

  let reCon = /(^[A-Za-z+](?=[aeiou]))(\w*)/;

  let reVowel = /(^[A-Za-z])(\w*)/;
  // str = re[Symbol.replace](str, '$1$2way')

 if(/^[aeiou]/.test(str)) {
  str = reVowel[Symbol.replace](str, '$1$2way')
  console.log(str);
 }
 str = reCon[Symbol.replace](str, '$2$1ay')
  console.log(str);

  return str;
}

translatePigLatin("consonant");

// pig latin

function translatePigLatin(str) {

  let reCon = /(^[^aeiou]+)(\w*)/gi;

  if(/^[aeiou]/.test(str)) {
    str = str + "way";
  } else {
    str = reCon[Symbol.replace](str, '$2$1ay')
  };
  return str;
}

translatePigLatin("eight");

// Perform a search and replace on the sentence using the arguments provided and return the new sentence.

// First argument is the sentence to perform the search and replace on.

// Second argument is the word that you will be replacing (before).

// Third argument is what you will be replacing the second argument with (after).

// Note
// Preserve the case of the first character in the original word when you are replacing it. For example if you mean to replace the word "Book" with the word "dog", it should be replaced as "Dog"

function myReplace(str, before, after) {
  let flagBefore;
  let flagAfter;
  if(before[0] === before[0].toUpperCase()) {
    flagBefore = true;
  }
  if(after[0] === after[0].toUpperCase()) {
    flagAfter = true;
  }
  if(flagBefore !== flagAfter && flagBefore === true) {
    after = after.split(after[0]).join(after[0].toUpperCase());
    return str.split(before).join(after);
  }
  return str.split(before).join(after);
}

myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");

// The DNA strand is missing the pairing element. Take each character, get its pair, and return the results as a 2d array.

// Base pairs are a pair of AT and CG. Match the missing element to the provided character.

// Return the provided character as the first element in each array.

function pairElement(str) {
  let result = []; 
  for(let i = 0; i < str.length; i++){
    result.push(checkPair(str[i]));
  };

  function checkPair(elem) {
    let elemArr = [];
    if(elem === "A") {
      elemArr.push(elem);
      elemArr.push("T");
    } else if(elem === "T") { 
      elemArr.push(elem);
      elemArr.push("A");   
    } else if(elem === "C") {
      elemArr.push(elem);
      elemArr.push("G");   
    } else if(elem === "G") {
      elemArr.push(elem);
      elemArr.push("C");   
    }
    return elemArr;
  };

  return result;
}

pairElement("GCG");

// Find the missing letter in the passed letter range and return it.
// If all letters are present in the range, return undefined.

function fearNotLetter(str) {
  let alpha = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  let index = alpha.findIndex(element => element === str[0]);

  for(let i = 0; i < str.length; i++) {
    if(str[i] !== alpha[index]) {
      return alpha[index];
    } else {
      index++;
    }
  }
  return undefined;
}

fearNotLetter("abce");

// unknown number of arguments - Write a function that takes two or more arrays and returns a new array of unique values in the order of the original provided arrays.

function uniteUnique(arr) {
  let args = [...arguments];
  let newArr = [];
  for(let i = 0; i < args.length; i++) {
    for(let j = 0; j < args[i].length; j++) {
      if(newArr.includes(args[i][j]) === false) {
        newArr.push(args[i][j]);
      }
    }
  }
  return newArr;
}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);

// passing a function into regex replace - Convert the characters &, <, >, " (double quote), and ' (apostrophe), in a string to their corresponding HTML entities.

function convertHTML(str) {

  function convertChar(char) {
    if(char === "&") {
      char = "&amp;";
    } else if(char === "<") {
      char = "&lt;";
    } else if(char === ">") {
      char = "&gt;"
    } else if(char === "\"") {
      char = "&quot;";
    } else if (char === "'") {
      char = "&apos;";
    }
    return char;
  };

  let reg = /&|<|>|"|'/g;
  str = str.replace(reg, convertChar);
  return str;
}

convertHTML("Dolce & Gabbana");

// Given a positive integer num, return the sum of all odd Fibonacci numbers that are less than or equal to num.

function sumFibs(num) {
  if(num <= 0) {
    return 0;
  }

  let arr = [1, 1];
  let total = 0;

  while(arr[0] + arr[1] <= num) {
    arr.unshift(arr[0] + arr[1]);
  } 
  
  total = arr.filter(element => element % 2 === 1).reduce((a, b) => a + b);

  return total;
}

sumFibs(1000);

// A prime number is a whole number greater than 1 with exactly two divisors: 1 and itself. For example, 2 is a prime number because it is only divisible by 1 and 2. In contrast, 4 is not prime since it is divisible by 1, 2 and 4.

// Rewrite sumPrimes so it returns the sum of all prime numbers that are less than or equal to num.

function sumPrimes(num) {
  let arr = [];
  for(let i = 2; i <= num; i++) {
    let flag = true;
    for(let j = 2; j < i; j++){
      if(i % j === 0) {
        flag = false;
      }
    }
    if(flag == true) {
      arr.push(i);
    }
  }
  return arr.reduce((a, b) => a + b);
};

sumPrimes(10);

// Find the smallest common multiple of the provided parameters that can be evenly divided by both, as well as by all sequential numbers in the range between these parameters.

function smallestCommons(arr) {

  let obj = {};
  let product = 1;

  function calcProduct() {
    createObj(arr);
    console.log(obj);
    for(const property in obj) {
      product = product * Math.pow(property, obj[property])
    }
    return product;
  }

  function createObj(obj) {
    let min = Math.min(arr[0], arr[1]);
    let max = Math.max(arr[0], arr[1]);

    for(let i = min; i <= max; i++) {
      updateObj(i);
    }
    return obj;
  }

  function updateObj(num) {
    let n = num;
    let arr = [];
    let counter = 0;
    while(n % 2 === 0) {
      counter++;
      n = n / 2;
    }
    if(!obj[2] || counter > obj[2]) {
      obj[2] = counter;
    } 

    for(let i = 3; i <= Math.sqrt(num); i+=2) {
      counter = 0;
      while(n % i === 0) {
        counter++;
        n = n / i;
      }
      if(!obj[i] || counter > obj[i]) {
        obj[i] = counter;
      }
    } 

    if(!obj[n]) {
      obj[n] = 1;         
    }
  };

  calcProduct();
  return product;
};

smallestCommons([1,6]);

// Given the array arr, iterate through and remove each element starting from the first element (the 0 index) until the function func returns true when the iterated element is passed through it.

// Then return the rest of the array once the condition is satisfied, otherwise, arr should be returned as an empty array.

function dropElements(arr, func) {
  let i = 0;
  while(func(arr[i]) == false) {
    arr.shift(arr[i]);
  }
  console.log(arr);
  return arr;
}
 
dropElements([1, 2, 3], function(n) {return n < 3; });

// Recursion - Flatten a nested array. You must account for varying levels of nesting.

function steamrollArray(arr, flat=[]) {
  arr.forEach(element => {
    if(Array.isArray(element)) {
      steamrollArray(element, flat);
    } else {
      flat.push(element);
    }
  });
  return flat;
}
  
steamrollArray([1, [2], [3, [[4]]]]);

// Return an English translated sentence of the passed binary string.
// The binary string will be space separated.

function binaryAgent(str) {
  str = str.split(" ");
  str = str.map(element => {
    return convertToLetter(element);
  });

  function convertToLetter(numStr) {
    let hex = parseInt(numStr, 2);
    let letter = String.fromCharCode(hex);
    return letter;
  }

  return str.join("");
}

binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111");

// Check if the predicate (second argument) is truthy on all elements of a collection (first argument).

function truthCheck(collection, pre) {
  let flag = true;
  for(let i = 0; i < collection.length; i++) {
    if(!collection[i][pre]) {
      flag = false;
    }
  }

  return flag;
}

truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy", "sex": "male"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex");

// Create a function that sums two arguments together. If only one argument is provided, then return a function that expects one argument and returns the sum.
 
function addTogether() {
  let arg1 = arguments[0];
  let arg2 = arguments[1];

  function moreSum(num) {
    if(typeof (arg1 + num) === "number") {
      return arg1 + num;
    } else {
      return undefined;
    }
  };

  if(typeof arg1 !=="number") {
    return undefined;
  };

  if(arg2 === undefined){
    return moreSum;
  };

  return moreSum(arg2);
  
};

addTogether(2,3);

// Fill in the object constructor with the following methods below:

// getFirstName()
// getLastName()
// getFullName()
// setFirstName(first)
// setLastName(last)
// setFullName(firstAndLast)
// Run the tests to see the expected output for each method. The methods that take an argument must accept only one argument and it has to be a string. These methods must be the only available means of interacting with the object.

var Person = function(firstAndLast) {
  let firstName;
  let lastName;
 
  this.getFirstName = function() {
    return firstName;
  };
  this.getLastName = function() {
    return lastName;
  };
  this.getFullName = function() {
    return firstName + " " + lastName;
  };
  this.setFirstName = function(first) {
    firstName = first;
  };
  this.setLastName = function(last) {
    lastName = last;
  };
  this.setFullName = function(firstAndLast) {
    let arr = firstAndLast.split(" ");
    firstName = arr[0];
    lastName = arr[1];
  };

  this.setFullName(firstAndLast);
};

var bob = new Person('Bob Ross');
bob.getFullName();