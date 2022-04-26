const arr = [[1,2,3],[4,5,6],[15,8,9]];
len = arr.length;
let sumOfd1 = 0;
let sumOfd2 = 0;
let absoulteDiff = 0;
for (let i = 0; i<len;i++){
    for(let j = 0;j<len;j++){
         if(i === j){
            sumOfd1 += arr[i][j]
         }
         if((i + j) === len-1){
             sumOfd2 += arr[i][j];
         }
    }
}
absoulteDiff = sumOfd2 - sumOfd1;
console.log(absoulteDiff);
