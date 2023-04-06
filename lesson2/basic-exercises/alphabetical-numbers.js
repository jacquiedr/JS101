/* eslint-disable indent */
/* eslint-disable max-lines-per-function */
// input: array of integers ranging from 0-19
// output: array of those ints sorted based on the english word for each num

// create object to store numbers with their word equivalent
// create array to store numbers in words, call it numbersInWords
// iterate through array
//  add word equivalents in numbersInWords array
// return numbersInWords sorted

function alphabeticNumberSort(numbers) {
  const NUMBER_WORDS = {
    0: 'zero',
    1: 'one',
    2: 'two',
    3: 'three',
    4: 'four',
    5: 'five',
    6: 'six',
    7: 'seven',
    8: 'eight',
    9: 'nine',
    10: 'ten',
    11: 'eleven',
    12: 'twelve',
    13: 'thirteen',
    14: 'fourteen',
    15: 'fifteen',
    16: 'sixteen',
    17: 'seventeen',
    18: 'eighteen',
    19: 'nineteen'
  };

  let numbersAsWords = numbers.map(number =>
    NUMBER_WORDS[String(number)]);

  return numbersAsWords.sort();
}


function alphabeticNumberSortFE(numbers) {
  const NUMBER_WORDS = ['zero', 'one', 'two', 'three', 'four', 'five',
                        'six', 'seven', 'eight', 'nine', 'ten', 'eleven',
                        'twelve', 'thirteen', 'fourteen', 'fifteen',
                        'sixteen', 'seventeen', 'eighteen', 'nineteen'];

  let alphabeticNumbers = numbers.map(number => NUMBER_WORDS[number]);

  return alphabeticNumbers.sort((num1, num2) => {
    if (num1 > num2) {
      return 1;
    } else if (num1 < num2) {
      return -1;
    } else {
      return 0;
    }
  });
}

console.log(alphabeticNumberSortFE(
  [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19]));
// [8, 18, 11, 15, 5, 4, 14, 9, 19, 1, 7, 17, 6, 16, 10, 13, 3, 12, 2, 0]