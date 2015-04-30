var jwt = require('jsonwebtoken');
var popSecret = "I just wanted to share my pop secret with you!";
var oneWeekInMinutes = 7 * 24 * 60;

module.exports = {
  sign: function(payload) {
    return jwt.sign(payload, popSecret, {expiresInMinutes: oneWeekInMinutes});
  },

  verify: function(token, callback) {
    return jwt.verify(token, popSecret, {}, callback);
  }
};
