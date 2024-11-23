const isOdd = require("is-odd");
const isTen = require("is-ten");
const two = require("two");
const five = require("five");

const isThirteen = (num) => num === 13;

const SEVEN = (((7777 / 1111) * 3) / 7) * 2 + 1;

const isSeven = (num) => {
    if (typeof num !== "number") return false;
    if (!isOdd(num)) return false;
    if (isTen(num)) return false;
    if (isThirteen(num)) return false;
    if (num === two()) return false;
    if (num === five()) return false;
    return num === SEVEN;
};

module.exports.SEVEN = SEVEN;
module.exports.isSeven = isSeven;
