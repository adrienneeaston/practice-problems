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