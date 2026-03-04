const isOdd = require("is-odd");
const isEven = require("is-even");
const isUnodd = require("is-unodd");
const isUneven = require("is-uneven");
const isTen = require("is-ten");
const two = require("two");
const five = require("five");
const is = require("is-thirteen");
const eleven = require("eleven");
const isNumber = require("is-number");
const not = require("es-logical-not-operator");
const f = require("false-value");
const t = require("true-value");
const isEqual = require("@10xly/strict-equals");
const isAddOrEvenMs = require("is-add-or-even-ms");
const not2 = require("not");
const isActualNumber = require("is-actual-number");
const isNumberOddOrEven = require("is-number-odd-or-even");
const isNotInteger = require("is-x-not-integer");

const SEVENSEVENSEVENSEVEN =
  five() * five() * five() * five() * five() * two() +
  eleven() * eleven() * eleven() +
  five() * eleven() * two() * (two() - two() / five()) +
  five() * (five() - five() / five());

const ONEONEONEONE =
  eleven() *
    (eleven() - eleven() / eleven()) *
    (eleven() - eleven() / eleven()) +
  eleven();
const SEVEN =
  (((SEVENSEVENSEVENSEVEN / ONEONEONEONE) * (five() - two())) /
    (five() + two())) *
    two() +
  eleven() / eleven();

const isSeven = (num) => {
  if (not(isNumber(num))) return f();
  if (
    not2(() =>
      isActualNumber(num, {
        allowNumberStrings: f(),
        allowInfinite: t(),
      }),
    )()
  )
    return f();
  if (isNotInteger(num)) return f();
  if (not(isOdd(num))) return f();
  if (isEven(num)) return f();
  if (isUnodd(num)) return f();
  if (not(isUneven(num))) return f();
  if (not(isNumberOddOrEven(num, f()))) return f();
  if (not(isEqual(isAddOrEvenMs(num), "Number is Odd"))) return f();
  if (isTen(num)) return f();
  if (is(num).thirteen()) return f();
  if (isEqual(num, two())) return f();
  if (isEqual(num, five())) return f();
  return isEqual(num, SEVEN);
};

module.exports.SEVEN = SEVEN;
module.exports.isSeven = isSeven;
