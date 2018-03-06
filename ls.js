const fs = require('fs');

module.exports = (done) => {
  fs.readdir('./', 'utf8', (err, files) => {
    if (err) {
      done(err.message)
    } else {
      done(files.join('\n'))
    }
  })
}



