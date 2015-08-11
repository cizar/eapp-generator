var render = require('./radiopack');

module.exports = function(gender) {
  gender.options = [
    [ 'M', 'Male' ],
    [ 'F', 'Female' ]
  ];
  return render(gender);
};