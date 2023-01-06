"use strict";
exports.__esModule = true;
exports.sumArray = exports.add = exports.personAge = exports.greeter = void 0;
function greeter(name) {
    return "Ol\u00E1 ".concat(name, "!");
}
exports.greeter = greeter;
function personAge(name, age) {
    return "".concat(name, " tem ").concat(age, " anos!");
}
exports.personAge = personAge;
function add(x, y) {
    return x + y;
}
exports.add = add;
function sumArray(numbers) {
    return numbers.reduce(add, 0);
}
exports.sumArray = sumArray;
