var _ = require('../../helpers/attrs');
var extend = require('extend');

module.exports = function(input) {
  var html = '<select' + _(extend({
    id: input.name,
    name: input.name,
    klass: 'form-control'
  }, input.attrs)) + '>';
  var options = ('string' == typeof input.options) ? global.options[input.options] : input.options;
  html += '<option value="">:: select ::</option>'
  for (var i in options) {
    html += '<option' + _({
      value: options[i][0],
      selected: (input.value == options[i][0])
    }) + '>' + options[i][1] + '</option>';
  }
  html += '</select>';
  return html;
};