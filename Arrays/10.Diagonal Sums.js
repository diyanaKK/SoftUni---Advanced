function solve(input){
    let sum1 =0
    let sum2 = 0
    let size = input.length-1
for(let i = 0;i<input.length;i++){
sum1+= input[i][i]
sum2+=input[i][size - i]
}
console.log(`${sum1} ${sum2}`);
}
solve([[20, 40],
    [10, 60]])