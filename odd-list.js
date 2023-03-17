function oddities(nums) {
    let newArr = [];
    for (let i = 0; i < nums.length; i+=2) {
        newArr.push(nums[i]);
    }
    return newArr;
}

function evenElements(nums) {
    return nums.filter(function(i){
        return i % 2 === 0;
    });
}