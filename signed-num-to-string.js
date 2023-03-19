function signedIntToStr(n) {
    if (n == 0) return '0';
    let numArr = [];
    let x = n;
    if (Math.sign(n) === -1) {
        n = n * -1;
    }
    while (n > 0) {
        let r = n % 10;
        numArr.unshift(r);
        n = Math.floor(n / 10);
    }  
    if (Math.sign(x) === -1) {
        return '-' + numArr.join('');
    } 
    return '+' + numArr.join('');  
}

console.log(signedIntToStr(0));

function integerToString(n) {
    let digits = [];
    while (n > 0) {
        let r = n % 10;
        digits.push(r);
        n = Math.floor(n / 10);
    }
    return digits.reverse().join('');
}

function signedIntToStrRefac(n) {
    if (1 / n === -Infinity) return '-0';
    switch (Math.sign(n)) {
        case -1:
            return `-${integerToString(-n)}`;
        case +1:
            return `+${integerToString(n)}`;
        default:
            return integerToString(n);
    }
}

console.log(signedIntToStrRefac(-0) === '-0');