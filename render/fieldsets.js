var render = require('./fieldset');

module.exports = function(fieldsets) {
  if (!fieldsets) return '';
  return fieldsets.map(function(fieldset) {
    return render.call(this, fieldset);
  }, this).join("\n");
};
