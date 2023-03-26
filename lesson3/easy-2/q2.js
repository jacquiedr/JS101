// The Array.prototype.reverse method reverses the order of elements in an array, and Array.prototype.sort can rearrange the elements in a variety of ways, including descending. 
// Both of these methods mutate the original array as shown below. Write two distinct ways of reversing the array without mutating the original array. 
// Use reverse for the first solution, and sort for the second.

let numbers = [1, 2, 3, 4, 5];
let reverseNumsReverse = numbers.slice().reverse();
let reverseNumsSort = Array.from(numbers).sort((num1, num2) => num2 - num1);
let sortedArray = [...numbers].sort((num1, num2) => num2 - num1);
let reverseNumsReduce = numbers.reduceRight((a, c) => (a.push(c), a), []);

console.log(numbers); // [1, 2, 3, 4, 5]
console.log(reverseNumsReverse); // [ 5, 4, 3, 2, 1 ]
console.log(reverseNumsSort); // [ 5, 4, 3, 2, 1 ]
console.log(reverseNumsReduce); // [ 5, 4, 3, 2, 1 ]

let numbersFE = [];
numbers.slice().reverse().forEach(el => numbersFE.push(el));

let reversedArray = [];
numbers.forEach((num) => {
  reversedArray.unshift(num);
});

console.log(reversedArray);
console.log(numbersFE);