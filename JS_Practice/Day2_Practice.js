console.log("Day 2:- Array and String Practice")

/* Array Practice */
let arr = [1, 3, 2, 4, 3, 5, 7, 6, 8]
let arr1 = ['a', 'b', 'd', 'e', 's', 'a', 'w', 'c', 'g']
let sortArr = arr.sort()
let sortArr1 = arr1.sort()
console.log("Stortarr:-", sortArr) /* Stortarr:- (9) [1, 2, 3, 3, 4, 5, 6, 7, 8] */
console.log("Stortarr1:-", sortArr1) /* Stortarr1:- (9) ['a', 'a', 'b', 'c', 'd', 'e', 'g', 's', 'w'] */

// Max number in Array
console.log("Max Number:-", Math.max(...arr))
let maxNumber = arr[0]
arr.map((item) => {
    if (item > maxNumber) {
        maxNumber = item
    }
})
console.log("maxNumber:-", maxNumber)

// Give me the Employee list that how much they have money
const employees = [
    { name: "Abhay", salary: 50000, month: "January" },
    { name: "Abhay", salary: 50000, month: "February" },
    { name: "Abhay", salary: 50000, month: "March" },

    { name: "Riya", salary: 60000, month: "January" },
    { name: "Riya", salary: 60000, month: "March" },
    { name: "Riya", salary: 60000, month: "June" },

    { name: "Sneha", salary: 70000, month: "February" },
    { name: "Sneha", salary: 70000, month: "April" },
    { name: "Sneha", salary: 70000, month: "August" },

    { name: "Karan", salary: 55000, month: "March" },
    { name: "Karan", salary: 55000, month: "July" },
    { name: "Karan", salary: 55000, month: "December" }
];

const filteredData = employees.reduce((acc, cur) => { /* acc:- previous, cur:- next */
    // console.log("acc:-",acc) /* initialy {} */
    // console.log("cur:-",cur) 
    // /* first time flow */ {name: 'Abhay', salary: 50000, month: 'January'} */ 
    // /* Secand time flow */ { name: "Abhay", salary: 50000, month: "February" } */ 
    // /* third time flow */ { name: "Abhay", salary: 50000, month: "March" } */ 
    /* so on */

    if (!acc[cur.name])
        /* first time flow => true => acc does not have "Abhay" yet */
        /* secand time flow => false (already exists). */
        /* third time flow => false (already exists). */
        /* so on */ {
        acc[cur.name] = 0
        /* first time flow so acc["Abhay"] = 0 */
        /* secand time flow so acc = { Abhay: 100000 } */
        /* third time flow soacc = { Abhay: 150000 } */
        /* ...so on */
    }
    acc[cur.name] += cur.salary /*first time flow => now acc = { Abhay: 50000 } */
    return acc
}, {})

console.log("filteredData:-", filteredData)

// Find the First Max and Secand Max number in Array
const arr2 = [10, 20, 15, 30, 25, 45, 40, 50]
const FirstMax = arr2.sort((a, b) => b - a)[0]
const SecandMax = arr2.sort((a, b) => b - a)[1]
console.log("FirstMax:-", FirstMax)
console.log("SecandMax:-", SecandMax)
/* Other ways */
let firstMaxVal = Math.max(...arr2)
let secandMaxVal = Math.max(...arr2.filter((val) => val !== firstMaxVal))
console.log("firstMaxVal:-", firstMaxVal)
console.log("secandMaxVal:-", secandMaxVal)

// Debounce 
function Debounce(fun, delay) {
    let timer = null
    return function (...arg) {
        clearTimeout(timer)
        timer = setTimeout(() => [
            fun(...arg)
        ], delay)
    }
}

const enterValue = (val) => {
    console.log("Value is:-", val)
}

const searchUsingDebounce = Debounce(enterValue, 2000)
searchUsingDebounce("Abhay")
searchUsingDebounce("AbhDubeyay")
searchUsingDebounce("sdfsj")

