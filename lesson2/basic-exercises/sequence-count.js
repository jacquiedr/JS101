// inputs: two integers, count of elements and starting number of sequence
// output: array of sequence with count elements and each element is a multiple of the starting number
// count will always be non-negative number
// second number can be negative or positive 

// pseudocode: 
// initialize empty array - call it sequenceArr
// loop for count iterations and have it start at 0
//  create variable called result, which will be 0 + starting point
//  add result to sequenceArr array
// return sequenceArr array

function sequence(count, startingPoint) {
  let sequenceArr = [];
  for (let num = 1; num <= count; num += 1) {
    sequenceArr.push(num * startingPoint);
  }
  return sequenceArr;
}

console.log(sequence(4, -7));