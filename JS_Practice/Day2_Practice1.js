console.log("Practice Javascript")
// Q:1 Reverse word of String
let str = "Hello Abhay, How are you."
let result = str.split(" ").map((word) => {
    return word.split('').reverse().join('')
})
console.log("result:-", result.join(' ')) /* olleH ,yahbA woH era .uoy */

// Q:2 Empty whole Array without pop(), shift(), splice()
const arr = [1, 2, 3, 4, 5]
console.log(`Array of ${arr} of length:- ${arr.length}`) /* Array of 1,2,3,4,5 of length:- 5 */
arr.length = 0
console.log("After updated Array:-", arr)  /* After updated Array:- [] */

// Q:3 Make duplicate item in existing Array
function makeDuplicate(ar) {
    // const newArray = [...ar, ...ar]
    const newArray = ar.concat(ar)
    return newArray
}

console.log("New Array:-", makeDuplicate([1, 2, 3, 4, 5])) /* New Array:- (10) [1, 2, 3, 4, 5, 1, 2, 3, 4, 5] */

// Q:4  Reverse a number
let number = 12345
let reverseNum = number.toString().split('').reverse().join('')
console.log("reverseNum:-", reverseNum) /* reverseNum:- 54321 */
console.log(number % 10) /* 5 It will be alway last number */
console.log(number / 10) /* 1234.5 */ /* repeat same at take flore value  */
console.log(Math.floor(number / 10))
/* Other way */
function reverseNumber(num) {
    let rev = 0
    while (num > 0) {
        let lastDigit = num % 10
        rev = rev * 10 + lastDigit
        num = Math.floor(num / 10)
    }
    return rev
}
console.log("reverseNumber(123456):-",reverseNumber(123456))  /* reverseNumber(123456):- 654321 */

// Q:5 Count repeated Character number of times like 'apple'=> {a:1, p:2,l:1,e:1}
function checkCounter (str3){
    let counter = {}
    str3.split("").forEach(element => {
        if(counter.hasOwnProperty(element) === false){
            counter[element] = 1
        }else{
             counter[element]++
        }
    });
    return counter
    

}
console.log("checkCounter:-",checkCounter('apple')) /* checkCounter:- {a: 1, p: 2, l: 1, e: 1} */
