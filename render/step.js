var _ = require('../helpers/attrs');
var extend = require('extend');
var render = require('./fieldsets');

module.exports = function(step) {
  if (step.only && step.only.indexOf(this.state) == -1) return '';
  if (step.exclude && step.exclude.indexOf(this.state) != -1) return '';

  var context = Object.create(this);

  if (step.if) context.if = step.if;
  if (step.if_checked) context.if_checked = step.if_checked;

  var data = extend({
    show_if: step.if,
    show_if_checked: step.if_checked
  }, step.data);

  return '<section' + _({ id: this.step, data: data }) + '>'
    + '<h2>' + step.title + '</h2>'
    + render.call(context, step.fieldsets)
    + '</section>';
};
