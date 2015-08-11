var _ = require('lodash');

function renderItem(item, prefix) {
  var key = item[0].replace(/_/g, '-').toLowerCase();
  var value = item[1];

  if ('object' == typeof value && value.constructor === Object) return renderAttrs(value, key + '-');
  
  if (prefix) {
    key = prefix + key;
  }

  if ('klass' == key) {
    key = 'class';
  }

  if (Array.isArray(value)) {
    value = value.join(' ');
  }

  if (true === value) {
    return key;
  }

  if (!value) {
    return '';
  }

  return key + ' = "' + value + '"';
}

function renderAttrs(obj, prefix) {
  return _.pairs(obj).reduce(function(accum, item) {
    return accum + ' ' + renderItem(item, prefix);
  }, '');
}

module.exports = function(attrs) {
  return renderAttrs(attrs);
};

// if (dashCase !== false) attr = attr.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();