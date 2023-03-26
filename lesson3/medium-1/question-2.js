let munstersDescription = "The Munsters are creepy and spooky.";

let characters = munstersDescription.split('').map(function(char) {
  return char === char.toLowerCase() ? char = char.toUpperCase() : char = char.toLowerCase()
}).join('');

console.log(characters);