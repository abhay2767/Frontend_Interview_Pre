console.log("Debounce and throttling Practice")

function debounce(fun, delay) {
    let timerId;

    return function (...arg) {
        clearTimeout(timerId)
        timerId = setTimeout(() => {
            fun(...arg)
        }, delay)
    }
}

const search = (val) => {
    console.log("Value searching for:-", val)
}

const searchWithDebounce = debounce(search, 1000)
searchWithDebounce('hello')
searchWithDebounce('hello ok hai ')


function throttle(fun, delay) {
    let lastCallAt = 0

    return function (...arg) {
        let now = Date.now()
        if (now - lastCallAt < delay) {
            return
        }
        lastCallAt = now
        fun(...arg)
    }
}

const sendMessage = (msg) => {
    console.log("message:-", msg)
}

const sendMessageAfterDelay = throttle(sendMessage, 1000)

sendMessageAfterDelay('hell')
sendMessageAfterDelay('hell ok hjaijndfsjb ')


// Q: You have an Array of Number where you have multiple time repeated number now show the result like 
/* 
1:- Remove Dublicate
2:- Show Number with their duplicate value found
 */

let a = [1, 2, 2, 3, 4, 5, 3, 3, 8, 4, 6, 9, 9, 8, 9, 7, 4, 7, 4]

// sort Array
let sortedArray = a.sort()
// Counter value
let counter = 1

sortedArray.map((item, index) => {

    if (sortedArray[index] == sortedArray[index + 1]) {
        counter = counter + 1
    } else {
        console.log(`item ${item} repeated ${counter} times`)
        counter = 1
    }
})

/* output:-
item 1 repeated 1 times
item 2 repeated 2 times
item 3 repeated 3 times
item 4 repeated 4 times
item 5 repeated 1 times
item 6 repeated 1 times
item 7 repeated 2 times
item 8 repeated 2 times
item 9 repeated 3 times
 */


/* Q: You have nested Array their you have remove all inside nested Array with final one array */
/* 
const question = [1,2,[13,34,[13,45,67],[20,30,40]]]
const result = [1,2,13,34,13,45,67,20,30,40]
 */
const question = [1, 2, [13, 34, [13, 45, 67], [20, 30, 40]]]

// First Convert it in string
let stringValue = question.toString()
console.log("stringValue:-", stringValue)

/* Then we convert it back to Array */
let stringArray = stringValue.split(',')
console.log("stringArray:-", stringArray)

// Create new Empty Array
let result = []

// run map funcation to push value in new Array
stringArray.map((item) => {
    result.push(parseInt(item))
})

console.log("result:-", result)


/* Q: curring for sum three number */
function sum(x) {
    return function (y) {
        return function (z) {
            return x + y + z
        }
    }
}

const sumOfNumber = sum(1)(2)(3)
console.log("sumOfNumber:-", sumOfNumber)


/* Q:- Add all number of Array */
const numbers = [1, 2, 3, 4, 5, 89, 100]
const sumValue = numbers.reduce((total, next) => {
    return total + next
})

console.log("sumValue:-",sumValue)