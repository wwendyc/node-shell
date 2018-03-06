const pwd = require('./pwd')
const ls = require('./ls')
const cat = require('./cat')

process.stdout.write('prompt > ')

process.stdin.on('data', (data) => {
    const cmd = data.toString().trim()

    if (cmd === 'pwd') {
        pwd()
    }
    if (cmd === 'hello') {
        process.stdout.write('hello')
    }
    if (cmd === 'ls') {
        ls()
    }
    if (cmd.startsWith('cat')) {
        cat(cmd.split(' ')[1])
    }
})
