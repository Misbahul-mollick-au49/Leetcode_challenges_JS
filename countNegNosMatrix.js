// 1351. Count Negative Numbers in a Sorted Matrix

// Given a m x n matrix grid which is sorted in non-increasing order both row-wise and column-wise, 
// return the number of negative numbers in grid.

// Example 1:

// Input: grid = [[4,3,2,-1],[3,2,1,-1],[1,1,-1,-2],[-1,-1,-2,-3]]
// Output: 8
// Explanation: There are 8 negatives number in the matrix.
// Example 2:

// Input: grid = [[3,2],[1,0]]
// Output: 0


var countNegatives = function(grid) {
    let r=grid.length;
    let c=grid[0].length;
    let negNos=0;
    for(let i=0; i<r;i++){
        for(let j=0;j<c;j++){
            if(grid[i][j]<0){
                negNos+=1;
            }
        }
    }
   return negNos; 
};