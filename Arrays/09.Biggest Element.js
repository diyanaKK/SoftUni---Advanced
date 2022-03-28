function solve(input){
 let result = []
    for(let row of input){
        for(let bigestNum of row){
            result.push(bigestNum)
        }
    }
    let sorted = result.sort((a,b)=> b-a)
    return sorted[0]
    
}
solve([[20, 50, 10],
    [8, 33,145]])