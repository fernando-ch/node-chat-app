const moment = require('moment')

function generateMessage(from, text) {
    return {
        from,
        text,
        createAt: moment().valueOf()
    }
}

function generateLocationMessage(from, latitude, longitude) {
    return {
        from,
        url: `https://www.google.com/maps?q=${latitude},${longitude}`,
        createAt: moment().valueOf()
    }
}

module.exports = {
    generateMessage,
    generateLocationMessage
}