function solve(arr,startI,endI){
    if(startI < 0){
        startI = 0
    }
    if(endI > arr.length){
        endI = arr.length
    }
if(Array.isArray(arr)== false){
    return NaN
}
    return arr.slice(startI,endI+1).reduce((a,b)=>a+Number(b),0)
    
}
console.log(solve([10, 20, 30, 40, 50, 60], 3, 300))
console.log(solve([1.1, 2.2, 3.3, 4.4, 5.5], -3, 1))
console.log(solve([10, 'twenty', 30, 40], 0, 2))
console.log(solve([], 1, 2))
console.log(solve('text', 0, 2))
