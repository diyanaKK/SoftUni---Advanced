const { expect } = require('chai')
const rgbToHexColor = require('./RGB to Hex')
describe('rgbToHexColor',()=>{
    it('convert black to hex',()=>{
        expect(rgbToHexColor(0,0,0)).to.equal('#000000');
    })
    it('convert white to hex',()=>{
        expect(rgbToHexColor(255,255,255)).to.equal('#FFFFFF');
    })
    it('convert green to hex',()=>{
        expect(rgbToHexColor(0,255,0)).to.equal('#00FF00');
    })
    it('convert blue to hex',()=>{
        expect(rgbToHexColor(0,0,255)).to.equal('#0000FF');
    })
    it('convert (151, 104,172)',()=>{
        expect(rgbToHexColor(151, 104,172)).to.equal('#9768AC');
    })
    it('return undefined for unvalid input',()=>{
        expect(rgbToHexColor('a','a','a')).to.equal(undefined);
    })
    it('out of range',()=>{
        expect(rgbToHexColor(-1,0,0)).to.equal(undefined);
    })
    it('out of range',()=>{
        expect(rgbToHexColor('0','0','256')).to.equal(undefined);
    })

})