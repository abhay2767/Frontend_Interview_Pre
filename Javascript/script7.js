console.log("Hello Javascript")
/*High Order Function in js */
/* forEach(), map(),filter(),splice(),slice(),find() */

const arr = ["Abhay", "Rajat", "Anshu", "Sachine", "Rohit", "Deepak"]

/* forEach */
// arr.forEach((value)=>console.log("Result:-",value+' '+'Boy')) 
// /* Only for Iterate value not modify original array and it does not return any new Array */

const number = [1, 2, 4, 5, 6]
/* Double the number using forEach loop and return or save in new Array */
let newArr = []
number.forEach((value) => newArr.push(value * 2))
console.log("NewArray:-", newArr)
/* forEach retrun nothing */

/* map() */
number.map((value, index) => {
    console.log("value",value)
})
function Double (n){
    return n*2
}
newArr = number.map(Double)
console.log("newArr using map:-",newArr)
/* Here in map it retrun new Array  */

/* find() */
let answer = number.find((num)=>num ===4)
console.log("Answer:-",answer)
/* Output Answer:4 if not found then retrun undefined */

/* findIndex() */
let answer1 = number.findIndex((num)=>num ===4)
console.log("Answer1:-",answer1) 
/* It return index */

/* filter() */
let evenNumber = number.filter((num)=>num % 2 === 0)
console.log("EvenNumber:-",evenNumber)
/* It return filter data if found else empty Array */