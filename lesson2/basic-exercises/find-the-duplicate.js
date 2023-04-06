/* eslint-disable indent */
function findDup(arr) {
  let seen = {};
  for (let idx = 0; idx < arr.length; idx += 1) {
    let num = arr[idx];
    if (num in seen) {
      return num;
    } else {
      seen[num] = 1;
    }
  }
  return undefined;
}

function count(array, element) {
  let count = 0;
  for (let idx = 0; idx < array.length; idx++) {
    if (array[idx] === element) {
      count += 1;
    }
  }
  return count;
}

function findDup2(array) {
  return array.find(element => count(array, element) === 2);
}