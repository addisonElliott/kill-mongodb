var async = require('async');
var debug = require('debug')('kill-mongodb');
var windows = require('os').platform() === 'win32';
var exec = require('child_process').exec;

var commands = ['mongod', 'mongo', 'mongos'].map(function(name) {
  return windows ? 'taskkill /F /IM ' + name + '.exe' : 'killall ' + name;
});

module.exports = function(done) {
  debug('killing all mongodb instances...');
  async.parallel(commands.map(function(cmd) {
    return function(cb) {
      debug('running `%s`', cmd);
      exec(cmd, function() {
        cb();
      });
    };
  }), function() {
    debug('all mongodb instances killed');
    done();
  });
};

module.exports.commands = commands;
