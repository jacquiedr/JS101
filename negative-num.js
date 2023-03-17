function negative(n) {
    if(n >= 0) {
        return n * -1;
    } 
    return n;
}
// Other ways to solve this number 
function negativeRefactored(number) {
    return Math.abs(number) * -1;
}

function negativeV3(n) {
    return n >= 0 ? Math.abs(n) * -1 : n;
}

