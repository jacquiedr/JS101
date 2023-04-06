/* eslint-disable max-lines-per-function */
// Input: negative or postiive integer
// Output: string with time

const MINUTES_PER_HOUR = 60;
const HOURS_PER_DAY = 24;
const MINUTES_PER_DAY = HOURS_PER_DAY * MINUTES_PER_HOUR;

function pad(number) {
  return number > 10 ? String(number) : '0' + number;
}

function formatTime(hours, deltaMinutes) {
  return `${pad(hours)}:${pad(deltaMinutes)}`;
}

function timeOfDay(deltaMinutes) {
  if (deltaMinutes < 0) {
    deltaMinutes = (deltaMinutes % MINUTES_PER_DAY) + MINUTES_PER_DAY;
  } else {
    deltaMinutes %= MINUTES_PER_DAY;
  }

  let hours = Math.floor(deltaMinutes / MINUTES_PER_HOUR);
  let minutes = deltaMinutes % MINUTES_PER_HOUR;

  return formatTime(hours, minutes);
}

console.log(timeOfDay(0) === "00:00");
console.log(timeOfDay(-3));
console.log(timeOfDay(35) === "00:35");
console.log(timeOfDay(-1437) === "00:03");
console.log(timeOfDay(3000) === "02:00");
console.log(timeOfDay(800) === "13:20");
console.log(timeOfDay(-100));

function timeOfDay2(deltaMinutes) {
  const MILLISECONDS_PER_MINUTE = 60000;
  const DAY_OF_WEEK_MAP = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  // Initialize a date object to our starting time of Sunday 00:00
  const baseDate = new Date('January 22, 2023 00:00:00');

  // convert baseDate to epoch milliseconds with valueOf method
  // and subtract milliseconds from that to get the new date.
  const newDate = new Date(baseDate.valueOf()
    + (deltaMinutes * MILLISECONDS_PER_MINUTE));

  let dayOfWeek = DAY_OF_WEEK_MAP[newDate.getDay()];
  let hours = newDate.getHours();
  let minutes = newDate.getMinutes();

  return `${dayOfWeek} ${pad(hours)}:${pad(minutes)}`;
}

console.log(timeOfDay2(1333)); 