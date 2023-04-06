/* eslint-disable indent */
function isPangram(string) {
  let alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm',
                 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  
  string = string.toLowerCase();

  for (let idx = 0; idx < string.length; idx++) {
    if (alphabet.includes(string[idx])) {
      let letterIndex = alphabet.indexOf(string[idx]);
      alphabet.splice(letterIndex, 1);
    }
  }
  if (alphabet.length > 0) {
    return false;
  }
  return true;
}

console.log(isPangram("Cwm fjord bank glyphs vext quiz"));

function isPangram(string){
  string = string.toLowerCase();
  return "abcdefghijklmnopqrstuvwxyz".split("").every(function(x){
    return string.indexOf(x) !== -1;
  });
}

function isPangram(string){
  return (string.match(/([a-z])(?!.*\1)/ig) || []).length === 26;
}

let arr = [
  { a: [1, 2, 3] },
  { b: [2, 4, 6], c: [3, 6], d: [4] },
  { e: [8], f: [6, 10] },
];

function objectsWithEvenNumbers(arr) {
  let newArr = [];

  for (let i = 0; i < arr.length; i += 1) {
    let object = arr[i];
    let count = 0;

    for (let key in object) {
      let subArr = object[key];

      if (subArr.every(number => number % 2 === 0)) {
        count += 1;
      }
    }

    if (count === Object.keys(object).length) {
      newArr.push(object);
    }
  }

  return newArr;
}
