const expect = require('expect')

const {generateMessage, generateLocationMessage} = require('./message')

describe('generateMessage', () => {
    it('should generate correct message object', () => {
        const from = 'Fernando'
        const text = 'Hello'
        const message = generateMessage(from, text)
        
        expect(message).toInclude({from,text})
        expect(message.createAt).toBeA('number')
    })
})

describe('generateLocationMessage', () => {
    it('should generate corret location object', () => {
        const from = 'Fernando'
        const latitude = 12312
        const longitude = -5564
        const message = generateLocationMessage(from, latitude, longitude)
        
        expect(message).toInclude({
            from,
            url: `https://www.google.com/maps?q=${latitude},${longitude}` 
        })
        expect(message.createAt).toBeA('number')
    })
})