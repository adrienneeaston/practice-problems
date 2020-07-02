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