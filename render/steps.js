var render = require('./step');

module.exports = function(steps) {
  if (!steps) return '';
  return steps.map(function(step, pos) {
    this.step = 'step' + pos;
    return render(step);
  }, this).join("\n");
};