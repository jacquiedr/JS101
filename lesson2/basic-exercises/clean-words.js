function cleanUp(str) {
    str = str.split('');

    for (let i = 0; i < str.length; i++) {
        if (!(/[a-z]/gi).test(str[i])) {
            str[i] = ' ';
        } 
    }

    let i = 0;
    while (i < str.length) {
        if (str[i] === ' ' && str[i + 1] === ' ') {
            str.splice(i, 1);
            i = 0;
        } else {
            i += 1;
        }
    }
    return str.join('');
}

console.log(cleanUp("---what's my +*& line?"));

function cleanUp(text) {
    return text.replace(/[^a-z]/gi, " ").replace(/\s+/gi, " ");
}