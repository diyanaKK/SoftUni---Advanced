function solve(input){
let result = []
let sorted = input.sort((a,b)=> a-b)
result.push(sorted[0])
result.push(sorted[1])
console.log(result.join(' '));
}
solve([30, 15, 50, 5])