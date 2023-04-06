// combine both array with each element in alternation
// input: two arrays output: one merged array

// original solution
function interleave(arr1, arr2) {
  let newArr = [];

  for (let idx = 0; idx < arr1.length; idx += 1) {
    newArr.push(arr1[idx], arr2[idx]);
  }

  return newArr;
}

// with forEach
function interleaveForEach(arr1, arr2) {
  let newArr = [];

  arr1.forEach((element, index) => {
    const correspondingElement = arr2[index];
    newArr.push(element, correspondingElement);
  });

  return newArr;
}

// with reduce
function interleaveReduce(arr1, arr2) {
  let newArr = arr1.reduce((accum, cv, idx) => {
    accum.push(cv);
    accum.push(arr2[idx]);
    return accum;
  }, []);

  return newArr;
}

// with map
function interleaveMap(arr1, arr2) {
  let newArr = arr1.map((item, idx) => {
    return [item, arr2[idx]];
  }).flat();

  return newArr;
}
console.log(interleaveMap([1, 2, 3], ['a', 'b', 'c']));