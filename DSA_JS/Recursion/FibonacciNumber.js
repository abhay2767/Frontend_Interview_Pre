// Fibonacci Number
// Formula => f(n) = f(n-1) + f(n-2)
/*
The Fibonacci numbers, commonly denoted F(n) form a sequence, called the Fibonacci sequence, such that each number is the sum of the two preceding ones, starting from 0 and 1. That is,

F(0) = 0, F(1) = 1
F(n) = F(n - 1) + F(n - 2), for n > 1.
Given n, calculate F(n).

 

Example 1:

Input: n = 2
Output: 1
Explanation: F(2) = F(1) + F(0) = 1 + 0 = 1.
Example 2:

Input: n = 3
Output: 2
Explanation: F(3) = F(2) + F(1) = 1 + 1 = 2.
Example 3:

Input: n = 4
Output: 3
Explanation: F(4) = F(3) + F(2) = 2 + 1 = 3. 
 */
// 1:- Using Iteration Approach
function findFibonacciUsingIterationApproach(n) {
    if (n <= 0) return 0;
    if (n === 1) return 1;
    let f1 = 0
    let f2 = 1
    let currFib = 0
    for (let i = 2; i <= n; i++) { // Start loop from 2 up to n
        currFib = f1 + f2 // Calculate the next number
        f1 = f2  // Move f2 back to f1
        f2 = currFib  // Move currentFib back to f2
    }
    return currFib

}
// console.log("Fibonacci Number is:-", findFibonacciUsingIterationApproach(5))

// 2:- Using Recursion
function fibonacciNumberUsingRecursion(n) {
    if (n <= 0) return 0;
    if (n === 1) return 1;
    /* or*/ /* if(n <= 1) return n */

    return fibonacciNumberUsingRecursion((n - 1)) + fibonacciNumberUsingRecursion((n - 2))
}
console.log("Fibonacci Number using Recursion:-", fibonacciNumberUsingRecursion(1))