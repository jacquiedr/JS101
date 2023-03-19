function integerToString(n) {
    let digits = [];
    while (n > 0) {
        let r = n % 10;
        digits.push(r);
        n = Math.floor(n / 10);
    }
    return digits.reverse().join('');
}

console.log(integerToString(321));