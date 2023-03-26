let ages = { Herman: 32, Lily: 30, Grandpa: 402, Eddie: 10 };
let agesKeys = Object.keys(ages);
if (agesKeys.includes('Spot')) {
	console.log("Ages includes 'Spot'!");
} else {
	console.log("Ages does not include 'Spot'.");
}

// OR

console.log(ages.hasOwnProperty("Spot"));