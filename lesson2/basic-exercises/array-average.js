// input: array of integers
// output: average of all the integers in the array, rounded down to int

// pseudocode:
// declare and initialize sum variable to 0
// loop through array and add individual elements to sum
// return sum divided array length rounded down to nearest int

function average(numbers) {
  let sum = 0;
  for (let idx = 0; idx < numbers.length; idx += 1) {
    sum += numbers[idx];
  }
  return Math.trunc(sum / numbers.length);
}

function averageForEach(numbers) {
  let sum = 0;
  numbers.forEach(digit => (sum += digit));
  return Math.trunc(sum / numbers.length);
}

function averageReduce(numbers) {
  let sum = numbers.reduce((sum, digit) => sum + digit, 0);
  return Math.trunc(sum / numbers.length);
}


console.log(averageReduce([1, 5, 87, 45, 8, 8]));