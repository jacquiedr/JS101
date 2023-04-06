// input: two arrays of numbers
// output: new array containing product of each pair of numbers from arguments
//         that have the same index.
// arrays contain same number of elements and all numbers

function multiplyList(arr1, arr2) {
  let newArr = [];
  for (let idx = 0; idx < arr1.length; idx += 1) {
    let product = arr1[idx] * arr2[idx];
    newArr.push(product);
  }
  return newArr;
}

console.log(multiplyList([3, 5, 7], [9, 10, 11]));