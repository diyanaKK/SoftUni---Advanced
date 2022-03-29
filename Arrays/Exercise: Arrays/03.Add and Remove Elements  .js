function solve(input){
    let num =1
    let arr = []
for(let command of input){
if(command === 'add'){
    arr.push(num)
    num++
}if(command === 'remove'){
    arr.pop(num)
    num++
}
}

if(arr.length === 0){
    console.log(`Empty`);
}else{
    console.log(arr.join('\n'));
}

}
solve(['add', 
'add', 
'remove',
'add'
,'add']
)