console.log("String Operations")
// Q: Reverse a String
/* Since Strings in js are Immutable, We usually convert them into Array, splite(""), reverse() and then join("") back */
let str = 'Abhay Dubey'
let convertToArray = str.split("") /* it will convert it to Array with ',' seprated automatically */
console.log("convertToArray:-", convertToArray)
let reverArray = convertToArray.reverse() /* it will reverse the Array */
console.log("reverArray:-", reverArray)
let convertInString = reverArray.join("") /* Combine all elements of an array into a single string. */
console.log("convertInString:-", convertInString) /* got result */
/* str.split("").reverse().join("") */

// Q:2 Check the String is palendrome or not 
function checkPalendrom(str) {
    let reverse = str.split("").reverse().join("")
    return str === reverse
}

console.log("Check Palendrom:-", checkPalendrom("abcdcba"))
console.log("Check Palendrom:-", checkPalendrom("racecar"))
console.log("Check Palendrom:-", checkPalendrom("hello"))
console.log("Check Palendrom:-", checkPalendrom("level"))

// Q:3 Count vowel and consonants in String
function calculateVowelAndConsonants(str) {
    let vowels = null
    let consonants = null
    let smallStr = str.toLowerCase()
    for (let char of smallStr) {
        if (char >= 'a' && char <= 'z') {
            if ('aeiou'.includes(char)) {
                vowels++
            } else {
                consonants++
            }
        } else {
            console.log("Please provide a correct String")
        }
    }
    return { vowels, consonants }
}

const result = calculateVowelAndConsonants("Abhay")
console.log("vowel:-", result.vowels)
console.log("consonants:-", result.consonants)

// Q:4 Check if two Strings are Anagrams of each other
function checkAnagrams(str1, str2) {
    let st1 = str1.replace(/\s+/g, "").toLowerCase()
    let st2 = str2.replace(/\s+/g, "").toLowerCase()
    console.log(str1)
    console.log(str2)
    console.log(st1.split("").sort().join(""))
    console.log(st2.split("").sort().join(""))
    return st1.split("").sort().join("") === st2.split("").sort().join("")
    console.log("St1:-", st1, " And ", "St2:-", st2)
}

console.log("isAnagrams:", checkAnagrams("Ab ha y", "Dube  y"))
console.log("isAnagrams:", checkAnagrams("listen", "silent"))

// Q:5 Remove Duplicate Character in String
let str2 = "Abhay Dubey"
let uniqueStr = [...new Set(str2)] /* it return array */  /* Set automatically stores unique values only. */
console.log("uniqueStr:-", uniqueStr)
let convertToString = uniqueStr.join("") /* Convert to String */
console.log("convertToString:-", convertToString)

/* other way */
let uniqueString = ''
for (let char of str2) {
    if (!uniqueString.includes(char)) {
        uniqueString += char
    }
}
console.log("uniqueString:-", uniqueString)

// Q:6 Merge or Add string
let string1 = 'Abhay'
let string2 = 'Dubey'
let string3 = 'Delhi'
let combine1 = string1.split(0, 5) /* it return Array */
let combine2 = string2.split(6) /* it return Array */
console.log("Combine1:-", combine1)
console.log("combine2:-", combine2)
let finalCombine = combine1.concat(" ", combine2).join("")
let lastCombine = string1.concat(" ",string2," ",string3)
console.log("lastCombine:-",lastCombine)
console.log("finalCombine:-", finalCombine)

// Q:7 Capitalize each word first letter
let smallCaseString = "hello abhay dubey"
let capitialize = smallCaseString.split(" ")
console.log("capitialize:-", capitialize)
let mapArray = capitialize.map((word) => word.charAt(0).toUpperCase() + word.slice(1))
console.log("mapArray:-", mapArray.join(" "))
