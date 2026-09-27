// Sum of all elements in an array
/*
arr = 

 */
let arr = [5, 3, 2, 0, 1, 4]

function sumOfArrayNumbers(n) {
    if (n == 0) return arr[n] /*arr[n] or arr[0] both are same */
    return arr[n] + sumOfArrayNumbers(n - 1)
}

console.log("Number is:-", sumOfArrayNumbers(arr.length - 1))


/* Find Sumof Odd Numbers */
function sumOfOddNumbers(n) {
    // Base case: check if the first element is odd. If not, return 0.
    if (n == 0) return arr[0] % 2 !== 0 ? arr[0] : 0;

    if (arr[n] % 2 === 0) {
        return sumOfOddNumbers(n - 1)
    }

    return arr[n] + sumOfOddNumbers(n - 1)

}

console.log("Sum of only Odd Number is:-", sumOfOddNumbers(arr.length - 1))