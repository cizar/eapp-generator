var _ = require('../../helpers/attrs');
var extend = require('extend');

module.exports = function(input) {
  var label = input.label || input.value;
  return '<label class="radio-inline"><input' + _(extend({
    type: 'radio',
    id: input.name + '_' + input.value,
    name: input.name,
    value: input.value,
    checked: input.checked
  }, input.attrs)) + '>' + label + '</label>';
};