//REGULAR EXPRESSIONS

// regix - username

let username = "JackOfAllTrades";
let userCheck = /(?:^[A-Z]{2,}|^[A-Z][0-9]{2})[0-9]*$/i; // Change this line
let result = userCheck.test(username);

// 1) Usernames can only use alpha-numeric characters.

// 2) The only numbers in the username have to be at the end. There can be zero or more of them at the end. Username cannot start with the number.

// 3) Username letters can be lowercase and uppercase.

// 4) Usernames have to be at least two characters long. A two-character username can only use alphabet letters as characters.

// Regex look aheads

// Use lookaheads in the pwRegex to match passwords that are greater than 5 characters long, do not begin with numbers, and have two consecutive digits.

let sampleWord = "astronaut";
let pwRegex = /^\D(?=.*\d{2}.*)(?=.{5,})/; 
let result = pwRegex.test(sampleWord);


// Regex - mixed groupings

let myString = "Eleanor Roosevelt";
let myRegex = /(Franklin|Eleanor)\s.*Roosevelt/; 
let result = myRegex.test(myString); 

// Regex - capture groups and reusing patterns

// Use capture groups in reRegex to match numbers that are repeated only three times in a string, each separated by a space.

let repeatNum = "42 42 42";
let reRegex = /^(\d+)\s\1\s\1$/; 
let result = reRegex.test(repeatNum);

//Regex - remove empty space from beginning and end of strings

let hello = "   Hello, World!  ";
let wsRegex = /^\s*(.*\S)\s*$/; 
let result = hello.replace(wsRegex, '$1'); 

// Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes.

function spinalCase(str) {

  // puts space before each captial letter besides begining
  str = str.split("");
  for(let i = str.length - 1; i > 0; i--) {
    if (str[i].match(/[A-Z]/) && str[i - 1].match(/[a-zA-Z]/)) {
      str.splice(i, 0, " ");
    }
  }
  str = str.join("");

  // replaces spaces of any size and underscores with "-"
  let re = /[_]|\s+/g;
  str = re[Symbol.replace](str, "-");

  return str.toLowerCase();
}

spinalCase('ThisIs Spinal Tap');
