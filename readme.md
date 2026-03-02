# check-if-number-is-seven
just simple utility to check if a number is 7. also provides a seven constant

```js
var { SEVEN, isSeven } = require("check-if-number-is-seven")

console.log(isSeven(SEVEN)) // true
console.log(isSeven(7)) // true
console.log(7 === SEVEN) // true
console.log(isSeven("not seven")) // false
```