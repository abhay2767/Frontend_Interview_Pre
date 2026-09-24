console.log("Even, Odd and Prime Numbers")

function evenAndOddNumber(n) {
    if (n < 0) {
        return
    } else if (n % 2 === 0) {
        console.log("Number is Even:-", n)
    } else if (n % 2 !== 0) {
        console.log("Number is Odd:-", n)
    }
}

evenAndOddNumber(99)

function isPrime(n) {
    if (n <= 1) {
        retrun /* 0,1 are not Prime */
    } else {
        for (let i = 2; i < Math.sqrt(n); i++) {
            if (n % i === 0) return console.log("Number is not Prime:-", n)
        }
        return console.log("Number is Prime:-", n)
    }
}

isPrime(18)