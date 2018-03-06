const fs = require('fs');

module.exports = (path) => {
  fs.readFile (path, 'utf8', (err, data) => {
    if (err) throw err;
    process.stdout.write(data);
    process.stdout.write('\nprompt > ')
  })
}
