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