const MINUTES_PER_DEGREE = 60;
const SECONDS_PER_MINUTE = 60;
const FULL_ROTATION = 360;

function dms(n) {
    if (n > FULL_ROTATION) {
        n = n - FULL_ROTATION;
    } else if (n < 0) {
        while (n < 0) {
            n += FULL_ROTATION;
        }
    }
    let d = Math.floor(n);
    let m = (n - Math.floor(n)) * MINUTES_PER_DEGREE;
    let s = (m - Math.floor(m)) * SECONDS_PER_MINUTE;

    function pad(n) {
        return n >= 10 ? n : '0' + n;
    }
    return d + '\xB0' + pad(Math.floor(m)) + '\'' + pad(Math.floor(s)) + '"';
}

console.log(dms(-40));