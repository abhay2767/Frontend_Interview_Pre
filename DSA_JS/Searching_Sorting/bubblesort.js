// Bubble Search Algorithm

// let arr = [3, 2, 5, 1, 0]
let arr = [1, 2, 3, 4]

function bubbleSort(arr) {
    let n = arr.length
    for (let i = 0; i < n - 1; i++) {
        let isSwapped = false /* Improvement if Array is not sorting then it is array is already sorted then break iteration */
        for (let j = 0; j < n - 1 - i; j++) {
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j]
                arr[j] = arr[j + 1]
                arr[j + 1] = temp
                isSwapped = true /* Means Array is not sorting */
            }
        }
        if (!isSwapped) break // return console.log("Array is already sorted")
    }
    return arr
}

let result = bubbleSort(arr)
console.log("sort:-", result)