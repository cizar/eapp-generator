var _ = require('../helpers/attrs');
var extend = require('extend');
var render = require('./field');

module.exports = function(col) {
  if (col.only && col.only.indexOf(this.state) == -1) return '';
  if (col.exclude && col.exclude.indexOf(this.state) != -1) return '';
  
  var context = Object.create(this);

  if (col.if) context.if = col.if;
  if (col.if_checked) context.if_checked = col.if_checked;

  var data = extend({
    show_if: col.if,
    show_if_checked: col.if_checked
  }, col.data);

  var klass = ['col-sm-' + (col.size || 12)];

  if (col.offset) {
    klass.push('col-sm-offset-' + col.offset);
  }
 
  return '<div' + _({ klass: klass, data: data }) + '>' + render.call(context, col) + '</div>';
};