console.log("Day 4 Practice")

// What will be the output if we devide 100/0 => Infinity
console.log("100/0 =>", 100 / 0) /* 100/0 => Infinity */
console.log("null == null =>", null === null) /* null == null => true */

// Create a for loop that skip Odd number from 1 to 20
for (let i = 1; i < 21; i++) {
    if (i % 2 === 0) {
        // console.log("Even Number:-", i)
    }
}

// Create a nested loop to print 3X3 grid of numbers.
/* 
1 2 3
4 5 6
7 8 9
 */
let hold = 1
for (i = 1; i < 4; i++) {
    let str = ''
    for (let j = 1; j < 4; j++) {
        str += `${hold} `;
        hold++;
    }
    // console.log(str)
}

// use a for loop to reverse of array [1,2,3,4]
let arr = [1, 2, 3, 4,5]
for (let i = 0; i < Math.floor(arr.length / 2); i++) {
    var temp = arr[i]
    arr[i] = arr.length - 1 - i
    arr[arr.length - i - 1] = temp
}

console.log(temp)