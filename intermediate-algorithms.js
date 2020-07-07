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

