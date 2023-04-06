// input: 6 numbers
// ouput: true/false 
// get 6 numbers as input from user
// save numbers in an array except for last one
// check if last number is in the number array

const readline = require('readline-sync');

function getNumbers() {
  let numbers = [];

  for (let idx = 0; idx < 5; idx += 1) {
    let num = parseInt(readline.question('Enter a number: '));
    if (Number.isNaN(num)) {
      while (Number.isNaN(num)) {
        console.log('That\'s not a valid number');
        let num = parseInt(readline.question('Enter a number: '));
      } 
    }
    numbers.push(num);
  }

  let num = Number(readline.question('Enter the last number: '));
  while (Number.isNaN(num)) {
    console.log('That\'s not a valid number');
    num = Number(readline.question('Enter the last number: '));
  };
  
  return appears(num, numbers);
}

function appears(num, numbers) {
  if (numbers.includes(num)) {
    console.log(`The number ${num} appears in ${numbers}.`);
  } else {
    console.log(`The number ${num} does not appear in ${numbers}.`);
  }
}

getNumbers();