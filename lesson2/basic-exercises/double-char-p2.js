// input: string
// output: that string with every consonant character doubled - only alphabetical characters doubled except vowels
// edge cases: empty string -> return string as is

// pseudocode
// split the string into an array of characters 
// iterate through all the characters in array 
//  check if character is alphabetical
//    if it is, add it to new array twice
//  return the array joined

function doubleConsonants(string) {
  return string.split('').map(character => {
    if((/[bcdfghjklmnpqrstvwxyz]/gi).test(character)) {
      return character + character;
    } else {
      return character;
    }
  }).join('');
}

console.log(doubleConsonants('Hello-World!'));