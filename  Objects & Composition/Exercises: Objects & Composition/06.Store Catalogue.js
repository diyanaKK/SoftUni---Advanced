function solve(input) {
    let sorted = input.sort()
    let array = []
    for (let line of sorted) {
        let splited = line.split(' :')
        let letter = line.substring(0, 1)

        if (array.includes(letter)) {
            console.log(`  ${splited.join(':')}`);
        } else {
            array.push(letter)
            console.log(letter);
            console.log(`  ${splited.join(':')}`);
        }
    }
    
}

solve(['Appricot : 20.4',
    'Fridge : 1500',
    'TV : 1499',
    'Deodorant : 10',
    'Boiler : 300',
    'Apple : 1.25',
    'Anti-Bug Spray : 15',
    'T-Shirt : 10'])