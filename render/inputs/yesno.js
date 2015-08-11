var render = require('./radiopack');

module.exports = function(data) {
  data.options = [
    [ 'Y', 'Yes' ],
    [ 'N', 'No' ]
  ];
  return render(data);
};