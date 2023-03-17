function multiply(n1, n2) {
    return n1 * n2;
}

function square(n) {
    return multiply(n, n);
}

console.log(square(5) === 25); // logs true
console.log(square(-8) === 64); // logs true

// Further exploration
function pow(n, p) {
    let result = 1;
    for (let i = 1; i <= p; i++) {
        result = multiply(result, n);
    }
    return result;
}

console.log(pow(5,5))