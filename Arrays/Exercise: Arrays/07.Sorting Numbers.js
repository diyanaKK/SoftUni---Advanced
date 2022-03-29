function solve(arr){
    let sortedNum = arr.sort((a,b)=>{
        return a-b
    });
    let resultArr =[];
while(sortedNum.length!==0){
    let minNum = sortedNum.shift();
let bigNum = sortedNum.pop();
        
    resultArr.push(minNum)
    resultArr.push(bigNum)
}

return resultArr




}
solve([1, 65, 3, 52, 48, 63, 31, -3, 18, 56])