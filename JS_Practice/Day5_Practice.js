console.log("Day 5:- Hello javascript")

// Reverse Array without reverse method
const arr = [1, 2, 3, 4, 5]
for (let i = 0; i < Math.floor(arr.length / 2); i++) {
    console.log("Arr:-", arr[i])
    var temp = arr[i]
    arr[i] = arr[arr.length - 1 - i]
    console.log("arr[i]:-", arr[i])
    arr[arr.length - 1 - i] = temp
}
console.log("Reversed Arr:-", arr)

// Print number 1  to 100 which are divisble by 5
let num = 1;
while (num < 100) {
    if (num % 5 === 0) console.log("n:-", num)
    num++;
}

// sort array without sort() uisng bubbleSort Algorithm with optimized code
// also we have quick sort, heap sort, merge sort, selection sort (just oppsite of bubble sort which start from end side)
const arr1 = [10, 5, 30, 24, 35]
for (let j = 0; j < arr1.length - 1; j++) {
    for (let i = 0; i < arr1.length - j - 1; i++) {
        if (arr1[i] > arr1[i + 1]) {
            /* Swaping */
            let temp = arr1[i]
            arr1[i] = arr1[i + 1]
            arr1[i + 1] = temp
        }
    }
}
console.log("Sorted Arr1:-", arr1)

