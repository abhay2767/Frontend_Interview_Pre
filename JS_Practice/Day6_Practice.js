console.log("Day 6:- Practice Javascript");

// Sum the Array of number and return sum of number
function sum(arr) {
    if (!Array.isArray(arr)) {
        return console.error("Please Provide a valid Array of Number")
    }
    return arr.reduce((acc, cur) => {
        return acc + cur
    }, 0)
}

console.log("Sum of numbers:-", sum([1, 0, 10, 20, 30, 9])) /* Sum of numbers:- 70 */

// Check a function check if the string is start with aspecific character or not.
function checkString(str, ch) {
    if (typeof str !== 'string' && typeof ch !== 'string') {
        return console.log("Please Provide valid string")
    }
    const newStr = str.toString().toLowerCase()
    const newCh = ch.toString().toLowerCase()

    if (typeof newStr === 'string' && typeof newCh === 'string') {
        return newStr.startsWith(newCh)
    }
}

console.log("Check String:-", checkString('Abhay', 'a'))

// WAP to find maximum of two number
function checkGreater(n1, n2) {
    if (isNaN(n1) && isNaN(n2)) {
        return console.error("Please provide valid number")
    }

    if (n1 > n2) {
        console.log("Number 1 is Greater");
    } else if (n1 < n2) {
        console.log("Number 2 is Greater");
    } else {
        console.log("Both numbers are equal");
    }
}

checkGreater(10, 20)

// Factorial
function Factorial(n) {
    if (n === 0) return 1

    return n * Factorial(n - 1)

}

console.log("Factorial:-", Factorial(5))

/* otherway */
function getFactorial(num) {
    let fact = 1
    for (let i = 1; i <= num; i++) {
        fact = fact * i
    }
    return fact
}


console.log("getFactorial:-", getFactorial(5))

// WAP that takes a String and return its reverse without reverse method
function reverseStr(str) {
    // if (!typeof str === 'string') return console.error("please provide valid string")
    let newArr = str.split('')
    console.log("newArr:-", newArr)
    for (let i = 0; i < Math.floor(newArr.length / 2); i++) {
        console.log("newArr:-", newArr[i])
        var temp = newArr[i]
        newArr[i] = newArr[newArr.length - 1 - i]
        console.log("newArr[i]:-", newArr[i])
        newArr[newArr.length - 1 - i] = temp
    }
    return newArr
}
console.log("Reverse String:-", reverseStr("Abhay").join(''))

// WAP to get Max number from Array of number
function getMax(arr) {
    if (!Array.isArray(arr) || arr.length === 0) {
        return "Please provide a valid non-empty array";
    }

    let max = 0
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > arr[max]) {
            max = i
        }
    }
    return arr[max]
}

console.log("Max number in Array:-", getMax([10, 20, 30, 25, 15, 40]))

// WAP that convert string to Kabas-case
function KabasCase(str) {
    return str.split(' ').join('-')
}
console.log("Kabas Case:-",KabasCase("Hello Abhay   "))
