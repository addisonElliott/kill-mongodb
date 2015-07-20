var kill = require('../');
var assert = require('assert');
var windows = require('os').platform() === 'win32';

describe('kill-mongodb', function() {
  it('should have the right commands', function() {
    if (windows) {
      assert.deepEqual(kill.commands, [
        'taskkill /F /IM mongod.exe',
        'taskkill /F /IM mongo.exe',
        'taskkill /F /IM mongos.exe'
      ]);
    } else {
      assert.deepEqual(kill.commands, [
        'killall -9 mongod',
        'killall -9 mongo',
        'killall -9 mongos'
      ]);
    }
  });

  it('should should work even if nothing is running', function(done) {
    kill(done);
  });
});
