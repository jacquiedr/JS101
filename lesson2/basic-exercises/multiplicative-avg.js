// input: array of integers
// output: average of all integers in array multiplied together

function multiplicativeAverage(nums) {
  let product = nums.reduce((accum, value) => {
    accum *= value;
    return accum;
  }, 1);

  let avg = (product / nums.length).toFixed(3);

  return avg;
}

console.log(multiplicativeAverage([3, 5]));