function solve(array,rotation){
    for(let i =0 ; i<rotation;i++){
        const element = array.pop()
        array.unshift(element)
       
    }
    console.log(array.join(' '));
}
solve(['Banana', 
'Orange', 
'Coconut', 
'Apple'], 
15)