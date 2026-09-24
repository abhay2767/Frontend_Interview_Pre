console.log("Day 2:- String Methods Operation")

//  Slice()
let str1 = 'Hello Abhay, How are You.'
console.log("Original Str1:-",str1)
let part = str1.slice(0,10) /* It take (start index, end Index-1) and if ()  Empty it return whole string*/
console.log("Part:-",part) /* Part:- Hello Abha */

// subString()
let part1 = str1.substring(6, 11);
console.log("Part1:-",part1) /* Part1:- Abhay
 */
/* returns the part of the given string from the start index to the end index. Indexing starts from zero (0). */

// substr()
let part2 = str1.substr(6, 5); /* Deprecated */
console.log("Part2:-",part2) /* Part2:- Abhay */

// replace()
let part3 = str1.replace("Power", "Space"); /* If word or character found then replace else return same string */
console.log("Part3:-",part3) /* Part3:- Hello Abhay, How are You. */

// replaceAll()
let part4 = str1.replaceAll("Hello", "Hii");
console.log("Part4:-",part4) /* Part4:- Hii Abhay, How are You. */

// charAt()
let part5 = str1.charAt(1)
console.log("Part5:-",part5) /* Part5:- e */

// split()
let toArray = str1.split() /* ['Hello Abhay, How are You.'] */
let toArray1 = str1.split(' ') /*  ['Hello', 'Abhay,', 'How', 'are', 'You.'] */
console.log("toArray:-",toArray) 
console.log("toArray1:-",toArray1) 