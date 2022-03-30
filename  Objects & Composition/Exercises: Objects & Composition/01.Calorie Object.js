function solve(array){
let obj = {}
for(let i = 0;i<array.length;i++){
    if (i %2 ===0){
     let name = array[i]
     obj[name]= Number(array[i+1])
    }
}

console.log(obj);

}
solve(['Yoghurt', '48', 'Rise', '138', 'Apple', '52'])