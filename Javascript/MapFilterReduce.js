console.log("Map(), Filter()and Reduce()")
const arr = [2, 4, 6, 8, 10, 3, 9]
console.log("arr:-", arr)
console.log("1:- Map():-")

// Double [4,8,12,16,20]
// Triple [6,12,18,24,30]
// Binary ['10', '100', '110', '1000', '1010']

/* Double The value of Array */
const doubleValue = arr.map((val) => val * 2)
// console.log("Double Value:-",doubleValue)

const tripleValue = arr.map(function (x) {
    return x * 3
})
// console.log("Triple Value:-",tripleValue)

const BinaryOfNumber = (x) => {
    return x.toString(2)
}

const getBinaryNumber = arr.map(BinaryOfNumber)
// console.log("Binary Value :-",getBinaryNumber)

console.log("2:- Filter():-")
function isOdd(n) {
    if (n % 2) return true
}

function isEven(n) {
    if (n % 2 === 0) return true
}

const oddNumber = arr.filter(isOdd)
const evenNumber = arr.filter(isEven)
// console.log("oddNumber:-",oddNumber)
// console.log("evenNumber:-",evenNumber)

console.log("3:- Reduce():-")

/* Normal Function to add sum */
function sumOfArray(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i]
    }
    return sum
}

// console.log("Sum is:-", sumOfArray(arr))

/* using reduce() */
let initialValue = 0
const sumOfValue = arr.reduce(function (accumulator, current) {
    // console.log("Accumulator:-", accumulator)
    // console.log("Current:-", current)
    return accumulator = accumulator + current
}, initialValue)

// console.log("sumOfValue:-", sumOfValue)

/* Note:- 
1: It take two Parameter functlion and initial Value
2: In function we have two Parameter accumulator and current 
3: And accumulator = initialValue
*/

/* Find Max Value in Array */
function maxValue(arr) {
    let max = 0
    for (let i = 0; i < arr.length; i++) {
        if (max < arr[i]) {
            max = arr[i]
        } else {
            console.log("")
        }
    }
    return max
}

// console.log("maxValue:-", maxValue(arr))

/* using reduce */
const maxNumber = arr.reduce(function (acc, curr) {
    if (curr > acc) {
        return curr
    } else {
        return acc
    }
}, 0)


// console.log("maxNumber:-", maxNumber)

console.log("Difficult Example:-")
console.log("Map():-")

const users = [
    { firstName: "Abhay", lastName: "Dubey", age: 26 },
    { firstName: "Sachin", lastName: "Shakya", age: 27 },
    { firstName: "Rohit", lastName: "Shakya", age: 24 },
    { firstName: "Deepak", lastName: "Dubey", age: 24 },
    { firstName: "Anshu", lastName: "Dubey", age: 25 },
]

// output: ["Abhay Dubey", "Sachine Shakya",...so on]
const output = []

const result = users.map((item) => {
    let firstName = item.firstName
    let lastName = item.lastName
    let fullName = `${firstName} ${lastName}`
    // console.log("fullName:-",fullName)
    output.push(fullName)
    // item.firstName + " " + item.lastName
})

// console.log("Output:-", output)

const otherWay = users.map((item) => item.firstName + " " + item.lastName)
// console.log("otherWay:-", otherWay)


// Output : {age:24 = 2, age:25 = 1, age:26:1,...so on}
const groupAge = users.reduce((acc, curr) => {
    if (acc[curr.age]) {
        acc[curr.age] = ++acc[curr.age]
    } else {
        acc[curr.age] = 1
    }
    return acc
}, {})

/* Here {} what result return at last inside basically it is used for retrun value */

// console.log("griupAge:-",groupAge)

// output: ['Sachin', 'Abhay'] /* Return whose age is greater than 30 with firstname */
const bigAge = users.filter((item)=> item.age < 25 && item.firstName).map((item)=>item.firstName) /* chain the methods filter(),map() */
console.log("bigAge:-",bigAge)

/* try using reduce */
