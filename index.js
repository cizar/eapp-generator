var fs = require('fs');
var yaml = require('js-yaml');
var async = require('async');
var render = require('./render/form')
var beautify = require('js-beautify').html;
var ensureExists = require('./helpers/ensure-exists');

var levels = ['production', 'staging', 'testing', 'devel'];

module.exports = function(dest, level) {
  dest = dest.replace(/\/$/, ''); // Remove the trailing slash
  return function(path, callback) {
    try {
      ensureExists(dest, function() {
        var form = yaml.safeLoad(fs.readFileSync(path, 'utf8'));
        var settings = form.settings;
        if (levels.indexOf(settings.status) > levels.indexOf(level)) return callback();
        global.options = form.options;
        var states = settings.states.split(/[ ,]+/);
        async.eachSeries(states, function(state, next) {
          this.state = state;
          var path = dest + '/' + settings.product_type + settings.product_number + '_' + state + '_' +  settings.version + '.html';
          console.log('Generating ' + path);
          var html = beautify(render(form));
          fs.writeFile(path, html, next);
        }, callback);
      });
    } catch (err) {
      callback(err);
    }
  };
};