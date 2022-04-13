const { expect } = require("chai");
const isSymmetric = require("./05.Check for Symmetry");


describe('check for symmetry', () => {
    it('returns true', () => {
        expect(isSymmetric([1, 1])).to.equal(true);
    })
    it('return false for valid non-symetric input', () => {
        expect(isSymmetric([1, 3])).to.equal(false);
    })
    it('invalid input (string)', () => {
        expect(isSymmetric('a')).to.equal(false);
    })
    it('returns true for valid symmetric odd-element array', () => {
        expect(isSymmetric([1, 1, 1])).to.equal(true);
    })
    it('returns true for valid symmetric string array', () => {
        expect(isSymmetric(['a', 'a'])).to.equal(true);
    })
    it('returns false for valid non-symmetric string array', () => {
        expect(isSymmetric(['a', 'b'])).to.equal(false);
    })
    it('returns false for invalid input', () => {
        expect(isSymmetric(0)).to.equal(false);
    })
    it('returns false for invalid input', () => {
        expect(isSymmetric(['a',1])).to.equal(false);
    })
    it('returns false for invalid input', () => {
        expect(isSymmetric([1,'1'])).to.equal(false);
    })

})