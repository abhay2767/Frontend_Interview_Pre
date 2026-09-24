// MergeSort.js
/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */

/* 
You are given two integer arrays nums1 and nums2, sorted in non-decreasing order, and two integers m and n, representing the number of elements in nums1 and nums2 respectively.

Merge nums1 and nums2 into a single array sorted in non-decreasing order.

The final sorted array should not be returned by the function, but instead be stored inside the array nums1. To accommodate this, nums1 has a length of m + n, where the first m elements denote the elements that should be merged, and the last n elements are set to 0 and should be ignored. nums2 has a length of n.
 */
var merge = function (nums1, m, nums2, n) {

    // Approach-1 with extra Space of num1Copy
    // let nums1Copy = nums1.slice(0,m);
    // let p1 = 0;
    // let p2 = 0;
    // for (let i = 0; i < m+n ; i++){
    //     if(p2 >= n || (p1 < m && nums1Copy[p1] < nums2[p2])){
    //         nums1[i] =  nums1Copy[p1];
    //         p1++;
    //     }else{
    //          nums1[i] =  nums2[p2];
    //          p2++;
    //     }
    // }

    // Approach-2 without extra Space using reverse loop
    let p1 = m - 1; /* Because start from last */
    let p2 = n - 1; /* Because start from last */

    // for loop will also run in reverse order
    for (let i = m + n - 1; i >= 0; i--) {
        /* Handle p1 can break first and p2 can break or exast then end the loop or break the loop then don't do anythigh*/
        if (p2 < 0) {
            break;
        }
        if (p1 >= 0 && nums1[p1] > nums2[p2]) {
            nums1[i] = nums1[p1];
            p1--;
        } else {
            nums1[i] = nums2[p2];
            p2--;
        }
    }



};
let arr1 = [1, 2, 3, 0, 0, 0];
let arr2 = [2, 5, 6];
merge(arr1, 3, arr2, 3)
console.log("MergeSort:-", arr1)