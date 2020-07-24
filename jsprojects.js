// Return true if the given string is a palindrome. Otherwise, return false.

function palindrome(str) {
  let regex = /[^a-zA-Z0-9]/g;
  str = str.replace(regex, "").toLowerCase();
  let arr = [];

  for(let i = str.length - 1; i >= 0 ; i--) {
    arr.push(str[i]);
  }

  if(str === arr.join("")) {
    return true; 
  };
 
  return false;
}

palindrome("eye");

// Convert the given number into a roman numeral.

function convertToRoman(num) {
  let arr = num.toString().split("");
  let index = arr.length - 1;

  // ones place
  if(arr[index] == 9) {
    arr[index] = "IX";
  } else if (arr[index] == 8) {
    arr[index] = "VIII";
  } else if (arr[index] == 7) {
    arr[index] = "VII";
  } else if (arr[index] == 6) {
    arr[index] = "VI";
  } else if (arr[index] == 5) {
    arr[index] = "V";
  } else if (arr[index] == 4) {
    arr[index] = "IV";
  } else if (arr[index] == 3) {
    arr[index] = "III";
  } else if (arr[index] == 2) {
    arr[index] = "II";
  } else if (arr[index] == 1) {
    arr[index] = "I";
  } else if (arr[index] == 0) {
    arr[index] = "";
  };
  if(index === 0) {
    return arr.join("");
  }
  index--;

  // tens place
  if(arr[index] == 9) {
  arr[index] = "XC";
  } else if(arr[index] == 8) {
    arr[index] = "LXXX";
  } else if(arr[index] == 7) {
    arr[index] = "LXX";
  } else if(arr[index] == 6) {
    arr[index] = "LX";
  } else if(arr[index] == 5) {
    arr[index] = "L";
  } else if(arr[index] == 4) {
    arr[index] = "XL";
  } else if(arr[index] == 3) {
    arr[index] = "XXX";
  } else if(arr[index] == 2) {
    arr[index] = "XX";
  } else if(arr[index] == 1) {
    arr[index] = "X";
  } else if(arr[index] == 0) {
    arr[index] = "";
  };
  if(index === 0) {
    return arr.join("");
  }
  index--;

  // hundreds place
  if(arr[index] == 9) {
    arr[index] = "CM";
  } else if(arr[index] == 8) {
    arr[index] = "DCCC";
  } else if(arr[index] == 7) {
    arr[index] = "DCC";
  } else if(arr[index] == 6) {
    arr[index] = "DC";
  } else if(arr[index] == 5) {
    arr[index] = "D";
  } else if(arr[index] == 4) {
    arr[index] = "CD";
  } else if(arr[index] == 3) {
    arr[index] = "CCC";
  } else if(arr[index] == 2) {
    arr[index] = "CC";
  } else if(arr[index] == 1) {
    arr[index] = "C";
  } else if(arr[index] == 0) {
    arr[index] = "";
  };
  if(index === 0) {
    return arr.join("");
  }
  index--;

  // thousands place
  if(arr[index] == 3) {
    arr[index] = "MMM";
  } else if(arr[index] == 2) {
    arr[index] = "MM";
  } else if(arr[index] == 1) {
    arr[index] = "M";
  } else if(arr[index] == 0) {
    arr[index] = "";
  };
  return arr.join("");
}

convertToRoman(2999);