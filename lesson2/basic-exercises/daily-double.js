function crunch(str) {
    str = str.split('');
    let i = 0;
    while (i <= str.length - 1) {
        if (str[i] === str[i + 1]){
            str.splice(i,1);
            i = 0;
        } else {
            i++;
        }
    }
    return str.join('');
}


function recursiveCrunch(input) {
    if(input.length <= 1)
        return input;
    if(input[0] == input[1])
        return recursiveCrunch(input.substring(1));
    else
        return input[0] + recursiveCrunch(input.substring(1));
}

console.log(crunchV2('ddaaiillyy ddoouubbllee'));

function crunchRegEx(str) {
    return str.replace(/[^\w\s]|(.)(?=\1)/gi, "");
}
//[^\w\s] matches any char that is not a word character (\w) or white space (\s)
// | or operator
// (.)(?=\1) matches any char that is followed by the same char and captures it in a group (.). The (?=\1) is a positive lookahead assertion that matches only if the next char is the same as the captured group 
// /gi => global flag and ignore flag 
