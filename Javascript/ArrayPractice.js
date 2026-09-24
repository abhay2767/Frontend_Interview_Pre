console.log("Array Practice")

/* Merge Array */
const arr1 = [1, 2, 3]
const arr2 = [4, 5, 6]

const newArr = [...arr1, ...arr2]
console.log("Merged Array:-", newArr)

/* Copy Array */
const copyArray = [...arr1]
console.log("Copy of Arr1:-", copyArray)

/* Duplicate number in Array */
const repeatedNumberArray = [1, 2, 1, 4, 3, 5, 6, 4, 5, 3, 2]
let duplicateNumber = []
let uniqueNumbers = []

repeatedNumberArray.forEach((num) => {
    if (uniqueNumbers.includes(num)) {
        // Already exists, so it's a duplicate
        if (!duplicateNumber.includes(num)) {
            console.log('Num is:-', num)
            duplicateNumber.push(num)
        }
    }
    else {
        console.log("Another number:-", num)
        uniqueNumbers.push(num)
    }
})


console.log("duplicateNumber:-", duplicateNumber.sort())
console.log("uniqueNumbers:-", uniqueNumbers.sort())


/* String Operion */
// Add ... after some value
const str = 'Abhay Dubey'
const maxLength = 8
const newStr = str.length > maxLength ? str.slice(0, maxLength) + "..." : str
console.log("str:-", str)
console.log("newStr:-", newStr)

/* Convert String to Array */
const strToArrayEachCharacter = str.split("") // split by each character
const strToArrayEachWord = str.split(" ") // split by spaces
console.log("strToArrayEachCharacter:-", strToArrayEachCharacter)
console.log("strToArrayEachWord:-", strToArrayEachWord)


/* factorial */
function factorial(num) {
    if (num === 0 || num === 1) return 1
    return num * factorial(num - 1)
}

console.log("Factorial:-", factorial(5))
// 5*4*3*2*1 = 120

/* Fibonacci */
function fibonacci(n) {
    if (n <= 1) return n
    return fibonacci(n - 1) + fibonacci(n - 2)
}

console.log("fibonacci:-",fibonacci(6))
// 0, 1, 1, 2, 3, 5, 8...  = 8
