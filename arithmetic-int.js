let readline = require('readline-sync');

let n1 = 0;
let n2 = 0;

do {
    n1 = parseInt(readline.question('==> Enter the first number:\n'));
} while (n1 <= 0);

do {
    n2 = parseInt(readline.question('==> Enter the second number:\n'));
} while (n2 <= 0);

console.log(`==> ${n1} + ${n2} = ${n1 + n2}`);
console.log(`==> ${n1} - ${n2} = ${n1 - n2}`);
console.log(`==> ${n1} * ${n2} = ${n1 * n2}`);
console.log(`==> ${n1} / ${n2} = ${Math.floor(n1 / n2)}`);
console.log(`==> ${n1} % ${n2} = ${n1 % n2}`);
console.log(`==> ${n1} ** ${n2} = ${Math.pow(n1,n2)}`);