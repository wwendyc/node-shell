const request = require('request')

module.exports = (url) => {
    request(url, (error, response, body) => {
        process.stdout.write('There was an error:' + error)
        process.stdout.write('statusCode:' + response.statusCode)
        process.stdout.write('body:' + body)
        process.stdout.write('\nprompt > ')
    })
}