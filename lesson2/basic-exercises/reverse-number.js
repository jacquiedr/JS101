// input: positive integer
// output: inputed integer reversed 
// edge cases: single number input -> return number as is, input ending with zero(es) -> get rid of leading zeroes

// pseudocode
// convert number into string
// reverse number
// return number as number 

function reverseNumber(number) {
  return Number((number + '').split('').reverse().join(''));
}

console.log(reverseNumber(12000))