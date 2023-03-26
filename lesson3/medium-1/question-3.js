function factors(number) {
  let factors = [];
	let divisor = number;
  while (divisor > 0) {
    if (number % divisor === 0) {
      factors.push(number / divisor);
    }
    divisor -= 1;
  }
  return factors;
}

console.log(factors(100));


// -50