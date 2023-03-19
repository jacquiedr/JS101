function stringToInteger(num) {
    const DIGITS = {
        0: 0,
        1: 1,
        2: 2,
        3: 3,
        4: 4,
        5: 5, 
        6: 6,
        7: 7,
        8: 8,
        9: 9
    };
    let arrayOfDigits = string.split("").map(char => DIGITS[char]);
    let value = 0;
    arrayOfDigits.forEach(digit => (value = (10 * value) + digit));
    return value;
}

function hexadecimalToInteger(string) {
    const HEX = {
        0: 0,
        1: 1,
        2: 2,
        3: 3,
        4: 4,
        5: 5, 
        6: 6,
        7: 7,
        8: 8,
        9: 9,
        'A': 10,
        'B': 11,
        'C': 12,
        'D': 13,
        'E': 14,
        'F': 15
    };
    let arrayOfDigits = string.toUpperCase().split("").map(char => HEX[char]).reverse();
    let product = 0;
    for (let i = 0; i < arrayOfDigits.length; i++) {
        product += arrayOfDigits[i] * (16 ** i);
    }
    return product;
}

console.log(hexadecimalToInteger('4D9f') === 19871);