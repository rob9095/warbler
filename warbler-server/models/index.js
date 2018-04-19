const mongoose = require('mongoose');
mongoose.set('debug', true);
mongoose.Promise = Promise;
var options = {
  server: { socketOptions: { keepAlive: 1, connectTimeoutMS: 30000 } },
  replset: { socketOptions: { keepAlive: 1, connectTimeoutMS: 30000 } }
};

mongoose.connect('mongodb://localhost/warbler', options);

module.exports.User = require('./user');
module.exports.Message = require('./message');
module.exports.Follower = require('./follower');
module.exports.Like = require('./like');
