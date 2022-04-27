class CarDealership {
    constructor(name) {
        this.name = name,
            this.availableCars = [],
            this.soldCars = [],
            this.totalIncome = 0
    }
    addCar(model, horsepower, price, mileage) {
        if (model.length > 0 && Number.isInteger(horsepower) && price >= 0 && mileage >= 0) {
            this.availableCars.push({ model, horsepower, price, mileage })
            return `New car added: ${model} - ${horsepower} HP - ${mileage.toFixed(2)} km - ${price.toFixed(2)}$`

        } else {
            throw new Error(`Invalid input!`)
        }
    }
    sellCar(model, desiredMileage) {
        let searchParam = model;
        let currentCar = this.availableCars

        if (currentCar) {
            let horsePower = currentCar.horsepower
            let priceSold = currentCar.price
            if (currentCar.mileage > desiredMileage) {
                let diffrence = currentCar.mileage - desiredMileage

                if (diffrence <= 40000) {
                    let indexOfCar = this.availableCars.findIndex((curCar) => JSON.stringify(curCar) === JSON.stringify(currentCar))

                    priceSold *= 0.5
                    this.soldCars.push({ model, horsePower, priceSold })
                    this.availableCars.splice(indexOfCar, 1)
                    this.totalIncome += Number(priceSold)
                    return `${model} was sold for ${priceSold.toFixed(2)}$`

                } if (diffrence > 40000) {
                    let indexOfCar = this.availableCars.findIndex((curCar) => JSON.stringify(curCar) === JSON.stringify(currentCar))

                    priceSold *= 0.90
                    this.soldCars.push({ model, horsePower, priceSold })
                    this.availableCars.splice(indexOfCar, 1)
                    this.totalIncome += Number(priceSold)
                    return `${model} was sold for ${priceSold.toFixed(2)}$`
                }


            } else {
                let indexOfCar = this.availableCars.findIndex((curCar) => JSON.stringify(curCar) === JSON.stringify(currentCar))
                this.totalIncome += Number(priceSold)
                this.soldCars.push({ model, horsePower, priceSold })
                this.availableCars.splice(indexOfCar, 1)
                return `${model} was sold for ${priceSold.toFixed(2)}$`
            }
        } else {
            throw new Error(`${model} was not found!`)
        }
    }
    currentCar() {
        let currentData = []
        if (this.availableCars.length > 0) {
            currentData.push('-Available cars:')
            this.availableCars.forEach((obj) => {
                currentData.push(`---${obj.model} - ${obj.horsepower} HP - ${obj.mileage.toFixed(2)} km - ${obj.price.toFixed(2)}$`)
            })
            return currentData.join('\n')
        } else {
            return 'There are no available cars'
        }
    }
    salesReport(criteria) {
        let salesData = [`-${this.name} has a total income of ${this.totalIncome.toFixed(2)}$`,
        `-${this.soldCars.length} cars sold:`]

        if (criteria === 'horsepower') {
            let sorted = this.soldCars.sort((a, b) => b.horsePower - a.horsePower)
            sorted.forEach((obj) => {
                 salesData.push(`---${obj.model} - ${obj.horsePower} HP - ${obj.priceSold.toFixed(2)}$`);
            })
            return salesData.join('\n')
        } else if (criteria === ' model') {
            let sorted = this.soldCars.sort((a, b) => (a.model).localeCompare(b.model))
            sorted.forEach((obj) => {
               salesData.push(`---${obj.model} - ${obj.horsePower} HP - ${obj.priceSold.toFixed(2)}$`)
            })
            return salesData.join('\n')
        } else {
            throw new Error(`Invalid criteria!`)
        }

    }

}


let dealership = new CarDealership('SoftAuto');
dealership.addCar('Toyota Corolla', 100, 3500, 190000);
dealership.addCar('Mercedes C63', 300, 29000, 187000);
dealership.addCar('Audi A3', 120, 4900, 240000);
console.log(dealership.currentCar())