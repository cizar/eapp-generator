var _ = require('../helpers/attrs');
var extend = require('extend');
var renderLegend = require('./legend');
var renderRows = require('./rows');

module.exports = function(fieldset) {
  if (fieldset.only && fieldset.only.indexOf(this.state) == -1) return '';
  if (fieldset.exclude && fieldset.exclude.indexOf(this.state) != -1) return '';

  var context = Object.create(this);

  if (fieldset.if) context.if = fieldset.if;
  if (fieldset.if_checked) context.if_checked = fieldset.if_checked;

  var data = extend({
    show_if: fieldset.if,
    show_if_checked: fieldset.if_checked
  }, fieldset.data);

  return '<fieldset' + _({ data: data }) + '>' + renderLegend.call(context, fieldset.legend) + renderRows.call(context, fieldset.rows) + '</fieldset>';
};
