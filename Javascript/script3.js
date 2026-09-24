console.log("Hello Javascript")
/*high order function and callback in js */
console.log("1:- High Order Function")


/* This is High order function */
function add(x, y, cb) {
    const result = x + y
    cb(result)
}

function showResult(value) {
    console.log("Result is:-", value)
}

/* First way */ /* Here showResult is a callback() function */
add(2, 4, showResult)

/* Secand way */
add(2, 4, function (value) {
    console.log("Result is:-", value)
})

/* Third way */
add(2, 3, (val) => {
    console.log(val)
})


/* Also another thingh function can return new function */

function multiply(x, y, func) {
    const result = x * y
    func(result)

    /* And retrun new function */
    return () => {
        console.log("Result is:-", result)
    }
}

/* First way using closure curring */
multiply(2, 4, (val) => {
    console.log("Callback function result:-", val)
})()

/* secand way using normal */
const newFun = multiply(2, 4, (val) => {
    console.log("Callback function result:-", val)
})

newFun()


/* output:-
Hello Javascript
script3.js:3 1:- High Order Function
script3.js:13 Result is:- 6
script3.js:21 Result is:- 6
script3.js:26 5
script3.js:44 Callback function result:- 8
script3.js:38 Result is:- 8
script3.js:49 Callback function result:- 8
script3.js:38 Result is:- 8
 */
