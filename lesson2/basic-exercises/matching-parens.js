// input: string
// output: boolean

// pseudocode:
// declare a variable that keeps track of open parentheses, call it open
// declare a variable that keeps track of closed parentheses, call it close
// iterate through characters if string
//  if character is '(' 
//    add 1 to open
//  or else if character is ')'
//    add 1 to close
// return true if open == close and false otherwise

function isBalanced(string) {
  let paren = 0;
  let quoteCount = 0;
  
  let opening = '([{';
  let closing = ')]}';
  let quotes = '\"\''

  for (let idx = 0; idx < string.length; idx++) {
    if (opening.includes(string[idx])) {
      paren += 1;
    } else if (closing.includes(string[idx])) {
      paren -= 1;
    } else if (quotes.includes(string[idx])) {
      quoteCount += 1;
    }
    if (paren < 0) {
      return false;
    }
  }
  return (paren === 0) && (quoteCount % 2 === 0);
}

console.log(isBalanced("What [(is)]\"\" this?"));