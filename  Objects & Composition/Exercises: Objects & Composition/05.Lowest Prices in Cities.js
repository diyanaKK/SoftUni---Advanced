function solve(input) {
    let obj = {}
    for (let line of input) {
        let [town, product, price] = line.split(' | ')
        price = Number(price)

        if (obj.hasOwnProperty(product)) {
            obj[product].forEach(([priceV, townName], index) => {
                if (townName === town) {
                    obj[product][index][0] = price
                }
            });
            let productExist = obj[product].some(([priceV, townName]) => townName === town)
            if (!productExist) {
                obj[product].push([price, town])
            }
        } else {
            obj[product] = [[price, town]]
        }
    }
    Object.entries(obj).forEach(([key,value])=>{

let sorted = value.sort((a,b)=> a[0]-b[0])
let lower = sorted[0][0]
 console.log(`${key} -> ${lower} (${sorted[0][1]})`);
    })
      
}
solve(['Sofia City | Audi | 100000',
    'Sofia City | BMW | 100000',
    'Sofia City | Mitsubishi | 10000',
    'Sofia City | Mercedes | 10000',
    'Sofia City | NoOffenseToCarLovers | 0',
    'Mexico City | Audi | 1000',
    'Mexico City | BMW | 99999',
    'Mexico City | Mitsubishi | 10000',
    'New York City | Mitsubishi | 1000',
    'Washington City | Mercedes | 1000'
    ])