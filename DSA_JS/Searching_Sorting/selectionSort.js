// Selection Search Algorithm

let arr1 = [3, 2, -5, 1, 0]

function selectionSort(arr) {
    let len = arr.length

    for (let i = 0; i < len - 1; i++) {
        let minValue = i; /* Find the mininum let suppose at initial it is at 0 index */
        for (let j = i + 1; j < len; j++) {
            if (arr[j] < arr[minValue]) {
                minValue = j
            }
        }
        if (minValue != i) { /* improvement only swap when both are diffrent */
            let temp = arr[minValue]
            arr[minValue] = arr[i]
            arr[i] = temp
        }
    }
    return arr
}

console.log("Selection Sort:-", selectionSort(arr1))
