function twice(n) {
    let digits = n.toString();
    if (digits.length % 2 === 0) {
        if (digits.substring(0, digits.length / 2) === (digits.substring(digits.length / 2))) return n;  
    }
    return n * 2;
}

console.log(twice(103103));