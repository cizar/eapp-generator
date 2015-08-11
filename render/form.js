var renderSettings = require('./settings');
var renderSteps = require('./steps');

module.exports = function(form) {
  return '<form novalidate data-parsley-validate>' + renderSettings(form.settings) + renderSteps(form.steps) + '</form>';
};