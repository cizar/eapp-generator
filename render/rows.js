var render = require('./row');

module.exports = function(rows) {
  if (!rows) return '';
  return rows.map(function(row) {
    return render.call(this, row);
  }, this).join("\n");
}