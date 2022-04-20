function solve(input){
let obj = {}
for(let line of input){
    let [carBrand,carModel,producedCars] = line.split(' | ')
     producedCars = Number(producedCars)
    
    if(!obj.hasOwnProperty(carBrand)){
        obj[carBrand]={}
    }
    if(obj[carBrand].hasOwnProperty(carModel)){
        obj[carBrand][carModel]+=producedCars
    }else{
        obj[carBrand][carModel]=producedCars
    }
    
}
for (item of Object.entries(obj)) {
    console.log(item[0]);
    for (x of Object.entries(item[1])) {
        console.log(`###${x[0]} -> ${x[1]}`)
    }
}

}
solve(['Audi | Q7 | 1000',
'Audi | Q6 | 100',
'BMW | X5 | 1000',
'BMW | X6 | 100',
'Citroen | C4 | 123',
'Volga | GAZ-24 | 1000000',
'Lada | Niva | 1000000',
'Lada | Jigula | 1000000',
'Citroen | C4 | 22',
'Citroen | C5 | 10'])