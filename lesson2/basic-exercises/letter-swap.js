function swap(str) {
    let words = str.split(' ');
    let swapped = [];
    for (let i = 0; i < words.length; i++) {
        let w = words[i];
        if (w.length === 1) swapped.push(w) 
        else swapped.push(w[w.length - 1] + w.slice(1, -1) + w[0]);
    }
    return swapped.join(' ');
}

// Further Exploration
function swapRefac(str) {
    return str.split(' ').map(function(word) {
        if (word.length === 1) return word;
        return word[word.length - 1] + word.slice(1, -1) + word[0];
    }).join(' ');
}

console.log(swapRefac('Oh what a wonderful day it is'));