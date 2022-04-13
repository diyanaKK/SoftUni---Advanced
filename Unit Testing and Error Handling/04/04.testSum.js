const sum = require('./SumofNumbers');
const { expect } =require("chai");
describe('Sum of Numbers',()=>{
    it('sums sigle num',()=>{
        expect(sum([1])).to.equal(1);
    });
    it('sums multiple nums',()=>{
        expect(sum([1,1])).to.equal(2);
    });
    it('sums diffrent nums',()=>{
        expect(sum([1,3,5])).to.equal(9);
    });
    
})