console.log("Interview Practice")
/* Array Questions */
// Q:1 Find Max and min value in array
const arr = [100, 20, 40, 200, 30, 40, 50, 200]
console.log("Original Array:-", arr)

let max = arr[0]
let min = arr[0]
arr.map((item) => {
    if (item < max) {
        max = item
    } else {
        min = item
    }
})
console.log("Max value:-", max)
console.log("Min value:-", min)
console.log("Other method to calculate Min and Max value:-", "Max", Math.max(...arr), "Min:-", Math.min(...arr))

// Q:2 Find sum of all Number (Take same Array)
let val = 0
let sumVal = arr.forEach((item) => {
    val = val + item
})

const sumOfArray = arr.reduce((acc, cur) => {
    return acc + cur
}, 0)

console.log("Sum of Array Number using forEach:-", val)
console.log("Sum of Array Number using reduce :-", sumOfArray)

// Q:3 Remove Duplicate from Array
const newArray = []
const duplicateArray = []
const sortArray = arr.sort()

sortArray.map((item) => {
    if (!newArray.includes(item)) {
        newArray.push(item)
    } else {
        duplicateArray.push(item)
    }
})

let uniqueArr = [...new Set(arr)];
console.log('UniqueArr:-',uniqueArr)

console.log("NewArray:-", newArray)
console.log("duplicateArray:-", duplicateArray)

// Q:4 Merge two Array and remove Duplecate and sort the Array
const arr2 = [200, 100, 30, 45, 87, 90, 60, 50, 3]
const mergedArray = [...arr, ...arr2]
const updatedArray = []

mergedArray.forEach((item) => {
    if (!updatedArray.includes(item)) {
        updatedArray.push(item)
    }
})

console.log("Final Array:-", updatedArray)

// Q:- Find out Even, Odd, Prime in Array
updatedArray.forEach((item) => {
    if (isPrime(item)) {
        console.log("Number is Prime:-", item);
    } else if (item % 2 === 0) {
        console.log("Number is Even:-", item);
    } else {
        console.log("Number is Odd:-", item);
    }
});

function isPrime(num) {
    if (num < 2) return false; // 0 and 1 are not prime
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false; // divisible by i, not prime
    }
    return true; // no divisors found → prime
}

// Q:5 Remove and add  Item at Index 3
/* Remove item at index 3 */
/* array.splice(startIndex, deleteCount, item1, item2, ...)   Optional item1, item2... → items to insert at that position */
updatedArray.splice(3, 1)
console.log("updatedArray remove item at 3 index:-", updatedArray)
/* Add item at Index 3 => 30 */


const abhayArr = [10,20,30,40,50,60]
abhayArr.splice(3, 0, 35)
console.log("abhayArr add item at 3 index", abhayArr)

// Q:6 Show item upto 4th Index
console.log("updatedArray:-",updatedArray)
const newUpdatedArray = updatedArray.slice(2, 4)
console.log("newUpdatedArray:-", newUpdatedArray)

// Q:7 create a new Array and first add value at first index and and then remove it and again add new value at last index and remove it
const initalArray = [10, 20, 30, 40, 50, 5]
console.log("InitialArray:-", initalArray)
initalArray.push(60)
console.log("Add value at last from InitialArray:-", initalArray)
initalArray.pop()
console.log("Remove value at last from InitialArray:-", initalArray)
initalArray.unshift(5)
console.log("Add value at first from InitialArray:-", initalArray)
initalArray.shift()
console.log("remove value at first from InitialArray:-", initalArray)

// Q:8 Sort Array based on age 
const arrObj = [{ age: 30 }, { age: 25 }, { age: 16 }, { age: 21 }, { age: 35 }]
console.log("original:-", arrObj)
// arrObj.sort((a,b)=> a.age - b.age) /* assendingOrder */
arrObj.sort((a, b) => b.age - a.age)  /* desendingOrder */
console.log("updatedResult:-", arrObj)

// Q:9 Sort Array based on date 
let sortBasedOnDate = [
    { name: "A", date: "2025-01-05" },
    { name: "B", date: "2024-12-20" },
    { name: "C", date: "2025-03-15" }
];
sortBasedOnDate.sort((a, b) => new Date(a.date) - new Date(b.date))
console.log("sorted by Date:-", sortBasedOnDate)

// Q:10 Find secand Largest number is Array
const number = [10, 30, 40, 50, 55, 60, 20]
const secandMaxValue = number.sort((a, b) => b - a)[1] /* sort in desending order (b-a) */
const firstMaxValue = number.sort((a, b) => b - a)[0] /* sort in desending order (b-a) */
console.log("all number:-", number)
console.log("2 Max number:-", secandMaxValue)
console.log("1 Max number:-", firstMaxValue)

/* other way */
let maxValueFromArray = Math.max(...number)
console.log("maxValueFromArray:-", maxValueFromArray)
let secandLargestValue = Math.max(...number.filter((num) => num != maxValueFromArray))
console.log("Other way:-", secandLargestValue)

/* one more way */
let arr3 = [10, 20, 30, 40, 50, 55, 60];
let first = -Infinity, second = -Infinity
for (let num of arr3) {
    if (num > first) {
        // console.log("num if true:-", num)
        // console.log("first if true:-", first)
        // console.log("second if true:-", second)
        second = first; // move down the old max
        first = num;    // update max
    } else if (num > second && num < first) {
        // console.log("num if false:-", num)
        // console.log("first if false:-", first)
        // console.log("second if false:-", second)
        second = num;   // update second max
    }
}

console.log("1 Max number:-", first);
console.log("2 Max number:-", second);

// Q:11 Reverse the Array
console.log("Orginal Array:-",arr3)
console.log("After reverse Array:-",arr3.reverse()) /* it affect or change in original Array */

/* other way with changing original Array */
let arr4 = [10, 20, 30, 40, 50];
let reversed = arr4.slice().reverse();  /* for empty slice() give new copy of all element of Array  */
console.log("arr4:-",arr4)
console.log("reversed:-",reversed)

/* other way */
let reversedArray = []
for(let i = arr4.length -1; i >= 0; i--){
    reversedArray.push(i)
}
console.log('Using for lop reverse the Array:-',reversedArray)

/* one more way */
let reveredUsingReduce = arr4.reduce((acc,cur)=>[cur,...acc],[])
console.log("reveredUsingReduce:-",reveredUsingReduce)

