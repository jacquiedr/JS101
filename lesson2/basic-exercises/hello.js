[5, 10, 15, 20].forEach((number) => {
  console.log(number - 3);
});

// 2,7, 12, 17

let arr = ['blue', 'red', 'green'];

let newArr = arr.map(function(color) {
  return color.length;
})

console.log(newArr);
// [4, 3, 5]

let arr1 = [3, 5, 8, 10];

let newArr1 = arr1.map(function(num) {
  return num >= 5;
});

console.log(newArr1);
// [false, true, true, true]

let arr2 = [1, 2, 3, 4, 5];

let newArr2 = arr2.forEach(function(num) {
  return num + 1;
});
// undefined
console.log(newArr2);

let arr3 = ['Grace', 'Clare', 'Trevor'];

let newArr3 = arr3.map((name) => {
  console.log(name);
});
// Grace, Clare, Trevor [undefined, undefined, undefined]
console.log(newArr3);

let arr4 = ['Grace', 'Clare', 'Trevor'];

let newArr4 = arr4.map((name) => {
  return console.log(name);
});
// Grace Clare Trevor [undefined, undefined, undefined]
console.log(newArr4);