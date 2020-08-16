// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
    var num = 0;
    var sign = 1;
    var currNum;
    if (n < 0 ) {sign = -1;}
    n = Math.abs(n);

    while (n > 0) {
        currNum = n % 10;
        num = (num * 10) + currNum;
        n = Math.floor(n / 10);
    }

    return num * sign;
}

module.exports = reverseInt;
