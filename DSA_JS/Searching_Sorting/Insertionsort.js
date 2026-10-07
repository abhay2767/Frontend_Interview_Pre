// insertionSort Search Algorithm

let arr1 = [3, 2, -5, 1, 0, 12, 4, 3]

function insertionSort(arr) {
    let len = arr.length

    for (let i = 1; i < len; i++) {
        let curr = arr[i]
        let prev = i - 1;
        /* Make a hole where you have to put the current value */
        while (arr[prev] > curr && prev >= 0) {
            arr[prev + 1] = arr[prev]
            prev--
        }
        arr[prev + 1] = curr
    }
    return arr
}

console.log("Insertion Sort:-", insertionSort(arr1))
