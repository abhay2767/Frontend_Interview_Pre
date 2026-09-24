// Count Dight of Number 
/* Handle corner Cased:-
1:- what if num = 0 then according to your code it return (n > 0) 0 
2:- What if num = -Negative value  then it alway return 0
 */
function countDigit(num) {
    if (num == 0) return 1;
    num = Math.abs(num) /* it will convert negative value in Postive number Match absolute */
    let count = 0;
    while (num > 0) {
        // num = num / 10; /*Sometimes It return value in dacimal form so the result maybe wrong */
        num = Math.floor(num / 10)
        count++;

    }
    return count;
}

// console.log("Count is:- ", countDigit(-0))


// Find Number is Palindrome or not  
function isPalindrome(num) {
    if (num < 0) return false
    let numOrg = num;
    let rev = 0;
    while (num > 0) {
        let rem = num % 10;
        rev = (10 * rev) + rem
        num = Math.floor(num / 10)
    }

    return console.log(rev === numOrg)
}

// isPalindrome(121)

// Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes the value to go outside the signed 32-bit integer range [-231, 231 - 1], then return
function reverseNum(x) {
    let xCopy = x;
    x = Math.abs(x) /* Handle Negative value */
    let rev = 0;
    while (x > 0) {
        let rem = x % 10;
        rev = (10 * rev) + rem
        x = Math.floor(x / 10) /* Handle Dacimal Value */
    }

    /* Note:- 
    Range = -2^31 to 2^31 - 1
        = -2147483648 to 2147483647
     */
    // return xCopy < 0 ? -rev : rev

    rev = xCopy < 0 ? -rev : rev
    let limit = Math.pow(2, 31) /* Calculate Power of 2³¹ */
    // let limit = 2**31 /* Other way to calculate power */
    if (rev < -limit || rev > limit) return 0
    return rev
}

console.log("Reverse Number:-", reverseNum(100))

// Reverse of 100 → "001" → interpreted as 1
// 👉 JavaScript numbers don’t keep leading zeros, so 001 becomes 1.