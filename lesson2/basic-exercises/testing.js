const arr = [11];
arr.length = 4;
arr.push(undefined);
arr.push([]);
arr.push('');
arr["-1"] = 12; // doesn't change the length

console.log(arr.length);

let x = 2;

if (!x % 2) {
  console.log(x);
}
console.log(2);

/** Write a function which accomplishes what the string requests
 *   Your function should use the mechanism specifed (for, while, forEach, etc)
 *   Use the function name specified
 *   Log the result to the console
 */
 const obj = { text: "Remove occurences of the letter e after the word 'letter' in this sentence" }
 Object.freeze(obj);
 
 /**
  * BONUS: 
  * A single function should satisfy the strings defined 'obj' and the bonus objects below
  * The function should only take a single argument of type object
  * The function should be able to accomidate any word between the single quotes
  */
 const bonusObj1 = { text: "Remove occurances of the letter e after 'the' in this sentence" }
 const bonusObj2 = { text: "The letter e should not appear after the word 'not' in this sentence" }
 Object.freeze(bonusObj1);
 Object.freeze(bonusObj2);
 
 
 
 
 
 
 /** for loop - function name: forSolution */ 
function forSolution(obj) {
  let string = Object.values(obj).join('');
  let words = string.split(' ');

  let wordsBeforeLetter;
  let wordsAfterLetter;

  for (let index = 0; index < words.length; index++) {
    if(words[index] === 'letter') {
      wordsBeforeLetter = words.slice(0, index + 1).join(' ');
      wordsAfterLetter = words.slice(index + 1, words.length).join(' ');
      break;
    }
  }
  return wordsBeforeLetter + ' ' + wordsAfterLetter.replace(/e/gi, '');
}

 
 
 
 /** while loop - function name: whileSolution */
 function whileSolution(obj) {
  let string = Object.values(obj).join('');
  let words = string.split(' ');

  let wordsBeforeLetter = [];

  while (words[0] !== 'letter') {
    wordsBeforeLetter.push(words[0]);
    words.splice(0, 1);
  }

  wordsBeforeLetter.push(words[0]);
  words.splice(0, 1);

  return wordsBeforeLetter.join(' ') + ' ' + words.join(' ').replace(/e/gi, '');
 }

 
 
 /** do while loop - function name: doWhileSolution */
 
 function doWhileSolution(obj) {
  let string = Object.values(obj).join('');
  let words = string.split(' ');

  let wordsBeforeLetter = [];

  do {
    wordsBeforeLetter.push(words[0]);
    words.splice(0, 1);
  } while (words[0] !== 'letter')

  wordsBeforeLetter.push(words[0]);
  words.splice(0, 1);

  return wordsBeforeLetter.join(' ') + ' ' + words.join(' ').replace(/e/gi, '');
 }
 
 
 
 /** forEach iteration method  - function name: forEachSolution */
 
 function forEachSolution(obj) {
  let string = Object.values(obj).join('');
  let words = string.split(' ');

  let wordsBeforeLetter = words.splice(0, (words.indexOf('letter') + 1));
  let wordsAfterLetter = words.slice(words.indexOf('letter') + 1);
  let charsAfterLetter = wordsAfterLetter.join(' ').split('');

  charsAfterLetter.forEach((letter, index) => {
    if (letter === 'e') {
      charsAfterLetter[index] = '';
    }
  });
  
  return wordsBeforeLetter.join(' ') + ' ' + charsAfterLetter.join('');
 }
  
 console.log(forEachSolution(obj)); 
 
 
 /** filter iteration method  - function name: 'filterSolution' */
 
 
 
 
 
 // map iteration method
 
 
 
 
 
 // reduce iteration method