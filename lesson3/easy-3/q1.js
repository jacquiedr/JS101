let numbers = [1, 2, 3, 4];

// Solution 1
while (numbers.length > 0) {
  numbers.pop(numbers.length);
}

// Solution 2
for (let index = numbers.length; index >= 0; index--) {
  numbers.splice(index, 1);
}

// Solution 3
numbers.length = 0;