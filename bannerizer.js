function logInBox(str, max = str.length) {
    if (str.length > max) {
        str = str.substring(0, max);
    }
    let horizontalRule = `+${'-'.repeat(str.length + 2)}+`;
    let emptyLine = `|${" ".repeat(str.length + 2)}|`;

    console.log(horizontalRule);
    console.log(emptyLine);
    console.log(`| ${str} |`);
    console.log(emptyLine);
    console.log(horizontalRule);
}

function logInBoxWrapped(str, max = str.length) {

    let splitStr = [];
    if (str.length > max) {
        for (let i = 0; i < str.length; i++) {
            if (str.length < max) {
                str = str + " ".repeat(max - str.length);
                splitStr.push(str.substring(0,max));
                break;
            }
            splitStr.push(str.substring(0,max));
            str = str.slice(max);
        }
    }
    
    let horizontalRule = `+${'-'.repeat(max + 2)}+`;
    let emptyLine = `|${" ".repeat(max + 2)}|`;

    console.log(horizontalRule);
    console.log(emptyLine);
    for (let i = 0; i < splitStr.length; i++) {
        console.log(`| ${splitStr[i]} |`);
    }
    console.log(emptyLine);
    console.log(horizontalRule);
}

console.log(logInBoxWrapped(''));