var fs = require('fs');

module.exports = function(data) {
  return fs.readFileSync(data.filename, 'utf-8');
};