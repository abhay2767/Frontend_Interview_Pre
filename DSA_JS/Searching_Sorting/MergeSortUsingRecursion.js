/* Merge Sort Alogo using recursion */

let list = [5, 2, 3, 1]

function mergeHelper(left, right) {
    let result = []
    let i = 0, j = 0;
    while (i < left.length && j < right.length) {
        if (left[i] < right[j]) {
            result.push(left[i])
            i++;
        } else {
            result.push(right[j])
            j++
        }
    }
    return [...result, ...left.slice(i), ...right.slice(j)]
}

function mergeSort(arr) {
    if (arr.length <= 1) return arr /* Base Case when to stop */
    let mid = arr.length / 2;
    let leftside = mergeSort(arr.slice(0, mid))
    let rightside = mergeSort(arr.slice(mid))
    return mergeHelper(leftside, rightside)
}

console.log("MergeSort Algo:-", mergeSort(list))