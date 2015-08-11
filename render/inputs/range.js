var render = require('./date');

module.exports = function(data) {
  return '<div class="row"><div class="col-md-6"><div class="form-group has-feedback"><label class="sr-only">&nbsp;</label>'
    + render(data)
    + '</div></div><div class="col-md-6"><div class="form-group has-feedback"><label class="sr-only">&nbsp;</label>'
    + render(data)
    + '</div></div></div>';
};