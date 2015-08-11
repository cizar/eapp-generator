module.exports = function(field) {
  if (!field.label) return '';
  return '<label class="control-label' + (field.sr_only ? ' sr-only' : '') + '" for="' + field.name + '">' + field.label + '</label>';
};