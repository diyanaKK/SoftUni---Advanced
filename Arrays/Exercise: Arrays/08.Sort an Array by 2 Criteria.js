function solve(array){
let sorted = array.sort((a,b)=>{
    if(a.length===b.length){
        return a.localeCompare(b)
    } else{
        return a.length - b.length
    }
})
console.log(sorted.join('\n'));
}
solve(['Isacc', 
'Theodor', 
'Jack', 
'Harrison', 
'George']

)