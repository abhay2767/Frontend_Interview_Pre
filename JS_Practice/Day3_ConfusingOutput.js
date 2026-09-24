console.log("Day 3:- Confusing output based question")


console.log(null == undefined)/* true */
console.log(null === undefined) /* false */
console.log(null === null) /* true */
// 👉 == does type coercion → null and undefined are equal.
// 👉 === checks type → they are different types.

console.log(NaN == NaN) /* false */
console.log(NaN === NaN) /* false */
// 👉 NaN is never equal to anything, not even itself.
// 👉 Use Number.isNaN(NaN) to check.

console.log(typeof null) /* object */
// 👉 This is a JavaScript bug from the first version of JS.

console.log(typeof undefined); /* undefined */
console.log(typeof NaN)  /* number */

/* Falsy values:- false,0,-0,0n,"",null,undefinded,NaN */

console.log(Boolean("false")) /* true */
console.log(Boolean("0")); /* true */
// 👉 Non-empty strings are always truthy.
// Even "false" (string) is truthy.

console.log(!!"") /* false */
console.log(!!"Hello") /* true */
console.log(!!0) /* false */
console.log(!!1) /* true */
// 👉 !! is often used to convert any value to boolean.

console.log([] == []) /* false */
console.log({} == {}) /* false */
// 👉 Arrays/objects are reference types.
// Different references → not equal.

console.log([] == false) /* true */
console.log(![]) /* false */
// 👉 [] is truthy, but in == comparison, it gets coerced to "" → then to 0.
// 0 == false → true.

console.log(null + 1) /* 1 */
console.log(undefined + 1) /* NaN */
// 👉 null → coerced to 0.
// 👉 undefined → cannot be coerced → NaN.


console.log(0.1 + 0.3 === 0.3) /* false */
// 👉 Because of floating-point precision issue in JS.
// Actual result is 0.30000000000000004.

console.log([] + []);/* "" */
console.log([] + {});/* [object Object] */
console.log({} + []);/* [object Object] */
console.log({} + {}); /* [object Object][object Object] */
// 👉 Confusing because of type coercion in + operator.

console.log(1<2<3) /* true */
console.log(3 > 2 > 1); /* false */
// 👉 1 < 2 → true → true < 3 → 1 < 3 → true.
// 👉 3 > 2 → true → true > 1 → 1 > 1 → false.


console.log(+true); /* 1 */
console.log(+false); /* 0 */
// 👉 + converts to number.
