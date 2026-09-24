/* Remove Duplicate from sorted Array:-
Given an integer array nums sorted in non-decreasing order, remove the duplicates in-place such that each unique element
appears only once. The relative order of the elements should be kept the same.
Consider the number of unique elements in nums to be k​​​​​​​​​​​​​​. After removing duplicates, return the number of unique elements k.
The first k elements of nums should contain the unique numbers in sorted order. The remaining elements beyond index
 k - 1 can be ignored. */

var removeDuplicates = function (nums) {
    let x = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[x] < nums[i]) {
            x = x + 1;
            nums[x] = nums[i]
        }
    }
    return x + 1;
};

console.log("Remove Duplicates:", removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]))