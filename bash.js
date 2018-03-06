const pwd = require('./pwd')
const ls = require('./ls')
const cat = require('./cat')
const curl = require('./curl')
const echo = require('./echo')

const done = (output) => {
    process.stdout.write(output)
    process.stdout.write('\nprompt > ')
}

process.stdout.write('prompt > ')

process.stdin.on('data', (data) => {
    const cmd = data.toString().trim()

    if (cmd === 'pwd') {
        pwd(done)
    }

    if (cmd === 'ls') {
        ls(done)
    }

    if (cmd.startsWith('cat')) {
        cat(cmd.split(' ')[1], done)
    }

    if (cmd.startsWith('curl')) {
        curl(cmd.split(' ')[1], done)
    }

    if (cmd.startsWith('echo')) {
        const str = cmd.split(' ').slice(1).join(' ')
        echo(str, done)
    }
})

