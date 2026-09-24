console.log("Day:2 Array Methods Operations:-")

// for, for...of, for...in and for...Each Loop
const fruits = ['Banana', 'mango', 'Apple', "Orange", "Papaya"]
console.log("Fruits:-", fruits)
console.log("IsArray:-", Array.isArray(fruits))  /* IsArray: true */

for(let i = 0; i < fruits.length ; i++){
    console.log("Iterate Fruits Insdex or Length:-",i)
}

fruits.forEach((element,index) => {
    console.log(`Postion:- ${index} at Fruit:- ${element} `)
});

for(let index in fruits){
    console.log("Index is:-",index)
    console.log("Get Item using Index is:-",fruits[index])
}

for(let item of fruits){
    console.log("Item is:-",item)
}




// Combine or cancate Array
const newFruits = ["Grapes", "Strawberry", "Watermelon", "Pineapple", "Kiwi", "Pear"]
/* 1:- using concat() method */
let allFruits = fruits.concat(newFruits)
console.log("allFruits:-", allFruits)
/* 2:- using spread method */
let mergeAllFruits = [...fruits, ...newFruits]
console.log("mergeAllFruits:-", mergeAllFruits)


// find() and filter() diffrence
let findFruit = fruits.find((item) => item === "mango")  /* It return value on first search result else return undefined and stop */
// let findFruit = fruits.find((item,index)=> index === 0)  /* also can find the value on Index*/
console.log("findFruit:-", findFruit) 
let filterFruits = newFruits.filter((item, index) => item.includes('y')) /* It return new Array else Empty Array and continue search */
console.log("filterFruits:-", filterFruits) 


// Why [1,2,3] === [1,2,3] return false
let arr1 = [1, 2, 3], arr2 = [1, 2, 3]
console.log(arr1 === arr2)   /* false */
console.log(arr1 == arr2)   /* false */
/* In js Array are object , and objects are compared by reference , not by value
Each [1, 2] creates a new array in memory.
Even though the contents are the same, they are stored at different memory locations.
So, == or === checks if both references point to the same object, which they don’t. */


// some() how to use it
let num = [1, 2, 3, 4, 5]
let hasEven = num.some((item) => item % 2 === 0)
console.log("hasEven:-", hasEven) /* true (2 is Even) */
/* Some() will checks if at least one item in an array passes a test (return true in function) else false */


// every() how to use it 
let num1 = [2, 4, 6, 8, 10, 12, 14, 15]
let allEven = num1.every(num => num % 2 === 0)
console.log("allEven:-", allEven)
/* every() inhence version of some() it checks that all test passes in Array then return true else false */

// includes() how to use it
let hasItem = num1.includes(10)
console.log("hasItem:-", hasItem)
/* includes() checks the particular itme is aviable in Array or  not */

// indexOf() how to use it
console.log("indexOf the Item:-", newFruits.indexOf('Pear')) /* indexOf the Item:- 5 */ /* Left to right */
/* if the test found then return item index else return -1 if the item not found */
console.log("lastIndexOf:-",newFruits.lastIndexOf('Pineapple')) /* Right to left */

// join() how to use it
let foodsArray = ['Pizza', "Sandwtch", "Burger"]
let foodString = foodsArray.join(",") /* it convert Array to String */
console.log("foodsArray:-", foodsArray) /* ['Pizza', 'Sandwtch', 'Burger'] */
console.log("foodString:-", foodString) /* Pizza,Sandwtch,Burger */


// copy the Array
let users = ["Abhay", "Sachine", "Rohit", "Anshu", "Dipak"]
let copy1 = [...users] /* using spread operator */
let copy2 = Array.from(users)  /* using Array.from() */
console.log("Copy1:-", copy1) /*  ['Abhay', 'Sachine', 'Rohit', 'Anshu', 'Dipak'] */
console.log("Copy2:-", copy2) /*  ['Abhay', 'Sachine', 'Rohit', 'Anshu', 'Dipak'] */

let str = 'hello';
let strArray = Array.from(str); /* It also convert string to Array */
console.log("strArray:-", strArray)  /* strArray:- (5) ['h', 'e', 'l', 'l', 'o'] */


// flat() how to use it and purpose
let nestedArray = [1, 2, [3, 4, 5], 6, 7, [8, 9, [10, 11], [12]]]
let flat1Level = nestedArray.flat()
let flatAllLevel = nestedArray.flat(Infinity)
console.log("flat1Level:-", flat1Level)  /* {1, 2, 3, 4, 5, 6, 7, 8, 9, Array(2), Array(1)] */
console.log("flatAllLevel:-", flatAllLevel)  /* [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12] */
/* It basically unpack or unzip nested array in one single Array and by default it flat upto level 1 else we can provide depth 2,3 */

