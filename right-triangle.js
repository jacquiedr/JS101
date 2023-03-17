function triangle(n) {
    for (let i = 0; i < n; i++) {
        let level = '';
        for (let j = n - i; j > 0; j--) {
            level += ' ';
        }
        for (let k = 0; k < i + 1; k++) {
            level += '*';
        }
        console.log(level);
    }
}


function triangleV2(height) {
    let spaces = height - 1;
    let stars = 1;
    while (height > 0) {
        console.log(`${" ".repeat(spaces)}${"*".repeat(stars)}`);
        spaces -= 1;
        stars += 1;
        height -= 1;
    }
}


console.log(triangle(18));