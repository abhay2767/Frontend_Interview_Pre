console.log("Hello Javascript")
/*String methods in js */
const getName = new String("Hello Javascript")

console.log("length:-",getName.length)
console.log("charcter on index:-",getName.charAt(2))
console.log("at on index:-",getName.at(-2)) /* -2 from back */

console.log("IndexOf:-",getName.indexOf('H'))
console.log("lastIndexOf:-",getName.lastIndexOf('a'))
console.log("includes:-",getName.includes('Java'))
console.log("startWith:-",getName.startsWith('H'))
console.log("endsWith:-",getName.endsWith('H'))
console.log("search:-",getName.search('a'))

console.log("slice:-",getName.slice(0,5)) /* It is not consider last value show upto n-1 like 0,1,2,3,4 not 5  */
console.log('subString:-',getName.substring(6,10))
// console.log("subStr:-",getName.substr()) /* Deprecated */

console.log("concat:-",getName.concat(", Abhay Dubey")) /* This will add value ahead */
console.log("replace:-",getName.replace('H','#'))  /* Replace value or complete keyword only first where get first value */
console.log("replaceAll:-",getName.replaceAll('a','@')) /* it will replace each value in complete string */
console.log("toLowerCase:-",getName.toLowerCase()) /* Convert all  value lower */
console.log("toLowerCase:-",getName.toUpperCase()) /* convert all value Capital */

const newStr = '       Hello Abhay   Kanpur         '
console.log("trim:-",newStr.trim()) /* Remove unneccesary white space */
console.log("trimStart:-",newStr.trimStart()) /* Remore extra white from start */
console.log("trimEnd:-",newStr.trimEnd()) /* Remore extra white from end */

console.log("split:-",newStr.split(" "))
console.log("split:-",newStr.split(","))

console.log("bold :-",newStr.bold());      // "<b>Hello Javascript</b>"
console.log("italics :-",newStr.italics());   // "<i>Hello Javascript</i>"
console.log("anchor :-",newStr.anchor("link")); // "<a name="link">Hello Javascript</a>"


