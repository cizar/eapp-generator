var _ = require('../helpers/attrs');
var makeid = require('../helpers/makeid');
var renderLabel = require('./label');
var renderInput = require('./input');
var renderHelp = require('./help');

module.exports = function(field) {
  if (field.only && field.only.indexOf(global.state) == -1) return '';
  if (field.exclude && field.exclude.indexOf(global.state) != -1) return '';

  field.type = field.type || 'paragraph';
  field.name = field.name || 'generated-' + makeid();

  var klass = ['form-group'];
  if ('date' == field.type) {
    klass.push('has-feedback');
  }
  
  return '<div' + _({ klass: klass }) + '>'
    + renderLabel.call(this, field)
    + renderInput.call(this, field)
    + renderHelp.call(this, field.help)
    + '</div>';
};