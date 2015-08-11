var _ = require('../../helpers/attrs');
var extend = require('extend');

module.exports = function(input) {
  var label = input.text || '';
  return '<label class="checkbox-inline"><input' + _(extend({
    type: 'checkbox',
    id: input.name,
    name: input.name
  }, input.attrs)) + '>' + label +'</label>';
};