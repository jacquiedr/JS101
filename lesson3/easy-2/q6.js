let flintstones = ["Fred", "Wilma"];
flintstones.push(["Barney", "Betty"]);
flintstones.push(["Bambam", "Pebbles"]);

let mergedFlintstones = [];
mergedFlintstones = mergedFlintstones.concat(...flintstones);

console.log(mergedFlintstones);