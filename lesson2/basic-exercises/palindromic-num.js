function isPalindromicNumber(n) {
    let digits = String(n).split('').join('');
    let reversed = String(n).split('').reverse().join('');
    return digits === reversed;
}

console.log(isPalindromicNumber(0000));