let string = "the Munsters are CREEPY and Spooky.";
// => The munsters are creepy and spooky.
let firstLetter = string.charAt(0);
let remainingString = string.slice(1);
let newStr =  firstLetter.toUpperCase() + remainingString.toLowerCase();
console.log(newStr);


