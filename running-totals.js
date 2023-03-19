function runningTotal(arr) {
    let newArr = [];
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        newArr.push(sum += arr[i]);   
    }
    return newArr;
}

// Further Exploration
function runningTotalRefac(arr) {
    let sum = 0;
    return arr.map(function(value) {
        return sum += value;
    });
}

console.log(runningTotalRefac([2, 3, 4, 12]));