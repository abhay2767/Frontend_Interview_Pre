console.log("Hello Javascript")
/* Curring in js */
console.log("curring in javascript")
/* We use carry using two way
1:- using bind() method
2:- using closures()
 */

console.log("1:- using bind() method")
let multiply = function (x, y) {
    console.log("Multiple is:-", x * y)
}

let MultipleByTwo = multiply.bind(this, 2)
MultipleByTwo(5)

let MultipleByThree = multiply.bind(this, 3)
MultipleByThree(6)

/* Here if we pass bind(this,2,5) then it will ignore value of 5 or 6 from MultipleByTwo(5) or MultipleByThree(6) */
/* Here if we pass nothing as secand argument bind(this) and pass here MultipleByTwo(5,2) output will 10 
but you should pass bind(this,5) */
/* Here in curry using bind() method we can a copy of this multiple method and we create more methode out of it by preseting
some argument inside the funcation  */

console.log("2:- using closure")
const Addition = function (x) {
    return function (y) {
        console.log('Addition is:-', x + y)
    }
}
Addition(2) /* Note:- this will not execute funcation if all parameter not found like if you try Addition(2) only it will not work */
Addition(2)(3)
/* or */
const add = Addition(2)
// add(3)

/* Output:-
Addition is:- 5
Addition is:- 5
 */

/* Using Arrow funcation */
const addValue = (n1) => (n2) => (n3) => {
    console.log("Addition is using Arrow Function:-", n1 + n2 + n3)
}
 addValue(2)(3)(4)
/* Use case when you want to hit api call that take two, three argument their you can use it */