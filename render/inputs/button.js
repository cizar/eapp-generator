var _ = require('../../helpers/attrs');
var extend = require('extend');

module.exports = function(input) {
  return '<button' + _(extend({
    name: input.name,
    klass: 'btn'
  }, input.attrs)) + '>' + input.text + '</button>';
};