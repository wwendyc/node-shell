const fs = require('fs');

module.exports = (path, done) => {
  fs.readFile (path, 'utf8', (err, data) => {
    if (err) throw err;
    done(data);
  })
}
