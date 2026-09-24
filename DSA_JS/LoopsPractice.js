// 1:- Find or Search Number in Array
let arr = [10, 20, 30, 40, 50]

function findNumber(n) {
    if (!n) return console.warn("Please Enter Number")
    for (let i = 0; i < arr.length; i++) {
        if (n == arr[i]) {
            return console.log("Number found on index:-", i)
        }
    }
    return console.log("-1")
}

// findNumber(49)

// 2:-Find and return count of Negative Value
let arr1 = [10, -23, 24, 45, 98, -29, -30, 40, -50]
let negativeCount = 0

function findNegative() {
    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] < 0) {
            negativeCount = 1 + negativeCount
        }
    }
    console.log("negativeCount:-", negativeCount)
}

// findNegative()

// 3:- Find and return the Largest Number 
let arr2 = [10, 20, 30, 50, 40, -60, 75, 56, 5, 9]
// let largestNum = -Infinity
let largestNum = arr2[0]
// let largestNum = 0

function findLargest() {
    for (let i = 0; i < arr2.length; i++) {
        if (arr2[i] > largestNum) {
            largestNum = arr2[i]
        }
    }
    return console.log("Largest Number:-", largestNum)
}

// findLargest()

// 4:- Find the Secand Largest Number
let arr3 = [10, 13, 15, 20, 24, 18, 24, 17, 30]
let largest1 = -Infinity
let largest2 = -Infinity
/*
1:- Handle Array can be Empty.
2:- Handle suppose Array have only 1 number.
3:- Handle Duplicate Number in Array.
4:- Handle Array have Negative number 
 */

function findSecandLargest() {
    if (arr3.length < 2) return console.log("There is not complete number")
    for (let i = 0; i < arr3.length; i++) {
        if (arr3[i] > largest1) {
            largest2 = largest1
            largest1 = arr3[i]
        } else if (arr[3] > largest2 && arr3[i] !== largest1) {
            largest2 = arr3[i]
        }
    }
    console.log("largest1:-", largest1)
    console.log("largest2:-", largest2)
}

// findSecandLargest()

// Loop in Loop Behaviour

for (let i = 0; i < 5; i++) {
    for (let j = 0; j < 5; j++) {
        // console.log("Hello:-", i, j)
    }
}

for (let i = 0; i < 3; i++) {
    for (let j = 0; j < i; j++) {
        // console.log("Hello:-", i, j)
    }
}

/* 
Hello:- Break
Hello:- 1,0
Hello:- Break
Hello:- 2,0
Hello:- 2,1
Hello:- Break
Hello:- Break
 */

for (let i = 0; i < 3; i++) {
    for (let j = 0; j <= i; j++) {
        // console.log("Hello:-", i, j)
    }
}

/* 
Hello:- 0, 0
Hello:- Break
Hello:- 1,0
Hello:- 1,1
Hello:- Break
Hello:- 2,0
Hello:- 2,1
Hello:- 2,2
Hello:- Break
Hello:- Break
 */

for (let i = 0; i < 3; i++) {
    for (let j = i; j > 0; j--) {
        // console.log("Hello:-", i, j)
    }
}

/* 
Hello:- Break
Hello:- 1, 1
Hello:- Break
Hello:- 2, 2
Hello:- 2, 1
Hello:- Break
Hello:- Break
 */

for (let i = 0; i < 3; i++) {
    for (let j = i; j >= 0; j--) {
        // console.log("Hello:-", i, j)
    }
}

/* 
Hello:- 0,0
Hello:- Break
Hello:- 1,1
Hello:- 1,0
Hello:- Break
Hello:- 2,2
Hello:- 2,1
Hello:- 2,0
Hello:- Break
 */

for (let i = 3; i > 0; i--) {
    for (let j = 0; j < i; j++) {
        console.log("Hello:-", i, j)
    }
}

/* 
Hello:- 3,0
Hello:- 3,1
Hello:- 3,2
Hello:- Break
Hello:- 2,0
Hello:- 2,1
Hello:- Break
Hello:- 1,0
Hello:- Break
 */