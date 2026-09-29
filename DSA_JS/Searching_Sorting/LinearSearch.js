// Find an element in array using Linear Search

function findElementInArray(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == target) return i
    }
    return "Element Not Found" // or -1
}

console.log("FindElement:-", findElementInArray([5, 3, 6, 0, 10, 2, 2], 10))
console.log("FindElement:-", findElementInArray([5, 3, 6, 0, 10, 2, 2], 100))