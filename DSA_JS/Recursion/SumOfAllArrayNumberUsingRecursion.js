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