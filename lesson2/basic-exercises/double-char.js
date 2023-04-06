// input: string
// output: original string with each letter doubled
// edge cases: empty string, numerical characters -> return string as is if empty, treat numerical like normal alphabetical char

// create new string variable which will store doubled characters
// split up the string into an array of characters
// loop through the array of characters 
//  add that characters twice to the new string
// return the new string

function repeater(string) {
  let newString = '';
  let characters = string.split('');
  characters.forEach(letter => newString += (letter + letter));
  return newString;
}

console.log(repeater(''));  