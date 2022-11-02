"use strict";

var x = 3;
//immediately invoked function expression
// let y = (function (v) {
//     return v * v
// })(x)
var y = function (v) {
  return v * v;
}(x);
// console.log("La valeur de y est : "+ y);
console.log("La valeur de y est : ".concat(y));