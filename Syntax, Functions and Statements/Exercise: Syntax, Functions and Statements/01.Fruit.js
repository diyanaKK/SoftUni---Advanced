function solve(fruit,kilogram,moneyPerKilo){
const moneyNeeded = (kilogram/1000)*moneyPerKilo



console.log(`I need $${moneyNeeded.toFixed(2)} to buy ${(kilogram/1000).toFixed(2)} kilograms ${fruit}.`);
}
solve('apple', 1563, 2.35)