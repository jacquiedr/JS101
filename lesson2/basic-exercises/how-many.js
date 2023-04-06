// input: array of elements
// output: how many occurences of each element

// pseudocode
// create an empty object called count
// iterate through array and add elements to count object / count them up
// iterate through object and ouput the keys and values

function countOccurrences(vehicles) {
  let count = {};
  for (let idx = 0; idx < vehicles.length; idx += 1) {
    let vehicle = vehicles[idx].toLowerCase();
    if (vehicle in count) {
      count[vehicle] += 1;
    } else {
      count[vehicle] = 1;
    }
  }
  logOccurrences(count);
}

function logOccurrences(count) {
  for (const vehicle in count) {
    console.log(`${vehicle} => ${count[vehicle]}`);
  }
}

let vehicles = ['car', 'car', 'CAR', 'truck', 'car', 'SUV', 'suv', 'truck', 'motorcycle', 'motorcycle', 'car', 'truck'];

countOccurrences(vehicles);