var twoSum = function(nums, target) {
   var twoSum = function(nums, target) {
        var sol =[];
        for(let i=0; i < nums.length; i++)
            {
                for(let j=i+1; j < nums.length; j++)
                {
                    if(nums[i] + nums[j]===target)
                        sol.push(i,j);
                        
                }
                
                  
            }
        return sol;
    }
}



 //     var sol =[];
    //     var cheak =0;
    //     for(let i=0; i < nums.length-1; i++)
    //         {
    //             for(let j=i+1; j < nums.length-1; j++)
    //         {
    //             if(nums[i] + nums[j]===target)
    //                 sol.push(i,j);
    //                 cheak=1;
    //             break;
    //         }
    //             if(cheak===1)return sol;
                  
    //         }
    //     return sol;
        
    // };
    