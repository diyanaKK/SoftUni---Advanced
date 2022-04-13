const { expect } = require('chai')
const rgbToHexColor = require('./RGB to Hex')
describe('rgbToHexColor',()=>{
    it('convert black to hex',()=>{
        expect(rgbToHexColor(0,0,0)).to.equal('#000000');
    })
    it('convert white to hex',()=>{
        expect(rgbToHexColor(255,255,255)).to.equal('#FFFFFF');
    })
})