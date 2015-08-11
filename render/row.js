var _ = require('../helpers/attrs');
var extend = require('extend');
var render = require('./cols');

module.exports = function(row) {
  if (row.only && row.only.indexOf(this.state) == -1) return '';
  if (row.exclude && row.exclude.indexOf(this.state) != -1) return '';

  var context = Object.create(this);

  if (row.if) context.if = row.if;
  if (row.if_checked) context.if_checked = row.if_checked;

  var data = extend({
  	show_if: row.if,
  	show_if_checked: row.if_checked
  }, row.data);
  
  return '<div' + _({ klass: 'row', data: data }) + '>' + render.call(context, row.cols) + '</div>';
};