// New File
// Given a binary array nums, return the maximum number of consecutive 1's in the array.
var findMaxConsecutiveOnes = function (nums) {
    let currCount = 0;
    let maxCount = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === 1) {
            currCount++
        } else {
            maxCount = Math.max(currCount, maxCount);
            currCount = 0
        }
    }
    return Math.max(maxCount, currCount);
    /* Here we are again checking max compare this because in some
     case nums =[1,0,1,1,0,1,1,1] after 1 , 1 ,1 Array end and
      here only currCount update 3 but not set it maxCount
       bacuase not react at 0 or not found 0 and loop end 
       so it return their previous count */
};

console.log("findMaxConsecutiveOnes:-", findMaxConsecutiveOnes([1, 0, 1, 1, 0, 1, 0, 0, 1, 1, 1, 1]))