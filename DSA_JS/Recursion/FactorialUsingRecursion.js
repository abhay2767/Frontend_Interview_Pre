// FactorialUsingRecursion.js
// Find Factorial of Number

/*
5! = 5*4*3*2*1 
formula => n * (n-1) * (n-2) *-----------1
 */

function findFactorial(n) {
    if (n <= 1) {
        return 1
    }
    // console.log("Number is:-",n--)
    // n--
    return n * findFactorial(n - 1)
}

console.log("factorial is:-", findFactorial(10))