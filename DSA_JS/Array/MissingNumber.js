// MissingNumber.js
/* Given an array nums containing n distinct numbers in the range [0, n], return the only number in the range that is missing from the array.

 

Example 1:

Input: nums = [3,0,1]

Output: 2

Explanation:

n = 3 since there are 3 numbers, so all numbers are in the range [0,3]. 2 is the missing number in the range since it does not appear in nums. */
function missingNumber(nums) {
    let len = nums.length
    let totalSum = len * (len + 1) / 2
    let partialSum = 0
    for (let i = 0; i < len; i++) {
        partialSum = partialSum + nums[i]
    }
    return totalSum - partialSum
};

console.log("Missing Number : ", missingNumber([4, 0, 2, 1, 5]))