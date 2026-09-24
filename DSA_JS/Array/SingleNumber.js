/* Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.

You must implement a solution with a linear runtime complexity and use only constant extra space.

Without Extra Space and Time complexity is O(n)
 

Example 1:

Input: nums = [2,2,1]

Output: 1 */

function singleNumber(nums) {
    let hash = {}
    for (let i = 0; i < nums.length; i++) {
        if (!hash[nums[i]]) {
            hash[nums[i]] = 1
        } else {
            hash[nums[i]]++
        }
    }
    for (let i = 0; i < nums.length; i++) {
        if (hash[nums[i]] == 1) {
            return nums[i]
        }
    }
}

console.log("Single Number:- ", singleNumber([4, 1, 2, 1, 2]))