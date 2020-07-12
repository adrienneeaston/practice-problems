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


