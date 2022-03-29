function solve(array){
    let rowSums = []
    let colSums = []

for(let i =0;i<array.length;i++){
    let row = array[i]
    let sum= row.reduce((sum,el)=> (sum+el),0)
    rowSums.push(sum)
}
for(let i =0;i<array.length;i++){
    let row = []
    let newRow = []
    for(let y =0;y<array.length;y++){
       let index = array.length-1-y
newRow.push(array[index][i])
    }
   
    let sum= newRow.reduce((sum,el)=> (sum+el),0)
   colSums.push(sum)
};
return rowSums.concat(colSums).every((el,index,arr)=>el === arr[0])


}
solve([[11, 32, 45],
    [21, 0, 1],
    [21, 1, 1]])
