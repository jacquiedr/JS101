let names = ['Grace', 'Pete', 'Luke', 'Paris'];

// Changing the second element, reassigning index 1 to be the string 'Sam'
// We aren't mutating the strings, we are changing what the variable holds. 
names[1] = 'Sam';

// We can add to the array by indexing into elements that don't yet exist
names[4] = 'Trevor'

// keys are always strings
let pets = {
  dog: "barks",
  cat: "meows",
  pig: "oinks",
};

// we can mutate object values and add new ones to the object
pets["cat"] = "purrs";
pets["duck"] = "quacks";

// Array methods
let newNames = names.concat(['Sam', 'Hailey']);
console.log(newNames);

let foo = { a: 1, b: 2};
let bar = { a: 1, b: 2};

foo.b = 99;

