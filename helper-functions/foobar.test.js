const Foobar = require('./foobar')

describe('Foobar', () => {

    it("returns { foo: 'bar' }", () => {

        expect(Foobar()).toEqual({ foo: 'bar' })

    })

})