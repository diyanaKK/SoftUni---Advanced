function solve(input){
let result = []
let rows = input.shift().split('|')

let start = rows.shift()
let end = rows.pop()

let [name,lat,long]= rows
name = name.split(' ')
lat = lat.split(' ')
long = long.split(' ')


for(let line of input){
    let obj = {}
    obj[name[1]]= 0
    obj[lat[1]]=0
    obj[long[1]]=0


    let tokens = line.split(' | ')
    let town = tokens[0].split('|')
    obj[name[1]]= town[1].trim() 
    let latit = Number(tokens[1]).toFixed(2)
    obj[lat[1]]=Number(latit)
    let longi = tokens[2].split(' ')
    let longii = Number(longi[0]).toFixed(2)
   obj[long[1]]= Number(longii)
    
    result.push(obj)
}
console.log(JSON.stringify(result));

}
solve(['| Town | Latitude | Longitude |',
    '| Veliko Turnovo | 43.0757 | 25.6172 |',
    '| Monatevideo | 34.50 | 56.11 |'])