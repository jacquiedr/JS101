function wordSizes(str) {
    let words = str.replace(/[^\w\s]/gi, "").split(' ');
    let count = {};
    for (let i = 0; i < words.length; i++) {
        let w = words[i].length;
        if (w in count) {
            count[w] += 1;
        } else {
            count[w] = 1;
        }
    }
    return count;
}



console.log(wordSizes("What's up doc?"));