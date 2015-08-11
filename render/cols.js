var render = require('./col');

module.exports = function(cols) {
  if (!cols) return '';
  return cols.map(function(col) {
    return render.call(this, col);
  }, this).join("\n");
};