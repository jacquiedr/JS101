let str1 = "Come over here!"; // true
let str2 = "What's up, Doc?"; // false

console.log(str1[str1.length - 1] === "!") // true
console.log(str2[str1.length - 1] === "!") // false
// OR
console.log(str1.endsWith("!")); // true
console.log(str2.endsWith("!")); // false