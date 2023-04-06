// input: string
// output: string but with last name before a comma and the first name
// last names with spaces? 

// pseudocode
// split string where there are spaces into an array of words
// return the last element of the array of words, concatenate a comma, then concanenate the first word in the array

function swapName(name) {
  name = name.split(' ')
  let lastName = name.pop() + ',';
  return [lastName, ...name].join(' ')
}

console.log(swapName('Karl Ragvals'));