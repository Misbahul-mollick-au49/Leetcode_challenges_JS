// 137. Single Number II

// Given an integer array nums where every element appears three times except for one, which appears exactly once. Find the single element and return it.

// You must implement a solution with a linear runtime complexity and use only constant extra space.

 

// Example 1:

// Input: nums = [2,2,3,2]
// Output: 3
// Example 2:

// Input: nums = [0,1,0,1,0,1,99]
// Output: 99

var singleNumber = function(nums) {
    nums.sort();
    for(let i=0; i<=nums.length;i++){
        if(nums[i]!==nums[i-1] && nums[i]!==nums[i-2] && nums[i]!==nums[i+1] && nums[i]!==nums[i+2]){
            return nums[i];
        }
    }
    
};