// flatMap() how to use it and purpose => flat() + Map() combination
let words = ["hello world", "how are you"];
let flatMapWords = words.flatMap(sentence => /* sentence.split(' ') */ console.log([sentence[0]]));
console.log("flatMapWords:-", flatMapWords) /* ['hello', 'world', 'how', 'are', 'you'] */
/* It first use Map() and the flat() the item  */


/* function greet(name, callback) {
    callback(); // calling the callback
  console.log("Hello " + name);
}

function sayBye() {
  console.log("Goodbye!");
}

greet("Abhay", sayBye); */


// set() how to use and purpose
let duplicatedNumber = [1, 2, 3, 2, 3, 2, 4, 4, 5, 5, 3, 2, 1]
let removeDuplicate = new Set([...duplicatedNumber])
console.log("removeDuplicate:-",/* typeof */ removeDuplicate)  /* removeDuplicate:- Set(5) {1, 2, 3, 4, 5} in object format */
/* It remove duplciate and return unique value in object format */

// fill() how to use it and purpose
const numbers = [1, 2, 3, 4, 5];
// Fill the entire array with 0
numbers.fill(0);
console.log(numbers); // Output: [0, 0, 0, 0, 0]
/* The fill() method can be used in three ways:
array.fill(value): Fills the entire array with the specified value.
array.fill(value, start): Fills the array with the value starting from the start index (inclusive) to the end of the array.
array.fill(value, start, end): Fills the array with the value starting from the start index (inclusive) up to, but not including, the end index. */

// Merge two Array and remove duplicate
let array1 = [1, 2, 3, 4, 5]
let array2 = [1, 2, 6, 7, 5]
let uniqueArray = [...new Set([...array1, ...array2])]
console.log("uniqueArray:-", uniqueArray) /* [1, 2, 3, 4, 5, 6, 7] */

/* Unduplicated Number */
let arr4 = [1,2,2,3,3,3,4] /* filter + indexOf + lastIndexOf */
let unDuplicate = arr4.filter(num => arr4.indexOf(num) === arr4.lastIndexOf(num))
console.log("UnDuplicate:-",unDuplicate) /* UnDuplicate:- (2) [1, 4] */


// Remove falsy value from Array 
/* Falsy values are things like false, 0, '', null, undefined, or NaN. */
let mixedArray = [0, 1, false, 2, "", 3, null, 'a', undefined]
let truthyArray = mixedArray.filter(Boolean)
console.log("truthyArray:-", truthyArray)  /*  [1, 2, 3, 'a'] */
/* Use filter with Boolean as the function to keep only truthy values (ones that aren’t falsy). It’s like cleaning a list to
 keep only valid items. */

//  Find intersection or common item or value from two Array
let number1 = [1, 2, 3, 4, 5]
let number2 = [3, 4, 5, 6, 7, 8]
let interSection = number1.filter(value => number2.includes(value)) /* Set intersection */
console.log("interSection:-", interSection) /* [3, 4, 5] */

let union = [...new Set([...number1, ...number2])]; /* other way */
console.log("union:-",union)

// What are sparse arrays and how do they differ from dense arrays?
let denseArray = [1, 2, 3];
let sparseArray = [1, , 3]; // Missing index 1
console.log(denseArray.length); // Output: 3
console.log(sparseArray.length); // Output: 3
console.log(sparseArray[1]); // Output: undefined
/* Sparse arrays have gaps (missing or undefined items) at some indices, like a bookshelf with empty spots.
 Dense arrays have items at every index, like a fully stocked shelf. Sparse arrays use less memory for gaps but can be slower 
 for some operations since JavaScript needs to handle the missing spots. */

//  copyWithin() how to use and purpose
let arr = [1, 2, 3, 4, 5]
arr.copyWithin(0, 3,4) /* arr.copyWithin(target, start, end) */ 
/*
target: Index where to copy the elements to (overwrite starts here)
start:-Index where to start copying from (inclusive)
end:- Index where to stop copying (exclusive, optional, default = array length)
 */
console.log("arr:-", arr) /* [4, 5, 3, 4, 5] */
/* The copyWithin method copies part of an array to another spot in the same array, overwriting what’s there.
 You specify where to copy to, where to copy from, and optionally where to stop copying. It’s like moving a section of 
 a list to another position, changing the original list. */

//  Convert Array to String
let fruitss = ['apple', 'banana', 'cherry'];
console.log(fruitss.toString()); // Output: 'apple,banana,cherry'
console.log(fruitss.join(', ')); // Output: 'apple, banana, cherry'

//  What are array methods keys(), values(), and entries()?
let arr3 = ['a', 'b', 'c'];
console.log([...arr3.keys()]); // Output: [0, 1, 2]
console.log([...arr3.values()]); // Output: ['a', 'b', 'c']
console.log([...arr3.entries()]); // Output: [[0, 'a'], [1, 'b'], [2, 'c']]