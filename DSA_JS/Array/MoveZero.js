/* 
283. Move Zeroes

Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.

Note that you must do this in-place without making a copy of the array.

 
Example 1:

Input: nums = [0,1,0,3,12]
Output: [1,3,12,0,0] */

let arr = [0, 0, 0, 20, 0, 10,]

function moveZero(nums) {
    let x = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== 0) {
            nums[x] = nums[i];
            x++;
        }
    }

    /*// Fill all the remaining elements to zero */
    for (let i = x; i < nums.length; i++) {
        nums[i] = 0
    }
}

moveZero(arr)
console.log("nums:-", arr)