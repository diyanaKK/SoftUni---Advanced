function solve(input,criteria){
if(criteria === 'asc'){
input.sort((a,b)=> a-b)
}else{
 input.sort((a,b)=> b-a) 
}
return input
}
solve([14, 7, 17, 6, 8], 'asc')