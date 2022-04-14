const { expect } = require('chai');
const lookupChar = require('./Char Lookup')

describe('lookupChar',()=>{
    it('valid input',()=>{
        expect(lookupChar('ivana',3)).to.equal('n');
    })
    it('valid input',()=>{
        expect(lookupChar('ivana',0)).to.equal('i');
    })
    it('invalid index',()=>{
        expect(lookupChar('ivana',2.3)).to.equal(undefined);
    })
    it('invalid index',()=>{
        expect(lookupChar('ivana',-2)).to.equal('Incorrect index');
    })
    it('invalid index',()=>{
        expect(lookupChar('ivana',10)).to.equal('Incorrect index');
    })
    it('invalid string',()=>{
        expect(lookupChar(19,10)).to.equal(undefined);
    })
    it('invalid input',()=>{
        expect(lookupChar(19,1.0)).to.equal(undefined);
    })
    

})



describe('isOddOrEven',()=>{
    it('even',()=>{
        expect(isOddOrEven('aa')).to.equal('even');
    })
    it('odd',()=>{
        expect(isOddOrEven('aaa')).to.equal('odd');
    })
    it('undefined',()=>{
        expect(isOddOrEven(9)).to.equal(undefined);
    })
    it('undefined',()=>{
        expect(isOddOrEven([])).to.equal(undefined);
    })
    it('undefined',()=>{
        expect(isOddOrEven(9555)).to.equal(undefined);
    })
})