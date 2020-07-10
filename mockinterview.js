function compress(str) {
  let arr = [];
  let tempValue = str[0];
  let counter = 0;
  for(let i = 1; i < str.length; i++) {
    counter++;
    console.log(i, counter, tempValue, str[1]);
    if(str[i] !== tempValue) {
      arr.push(str[i - 1]);
      arr.push(counter);
      tempValue = str[i];
      counter = 0;
    }
    if(i === str.length - 1) {
      arr.push(str[i]);
      arr.push(counter + 1);
    }
  };
  if(str.length >= arr.length) {
    return arr.join("");
  };
  return str;
};

console.log(compress("xaaaaaaaabcc"));