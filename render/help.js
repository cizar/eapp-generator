module.exports = function(help) {
  if (!help) return '';
  return '<span class="help-block">' + help + '</span>';
};