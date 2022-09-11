// 34. Find First and Last Position of Element in Sorted Array

// Given an array of integers nums sorted in non-decreasing order,
//  find the starting and ending position of a given target value.
// If target is not found in the array, return [-1, -1].
// You must write an algorithm with O(log n) runtime complexity.
// Example 1:
// Input: nums = [5,7,7,8,8,10], target = 8
// Output: [3,4]
// Example 2:
// Input: nums = [5,7,7,8,8,10], target = 6
// Output: [-1,-1]
// Example 3:
// Input: nums = [], target = 0
// Output: [-1,-1]


var searchRange = function(nums, target) {
    let res=0;
    let hi=nums.length-1;
    let lo=0;
    let start=0;
    let end=0;
    while(lo<=hi){
        let mid = Math.floor((lo+hi)/2);
        if(nums[mid] >= target) hi = mid-1;
        else lo=mid+1;
    }
    
    // Check if number exists
    if(nums[lo] !== target) return [-1, -1];
    start = lo;
    
    // Reset pointers
     lo =0, hi=nums.length-1; 
    
    // Search lastPosition
    while(lo<=hi){
        let mid =  Math.floor((lo+hi)/2);
        if(nums[mid] > target) hi = mid-1;
        else lo=mid+1;
    }
    end=hi;
    
    return [start,end]
};
    