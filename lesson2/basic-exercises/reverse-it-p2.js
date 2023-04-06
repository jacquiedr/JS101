// input: string of any length
// output: string

// pseudocode:
//  split string into array of words
//  iterate through that array of words
//    check if the length is < 5
//      if it is, return word as is
//      if not, split word, reverse it, and the join
//  return array of words joined

const MIN_WORD_LENGTH = 5;
function reverseWords(string) {
  return string.split(' ').map(word => 
    word.length < MIN_WORD_LENGTH ? word : word.split('').reverse().join('')).join(' ');
}

console.log(reverseWords('Walk around the block'));