// Throttle
function Throttle(fun, delay) {
    let lastCallAt = null
    return function (...arg) {
        let now = Date.now()
        if (now - lastCallAt > delay) {
            return
        }
        fun(...arg)
        lastCallAt = now
    }
}

const handleSubmit = (val) => {
    console.log("Clicked:-", val)
}

const throttleFunction = Throttle(handleSubmit, 3000)
throttleFunction("ndcfhs")


/* String Practice */
// Reverse the String
let str1 = "Abhay Dubey"
/* Step:1 convert to Array*/
let strToArray = str1.split('')
console.log("strToArray:-", strToArray) /* ['A', 'b', 'h', 'a', 'y', ' ', 'D', 'u', 'b', 'e', 'y'] */
/* step:2 Reverse the converted String */
let reveseStrToArray = strToArray.reverse()
console.log("reveseStrToArray:-", reveseStrToArray) /* ['y', 'e', 'b', 'u', 'D', ' ', 'y', 'a', 'h', 'b', 'A'] */
/* Step:3 Convert the reverseStrToArray to string */
let againConvertReveseStrToArrayToString = reveseStrToArray.join("") /* yebuD yahbA */
// let againConvertReveseStrToArrayToString = reveseStrToArray.toString() /* y,e,b,u,D, ,y,a,h,b, */
console.log("againConvertReveseStrToArrayToString:-", againConvertReveseStrToArrayToString)

// Palendrom String
function isPalendrom(str) {
    let reverse = str.split("").reverse().join("")
    console.log("str:-", str)
    console.log("reverse:-", reverse)
    return str === reverse
}
console.log("isPelendrom:-", isPalendrom("racecar"))

// Count vowel and Consonants
function calculateVewelAndConsonants(str) {
    let lowerCase = str.toLowerCase()
    let vowels = null
    let consonants = null

    for (let ch of lowerCase) {
        if (ch >= 'a' && ch <= 'z') {
            if ('aeiou'.includes(ch)) {
                vowels++
            } else {
                consonants++
            }
        } /* else {
            console.warn("Please provide a correct String")
        } */
    }
    return { vowels, consonants }
}
const data = calculateVewelAndConsonants("AbhayDubey")
console.log("vowels:-", data.vowels)
console.log("consonants:-", data.consonants)

// Check the String is Anagram 
function isAnagram(str1, str2) {
    let newStr1 = str1.replace(/\s+/g, '').toLowerCase()
    let newStr2 = str2.replace(/\s+/g, '').toLowerCase()

    // console.log(newStr1.split("").sort().join(""))
    // console.log(newStr2.split("").sort().join(""))
    return newStr1.split("").sort().join("") === newStr2.split("").sort().join("")
}

console.log("isAnagram:-", isAnagram("Heart", "Earth"))

// Remove Duplicate Character
let input = 'javascript'
let result = ''
let uniqueStr = [...new Set(input)].join("")
console.log("uniqueStr:-", uniqueStr)

/* other way */
for (let char of input) {
    if (!result.includes(char)) {
        result += char
    }
}
console.log("result:-", result)

// Merge two or more String
let st1 = 'Abhay'
let st2 = 'Dubey'
let st3 = 'Delhi'
let mergeSt = st1.concat(' ', st2, ' ', st3)
console.log("mergeSt:-", mergeSt)

// Capitalize each word of String
let address = "abhay dubey is a Good boy"
/* Step:1 Convert it to Array */
let strToArr = address.split(" ")
console.log("strToArr:-", strToArr)
let capitializeWord = strToArr.map((word) => word.charAt(0).toUpperCase() + word.slice(1))
console.log("capitializeWord:-", capitializeWord.join(" "))

// make the string value capital only Even position str = 'javascript' , result = 'jAvAsCrIpT'
let str = 'javascript'
let result1 = ''

for (let i = 0; i < str.length; i++) {
    if (i % 2 === 0) {
        result1 += str.charAt(i).toUpperCase()
    } else {
        result1 += str.charAt(i)
    }
}
console.log("result1:-", result1) /* result1:- JaVaScRiPt */
