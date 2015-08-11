var _ = require('../../helpers/attrs');
var extend = require('extend');

module.exports = function(input) {
  return '<input' + _(extend({
    type: 'text',
    id: input.name,
    name: input.name,
    value: input.value,
    klass: 'form-control',
    placeholder: input.placeholder
  }, input.attrs)) + '>';
};