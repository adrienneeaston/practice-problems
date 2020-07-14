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
  let newArr = [];
  let resultArr = [];
  createArr(arr);

  for(let i = newArr.length - 1; i > 0; i--) {
    for(let j = 0; j < newArr[i].length; j ++) {
      if(!resultArr.includes(newArr[i][j])) {
        resultArr.push(newArr[i][j]);
      } else {
        // if not unique, do we have enough?
      }
    }
  }
  console.log(resultArr);

  function createArr(arr) {
    let low = 0;
    let high = 0;

    if(arr[0] > arr[1]) {
      high = arr[0];
      low = arr[1];
    } else {
      high = arr[1];
      low = arr[0];
    }

    for(let i = low; i <= high; i++) {
      let elemArr = [];
      newArr.push(factor(i));
    }
    return newArr;
  }

  function factor(num) {
    let n = num;
    let arr = [];
    while(n % 2 === 0) {
      arr.push(2);
      n = n / 2;
    }
    for(let i = 3; i <= Math.sqrt(num); i+=2) {
      if(n % i === 0) {
        arr.push(i);
        n = n / i;
      }
    }
    if(n > 2) {
      arr.push(n);
    }
    return arr;
  };

  return newArr;
};

// smallestCommons([1,6]);
console.log(smallestCommons([1,6]));
// console.log(factor(100));


