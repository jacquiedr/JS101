let advice = "Few things in life are as important as house training your pet dinosaur.";
let words = advice.split(' ');
let houseIndex = words.indexOf('house');
let newAdvice = words.slice(0, houseIndex).join(' ');
console.log(newAdvice);
// Expected return value:
// => 'Few things in life are as important as '