const { expect } = require('chai')


let rentCar = require('./03.Rent Car')


describe('rentCar', () => {
    describe('rentCar.searchCar', () => {
        it('valid input', () => {
            expect(rentCar.searchCar(["Volkswagen", "BMW", "Audi"], "Audi")).to.equal(`There is 1 car of model Audi in the catalog!`)
        })
        it('invalid input', () => {
            expect(() => {
                rentCar.searchCar(["Volkswagen", "BMW", "Audi"], 5)
            }).to.throw(Error, 'Invalid input!');
        })
        it('invalid input', () => {
            expect(() => {
                rentCar.searchCar('', 5)
            }).to.throw(Error, 'Invalid input!');
        })
        it('empty array', () => {
            expect(() => {
                rentCar.searchCar([], 'Audi')
            }).to.throw(Error, 'There are no such models in the catalog!');
        })
        it('dont have matching element', () => {
            expect(() => {
                rentCar.searchCar(["Volkswagen", "BMW", "Audi"], 'lada')
            }).to.throw(Error, 'There are no such models in the catalog!');
        })
    })

    describe('rentCar.calculatePriceOfCar', () => {
        it('valid inputs', () => {
            expect(rentCar.calculatePriceOfCar('Audi', 2)).to.equal(`You choose Audi and it will cost $72!`)
        })
        it('invalid input', () => {
            expect(() => {
                rentCar.calculatePriceOfCar([], 2.3)
            }).to.throw(Error, 'Invalid input!');
        })
        it('invalid input', () => {
            expect(() => {
                rentCar.calculatePriceOfCar('', {})
            }).to.throw(Error, 'Invalid input!');
        })
        it('invalid input', () => {
            expect(() => {
                rentCar.calculatePriceOfCar([], 3)
            }).to.throw(Error, 'Invalid input!');
        })
        it('invalid input', () => {
            expect(() => {
                rentCar.calculatePriceOfCar('Lada', 3)
            }).to.throw(Error, 'No such model in the catalog!');
        })
    })
    describe('rentCar.checkBudget', () => {
        it('valid inputs', () => {
            expect(rentCar.checkBudget(3, 3, 3)).to.equal(`You need a bigger budget!`)
        })
        it('valid inputs', () => {
            expect(rentCar.checkBudget(3, 3, 15)).to.equal(`You rent a car!`)
        })
        it('invalid input', () => {
            expect(() => {
                rentCar.checkBudget(2.3, 3, 3)
            }).to.throw(Error, 'Invalid input!');
        })
        it('invalid input', () => {
            expect(() => {
                rentCar.checkBudget(2.3, 3.8, 3.8)
            }).to.throw(Error, 'Invalid input!');
        })

    })
})
