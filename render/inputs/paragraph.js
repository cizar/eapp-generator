module.exports = function(data) {
  if (!data.text) return '';
  return '<p class="form-control-static">' + data.text + '</p>';
};