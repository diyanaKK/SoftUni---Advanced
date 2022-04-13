const expect =require("chai").expect;
const sum = require('./sum')
describe('it shout sum correctly', ()=> {
    it('should return 0', ()=>{
        const result = sum(0,0)
        expect(result).to.equal(0);
    })
    it('should return 10', ()=>{
        const result = sum(5,5)
        expect(result).to.equal(10);
    })
    it('should return concats string?', ()=>{
        const result = sum('5',5)
        expect(result).to.equal(55);
    })
})