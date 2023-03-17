function stringy(n) {
    let onesAndZeros = '';
    for (let i = 0; i < n; i++) {
        if (i % 2 === 0) {
            onesAndZeros += '1';
        } else {
            onesAndZeros += '0';
        }
    }
    return onesAndZeros;
}

function stringyV2(n) {
    let result = '';
    for (let i = 0; i < n; i++) {
        let number = ((i % 2) === 0 ? 1 : 0);
        result += number;
    }
    return result;
}

console.log(stringyV2(6));