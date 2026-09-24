console.log("Hello Javascript")
/*Array methods in js */
console.log("Array Methods")

const Arr = [1,3,5,3,5,6,8]

console.log("Arr:-",Arr)
// Arr.push(10) /* Add value at last */
// Arr.pop() /* Remove last value from Array */

// Arr.unshift(100) /* Start value at start in Array */ /* it is less use because it chnage intex of each element */
// Arr.shift()  /* Remove from start in Array */

// console.log("includs:-",Arr.includes(9)) /* Can ask in Array 9 is Avaible or not retur true/false */
// console.log("indexOf:-",Arr.indexOf(9)) /* this is return index of that value */ /* if value not found that return -1 */

// const newArr = Arr.join()
// console.log("NewArr:-",newArr) /* It join by comma seprate ',' but also change their type to string */
// console.log(typeof newArr) /* show string */

/* Slice and splice */
// const useSlice = Arr.slice(1,3) /* it does not incluse last element and it does not manipulate original Array */
// console.log("slice:-",useSlice)
// Arr original:- (7) [1, 3, 5, 3, 5, 6, 8]
// slice:- (2) [3, 5]
// const useSplice = Arr.splice(1,3) /* it return upto 3 but it modified original Array */
// console.log("splice:-",useSplice)
// splice:- (3) [3, 5, 3]
// Arr after Methods:- (4) [1, 5, 6, 8]


console.log("Arr after Methods:-",Arr) 
