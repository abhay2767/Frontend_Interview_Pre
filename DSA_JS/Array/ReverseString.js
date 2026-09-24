// ReverseString.js
/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */

/* 
Reverse String
Write a function that reverses a string. The input string is given as an array of characters char[].

Do not allocate extra space for another array, you must do this by modifying the input array in-place with O(1) extra memory.
 */
var reverseString = function (s) {
    let len = s.length;
    let halfLen = Math.floor(len / 2)
    for (let i = 0; i < halfLen; i++) {
        // swap(i, n-1-i)
        // Logic
        let temp = s[i];
        s[i] = s[len - 1 - i]
        s[len - 1 - i] = temp
    }
};
let arr = ['H', 'e', 'l', 'l', 'o'];
reverseString(arr)
console.log("String:-", arr)