const {expect} = require('chai')
const numberOperations  = require('./3. Number Operations')


describe('numberOperations',()=>{
    describe('powNumber',()=>{
        it('valid input',()=>{
            expect(numberOperations.powNumber(3)).to.equal(9)
        })
        it('valid input',()=>{
            expect(numberOperations.powNumber(0)).to.equal(0)
        })
        it('valid input',()=>{
            expect(numberOperations.powNumber(-1)).to.equal(1)
        })
    })
    describe('numberChecker',()=>{
        it('invalid input',()=>{
            expect(() => {
                numberOperations.numberChecker('a')
            }).to.throw(Error,`The input is not a number!`);
        })
        it('valid input',()=>{
            expect(numberOperations.numberChecker(20)).to.equal(`The number is lower than 100!`)
        })
        it('valid input',()=>{
            expect(numberOperations.numberChecker(100)).to.equal(`The number is greater or equal to 100!`)
        })
        it('valid input',()=>{
            expect(numberOperations.numberChecker(101)).to.equal(`The number is greater or equal to 100!`)
        })
        it('valid input',()=>{
            expect(numberOperations.numberChecker('101')).to.equal(`The number is greater or equal to 100!`)
        })
    })
    describe('sumArrays',()=>{
        it('valid input',()=>{
            expect(numberOperations.sumArrays([1],[1])).to.deep.eq([2])
        })
        it('valid input',()=>{
            expect(numberOperations.sumArrays([1,3],[1,4])).to.deep.eq([2,7])
        })
        it('valid input',()=>{
            expect(numberOperations.sumArrays([1,2,3,4],[1,2])).to.deep.eq([2,4,3,4])
        })
        
    })
})