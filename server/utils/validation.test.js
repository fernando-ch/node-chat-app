const expect = require('expect')

const {isRealString} = require('./validation')

describe('isRealString', () => {
    it('should reject non-string values', () => {
        expect(isRealString(122)).toBe(false)
    })

    it('should reject string with only space', () => {
        expect(isRealString('   ')).toBe(false)
    })

    it('should allow string with non-space characters', () => {
        expect(isRealString('fdasd')).toBe(true)
    })
})