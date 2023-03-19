function isPalindrome(str) {
    let chars = str.split('');
    let reversedChars = str.split('').reverse();
    for (let i = 0; i < chars.length; i++) {
        if(chars[i] !== reversedChars[i]) {
            return false;
        }
    }
    return true;
}

// Further Exploration

function isPalindromeFE(string) {
    string = string.replace(/[^A-Za-z0-9]/g, '').toLowerCase();
    return string === string.split('').reverse().join('');
}

let n = String(00100).split('');

console.log(isPalindromeFE(n));