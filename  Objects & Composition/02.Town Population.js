function solve(input){
let obj = {}
for(let line of input){
    let tokens = line.split(' <-> ')
    let town = tokens[0]
    let population = Number(tokens[1])
    
    if(obj.hasOwnProperty(town)){
        obj[town]+=population
    }else{
        obj[town]= population
    }
    
}
//Object.entries(obj).forEach((element)=>console.log(`${element[0]} : ${element[1]}`))
for(let key in obj){
    console.log(`${key} : ${obj[key]}`);
}
}
solve(['Istanbul <-> 100000',
'Honk Kong <-> 2100004',
'Jerusalem <-> 2352344',
'Mexico City <-> 23401925',
'Istanbul <-> 1000'])