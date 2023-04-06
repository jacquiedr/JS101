// input: positive integer
// output: sum of digits

// pseudocode
// coerce number into string, split into array of digits, reduce array to sum

function sum(num) {
  return num.toString().split('').reduce((accumulator, element) => accumulator + Number(element), 0);
}

console.log(sum(123456789)); // 5