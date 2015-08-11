var fs = require('fs');

module.exports = function (path, mask, cb) {
  if ('function' == typeof mask) {
    // allow the `mask` parameter to be optional
    cb = mask;
    mask = 0755;
  }
  fs.mkdir(path, mask, function(err) {
    if (err && err.code != 'EEXIST') return cb(err);
    cb(null, path);
  });
};