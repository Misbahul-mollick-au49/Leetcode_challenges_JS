// 217. Contains Duplicate

// Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

 

// Example 1:

// Input: nums = [1,2,3,1]
// Output: true
// Example 2:

// Input: nums = [1,2,3,4]
// Output: false
// Example 3:

// Input: nums = [1,1,1,3,3,4,3,2,4,2]
// Output: true

var containsDuplicate = function(nums) {
    nums.sort();
    var count =0;
    for(let i=1; i< nums.length; i++){
        if(nums[i]===nums[i-1] || nums[i]===nums[i+1]){
            count+=1;
            break;
        }
    }
    if(count==0){
        return false;
    }
    else if(count==1){
        return true;
    }
    
    
};