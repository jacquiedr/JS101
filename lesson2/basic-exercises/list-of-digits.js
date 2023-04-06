// input: positive integer
// output: list of all digits in the number

// declare new array and initialize it as an empty array
// while number is bigger than 0
//  get last digit of number using modulo 10
//  add it to new array from the front
//  remove that digit from number by dividing by 10
// return new array

function digitList(number) {
  let newArray = [];
  while (number > 0) {
    let lastDigit = number % 10;
    newArray.unshift(lastDigit);
    number = Math.floor(number / 10);
  }
  return newArray;
}

function digitListMap(number) {
  return number.toString().split('').map(digit => parseInt(digit, 10));
}


console.log(digitList(444));
console.log(digitListMap(0));
