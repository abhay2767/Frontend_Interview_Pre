/* Given an integer array nums and an integer val, remove all occurrences of val in nums in-place. The order of the elements may be changed. Then return the number of elements in nums which are not equal to val.

Consider the number of elements in nums which are not equal to val be k, to get accepted, you need to do the following things:

Change the array nums such that the first k elements of nums contain the elements which are not equal to val. The remaining elements of nums are not important as well as the size of nums.
Return k. 
https://leetcode.com/problems/remove-element/description/
*/
var removeElement = function (nums, val) {
    let x = 0;
    for (let i = 0; i < nums.length; i++) {
        /* Keep shift value from left to right when condition is true */
        if (nums[i] !== val) {
            nums[x] = nums[i];
            x = x + 1;
        }
    }
    return x;
}

console.log("Value is:-", removeElement([0, 1, 2, 2, 3, 0, 4, 2], 2))