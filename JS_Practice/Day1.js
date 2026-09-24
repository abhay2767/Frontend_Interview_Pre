console.log("Day 1:-")

// Q:1 Debounding Program
function debounce(fun, delay) {
    let timerId = null
    return function (...arg) {
        clearTimeout(timerId)
        timerId = setTimeout(() => {
            fun(...arg)
        }, delay)
    }
}

const search = (val) => {
    console.log("val is:-", val)
}

const debounceFunc = debounce(search, 2000)
debounceFunc("djfhsd")
debounceFunc("asd")
debounceFunc("w")

// Q:2 Throttle Program
function throttle(fun, delay) {
    let lastClicked;
    return function (...arg) {
        let now = Date.now()
        if (now - lastClicked < delay) {
            return
        }
        fun(...arg)
        lastClicked = now
    }
}

const handleSubmit = (val) => {
    console.log("Clicking on Button:-", val)
}

const throttleFunc = throttle(handleSubmit, 2000)
throttleFunc("click the button now ")
throttleFunc("click the button now1 ")
throttleFunc("click the button now2 ")

// Q:3 Recursion Program
let userDetails = {
    name: "Abhay",
    mobile: 8859022835,
    address: {
        state: {
            Rajya: "UP",
            city: {
                place: "Kanpur",
                town: {
                    place: "Sahar",
                    pincode: {
                        pin: 201010
                    }
                }
            }
        }
    }
};

/* Result it want */
let output = {
    name: "Abhay",
    mobile: 8859022825,
    address_state_rajya: "Up",
    address_state_city_place: "Kanpur",
    address_state_city_town_place: "Sahar",
    address_state_city_town_pincode_pin: "Sahar",
}

let result = {}

function recursionFunc(obj, parent = "", result = {}) {
    for (let key in obj) {
        let value = obj[key];
        let newKey = parent ? parent + "_" + key.toLowerCase() : key.toLowerCase();

        if (typeof value === "object" && value !== null) {
            recursionFunc(value, newKey, result);
        } else {
            result[newKey] = value;
        }
    }
    return result;
}

let outpu1t = recursionFunc(userDetails);

console.log("output:", outpu1t);

// Q: 4 Shallow Copy Program
let obj1 = {
    name: "Abhay",
    address: {
        city: "Kanpur"
    }
}
/* 1st Way */
let newShallowObj = { ...obj1 }
newShallowObj.name = "Sachin"
newShallowObj.address.city = "Delhi"  /* Change nested object in original */
/* Because the address object is shared reference, changes in obj1.address also affect  shallowCopy */

console.log("obj1:-", obj1)
console.log("newShallowObj:-", newShallowObj)


// Q: 5 Deep Copy Program
let obj2 = {
    name: "Abhay Dubey",
    address: {
        city: "Delhi"
    }
}

let deepCopyObj2 = JSON.parse(JSON.stringify(obj2))
deepCopyObj2.name = "Sachin Shakya",
    deepCopyObj2.address.State = "Uttar Pradesh"
deepCopyObj2.address.city = "Sahar"

console.log("obj2:-", obj2)
console.log("deepCopyObj2:-", deepCopyObj2)

// Q:6 Find Even and Odd Number
function isEven(n) {
    if (n === 0) {
        return console.warn("Please provide value number")
    } else if (n % 2) {
        return console.log("Number is Odd:-", n)
    } else if (n % 2 == 0) {
        return console.log("Number is Even:-", n)
    }
}
// const number = prompt("Enter a number: ");  /* prompt returns a string */
// isEven(number)

// Q:7 Find number is Prime
function isPrime(val) {
    let n = Number(val)
    console.log("Number:-", n)
    if (n === 0 || n === 1) {
        console.log("outside")
        return console.log("Please Provide Number above 2")
    } else if (isNaN(n)) {
        return console.error("Not a Number")
    } else {
        console.log("Inside")
        for (let i = 2; i < Math.sqrt(n); i++) {
            if (n % i === 0) {
                return console.log("Number is prime:-", n)
            }
        }
    }
}
isPrime(10)

// Q:8 Factorial of Number
function Factorial(n) {
    n = Number(n)
    if (isNaN(n) || n < 0) {
        return console.warn("Please Provide a valid number")
    }
    if (n === 0 || n === 1) {
        return 1
    }

    return n * Factorial(n - 1)
}

// const number = prompt("Enter a number: ");   /* prompt returns a string */
// console.log(`Factorial of ${number} is:-`, Factorial(number))

// Q:9 Fibonacci Series 
function Fibonacci(n) {
    n = Number(n)
    if (isNaN(n) || n < 0) {
        return console.log("Please provide valid number")
    } else if (n === 0) // Base cases
    {
        return 0
    } else if (n === 1) {
        return 1
    }
    else {
        return Fibonacci(n - 1) + Fibonacci(n - 2)
    }
}

// const number = prompt("Enter a number: ");  /* prompt returns a string */
// console.log(`Fibonacci of ${number} is:-`, Fibonacci(number))