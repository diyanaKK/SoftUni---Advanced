const { expect } = require('chai');
const {addFive,
    subtractTen,
    sum} = require('./Math Enforcer')

describe('mathEnforcer',()=>{
    describe('addFive',()=>{
        it('add - valid input',()=>{
            expect(addFive(0)).to.equal(5);
        })
        it('add - valid input',()=>{
            expect(addFive(-1)).to.equal(4);
        })
        it('add - valid input',()=>{
            expect(addFive(2.5)).to.equal(7.5);
        })

        it('add - invalid input',()=>{
            expect(addFive('r')).to.equal(undefined);
        })
    })
    describe('subtractTen',()=>{
        it('subtract',()=>{
            expect(subtractTen('r')).to.equal(undefined);
        })
        it('subtract',()=>{
            expect(subtractTen(20)).to.equal(10);
        })
        it('subtract',()=>{
            expect(subtractTen(0)).to.equal(-10);
        })
        it('subtract',()=>{
            expect(subtractTen(10.2)).to.equal(0.1999999999999993);
        })
    })
    describe('sum',()=>{
        it('sum -valid input',()=>{
            expect(sum(20,10)).to.equal(30);
        })
        it('sum -invalid input',()=>{
            expect(sum('20',10)).to.equal(undefined);
        })
        it('sum -valid input',()=>{
            expect(sum(1,-4)).to.equal(-3);
        })
        it('sum -valid input',()=>{
            expect(sum(1.5,4)).to.equal(5.5);
        })

    })
})