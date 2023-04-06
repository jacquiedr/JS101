// input: positive integer
// output: array of numbers counting up from 1 to the positive integer

// pseudocode:
// create a empty array, which will be called countUp
// iterate for as many times as the inputed integer, start at 1
//  add current iteration number to countUp array
// return countUp array

function sequence(number) {
  let result = [];
  for (let index = 1; index <= number; index += 1) {
    result.push(index);
  }
  return result;
}

function sequence1(num) {
  return [...new Array(num).keys()].map(num => num + 1);
}

console.log(sequence1(10));