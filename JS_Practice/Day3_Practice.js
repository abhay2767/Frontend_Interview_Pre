console.log("Day 3:- Practice Questions")

// Q:1 Loop and Array of Object and remove all object from Array which don't have gender value Female
const arr = [
    { name: "Abhay Dubey", age: 26, gender: 'Male' },
    { name: "Deepak Dubey", age: 24, gender: 'Male' },
    { name: "Anshu Dubey", age: 25, gender: 'Male' },
    { name: "Sachin Shakya", age: 26, gender: 'Male' },
    { name: "Rohit Shakya", age: 24, gender: 'Male' },
    { name: "Rajat Pandey", age: 28, gender: 'Male' },
    { name: "Shanta Yadav", age: 25, gender: 'Female' },
    { name: "Nidhi Kumari", age: 25, gender: 'Female' },
    { name: "Suman", age: 25, gender: 'Female' },
    { name: "Lokesh", age: 25, gender: 'Male' },
]
const finalArray = arr.filter((person) => {
    return person.gender === 'Male' && person.age >= 25
})

// console.log("finalArray:-",finalArray)
let counter = 0

arr.forEach(element => {
    if (element.gender !== 'Male') counter++
});

console.log("Counter:-", counter)
for (let i = 0; i <= counter; i++) {
    for (let j = 0; j < arr.length; j++) {
        if (arr[j].gender !== 'Male') {
            arr.splice(j, 1)
        }
    }
}

console.log("Updated Original Array:-", arr)

// Q:2 Print item from Array based on provided number in secand parameter and default print 1 item of Array
function printNumber(arr1, num = 1) {
    if (!Array.isArray(arr1)) {
        return console.warn("Please provide valid Argument in Array Format")
    }
    if (num > arr1.length) {
        return console.warn("Bhai shahav jab Array ki length hi:-", arr.length, "hai, to Aap kaise number ki value ko:-", num, "de skte h.")
    }
    if (num) {
        for (let i = 0; i <= num; i++) {
            // console.log("Value is from Starting:-",arr1[i], 'at index:-',i) /* from Starting */
            console.log("Value is from last:-", arr1[arr1.length - 1 - i], 'at index:-', arr1.length - 1 - i) /* From last */
        }
    } else {
        console.log("Only First Value:-", arr1[arr1.length - 1])
    }
}
printNumber([1, 2, 3, 4, 5], 5)

// Q:3 Print Most Frequent number comming in Array
const arr2 = [1, 2, 2, 3, 2, 4, 5, 4, 6, 6, 68, 2, 3, 4, 9, 8, 9, 7, 0, 5, 7, 5, 3, 4, 5, 6, 4, 4, 5, 5]

function mostFrequent(arrVal) {
    let frequent = {}
    
    arrVal.forEach((item) => {
        if (frequent.hasOwnProperty(item)) frequent[item]++
        else frequent[item] = 1
    })

    console.log("frequent:-", frequent) /* {0: 1, 1: 1, 2: 4, 3: 3, 4: 6, 5: 6, 6: 3, 7: 2, 8: 1, 9: 2, 68: 1} */
    console.log("Key of Object:-", Object.keys(frequent)) /* (11) ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '68'] */
    var result = Object.keys(frequent).reduce((acc, cur) => {
        // acc (Pahla person har bar nya milta h)
        // cur (Dursa person har bar nya milta h)
        // console.log("frequent[acc]:-",frequent[acc])
        // console.log("frequent[cur]:-",frequent[cur])
        return frequent[acc] > frequent[cur] ? acc : cur
    }, 0)
    // console.log("result:-",result) /* result:- 5 */
    return result
}

console.log("Most Frequent:-", mostFrequent(arr2))

// Q:4 Write a program to suffled Array (Random value) */
function shuffleArray(arr) {
    /* Sbse pahle kitna area shuffle area hai */
    let = totalShuffledArea = arr.length;

    while (totalShuffledArea > 0) {
        totalShuffledArea--;
        let indexToBeExchange = Math.floor(Math.random() * totalShuffledArea) /* Randow Index */
        /* Swapping number randow number or itme to set at last index of Array.length -1 or at totalShuffledArea */
        let temp = arr[totalShuffledArea]
        arr[totalShuffledArea] = arr[indexToBeExchange]
        arr[indexToBeExchange] = temp
    }
    return arr
}
/*  Explain:- [1,3,2,4,5,4,2,7,8]
totalShuffleArea = 9
while(true){
totalShuffledArea --; decrease the totalShuffleArea -1
indexToBeExchange  (here we store random index) let see it comes 3
let temp =arr[totalShuffledArea] (here we store array last item of Array in temp using index let see 8 index and value is 8 at last )
temp = 8

}

 */

console.log("shuffleArray:-", shuffleArray([1, 3, 2, 4, 5, 4, 2, 7, 8]))


// Q:5 WAP to compute the union of two Array
/* In set theory, the union (represented by ∪) of two sets contains all elements from either set or both,
 while the intersection (represented by ∩) contains only the elements that are common to both sets.
  For example, if Set A = {1, 2, 3} and Set B = {3, 4, 5}, then A ∪ B = {1, 2, 3, 4, 5} and A ∩ B = {3} */

function union(arr1, arr2) {
    const newArray = [...arr1, ...arr2]
    // const removeDuplicate = new Set(newArray)
    const removeDuplicate = [...new Set(newArray)]
    /* 
    [...new Set(newArray)] this wil give you Array type
    new Set(newArray) this wil give you Object type
     */
    return removeDuplicate
}

console.log("Union:-", union([1, 2, 3], [100, 2, 1, 10]))
