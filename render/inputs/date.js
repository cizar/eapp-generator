var _ = require('../../helpers/attrs');
var extend = require('extend');

module.exports = function(input) {
  return '<input' + _(extend(true, {
    type: 'text',
    id: input.name,
    name: input.name,
    value: input.value,
    klass: 'form-control',
    placeholder: input.placeholder,
    data: { datepicker: true, 'parsley_date': true, mask: '99/99/9999' }
  }, input.attrs)) + '><span class="glyphicon glyphicon-calendar form-control-feedback" aria-hidden="true"></span>';
};