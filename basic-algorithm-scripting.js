// BASIC ALGORITHM SCRIPTING

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

