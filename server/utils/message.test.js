const expect = require('expect')

const {generateMessage} = require('./message')

describe('generateMessage', () => {
    it('should generate correct message object', () => {
        const from = 'Fernando'
        const text = 'Hello'
        const message = generateMessage(from, text)
        expect(message).toInclude({from,text})
        expect(message.createAt).toBeA('number')
    })
})