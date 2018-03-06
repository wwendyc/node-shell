const pwd = require('./pwd')
const ls = require('./ls')
const cat = require('./cat')
const curl = require('./curl')

process.stdout.write('prompt > ')

process.stdin.on('data', (data) => {
    const cmd = data.toString().trim()

    if (cmd === 'pwd') {
        pwd()
    }

    if (cmd === 'ls') {
        ls()
    }

    if (cmd.startsWith('cat')) {
        cat(cmd.split(' ')[1])
    }

    if (cmd.startsWith('curl')) {
        curl(cmd.split(' ')[1])
    }
})
