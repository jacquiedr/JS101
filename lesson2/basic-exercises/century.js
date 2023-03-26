function century(year) {
    let c = Math.ceil(year / 100);
    if ((c >= 10 && c <= 20) || (c % 10) === 0) {
        return c + 'th'
    } else if ((c % 10) === 1) {
        return c + 'st';
    } else if ((c % 10) === 2) {
        return c + 'nd';
    } else if ((c % 10) === 3) {
        return c + 'rd';
    } 
}

console.log(century(10000))