var render = require('./inputs');
var objectPath = require('object-path');

module.exports = function(field) {
  objectPath.set(field, 'attrs.data.parsley_group', this.step);
  objectPath.set(field, 'attrs.required', field.required);
  objectPath.set(field, 'attrs.readonly', field.readonly);
  objectPath.set(field, 'attrs.disabled', field.disabled);
  objectPath.set(field, 'attrs.data.mask', field.mask);
  if (this.if) {
    objectPath.set(field, 'attrs.data.parsley_if', this.if);
    objectPath.set(field, 'attrs.data.parsley_validate_if_empty', true);
  }
  if (this.if_checked) {
    objectPath.set(field, 'attrs.data.parsley_if_checked', this.if_checked);
    objectPath.set(field, 'attrs.data.parsley_validate_if_empty', true);
  }
  return render[field.type](field);
}