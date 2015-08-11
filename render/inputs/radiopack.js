var render = require('./radio');
var extend = require('extend');

module.exports = function(radiopack) {
  return radiopack.options.reduce(function(previous, option) {
    return previous + render(extend(true, {}, radiopack, {
      name: radiopack.name,
      value: option[0],
      label: option[1],
      checked: (option[0] == radiopack.value)
    }));
  }, '<p class="form-control-static">') + '</p>';
};