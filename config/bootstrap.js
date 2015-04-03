module.exports.bootstrap = function(cb) {
  sails.services.passport.loadStrategies();
  cb();
};
