const { expect } = require('chai')
const PaymentPackage = require('./Payment Package')

describe('PaymentPackage', () => {
    //name test
    it('valid name', () => {
        const payment = new PaymentPackage('abc', 25)
        expect('abc').to.equal(payment.name)
    })

    it('valid name', () => {
        const payment = new PaymentPackage('abc', 25)
        payment.name = 'Pesho'
        expect('Pesho').to.equal(payment.name)
    })
    it('valid name', () => {
        const payment = new PaymentPackage('abc', 25)
        expect(() => payment.name = '').to.throw(Error, 'Name must be a non-empty string')
    })
    it('valid name', () => {
        const payment = new PaymentPackage('abc', 25)
        expect(() => payment.name = 3).to.throw(Error, 'Name must be a non-empty string')
    })

    //value test
    it('valid value', () => {
        const payment = new PaymentPackage('abc', 25)
        expect(25).to.equal(payment.value)
    })
    it('valid value', () => {
        const payment = new PaymentPackage('abc', 25)
        payment.value = 20
        expect(20).to.equal(payment.value)
    })
    it('invalid value', () => {
        const payment = new PaymentPackage('abc', 25)
        expect(() => payment.value = -3).to.throw(Error, 'Value must be a non-negative number')
    })

    it('invalid value', () => {
        const payment = new PaymentPackage('abc', 25)
        expect(() => payment.value = '').to.throw(Error, 'Value must be a non-negative number')
    })


    //active test
    it('does not set active with invalid argument', () => {
        const payment = new PaymentPackage('abc', 25);

        expect(() => payment.active = '').to.throw(Error, 'Active status must be a boolean')
    })
    it('set active with valid argument', () => {
        const payment = new PaymentPackage('abc', 25);

        expect(payment.active = true).to.equal(true)
    })
    it('set active with valid argument', () => {
        const payment = new PaymentPackage('abc', 25);

        expect(payment.active).to.equal(true)
    })
    it('set active with valid argument', () => {
        const payment = new PaymentPackage('abc', 25);

        expect(payment.active = false).to.equal(false)
    })
    //VAT test
    it('set VAT with unvalid argument', () => {
        const payment = new PaymentPackage('abc', 25);

        expect(() => payment.VAT = '').to.throw(Error, 'VAT must be a non-negative number')
    })
    it('set VAT with unvalid argument', () => {
        const payment = new PaymentPackage('abc', 25);

        expect(() => payment.VAT = -1).to.throw(Error, 'VAT must be a non-negative number')
    })
    it('set VAT with valid argument', () => {
        const payment = new PaymentPackage('abc', 25);

        expect(payment.VAT).to.equal(20)
    })
    it('set VAT with valid argument', () => {
        const payment = new PaymentPackage('abc', 25);

        expect(payment.VAT = 1).to.equal(1)
    })

    //toString Test
    it('toString active', () => {
        const payment = new PaymentPackage('abc', 25);
        const expected = ['Package: abc', '- Value (excl. VAT): 25', '- Value (VAT 20%): 30'].join('\n')
        expect(expected).to.equal(payment.toString())
    })
    it('toString unactive', () => {
        const payment = new PaymentPackage('abc', 25);
        payment.active = false
        const expected = ['Package: abc (inactive)', '- Value (excl. VAT): 25', '- Value (VAT 20%): 30'].join('\n')
        expect(expected).to.equal(payment.toString())
    })
})
