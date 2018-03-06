const request = require('request')

module.exports = (url, done) => {
    request(url, (error, response, body) => {
        if (error) {
            done('There was an error:' + error.message)
        } else {
            done('statusCode:' + response.statusCode)
            done('body:' + body)
        }
    })
}
