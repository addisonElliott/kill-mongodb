#!/usr/bin/env node
var kill = require('../');

kill(function(err) {
  if (err) {
    console.error(err);
    process.exit(1);
    return;
  }
  console.error('All MongoDB instances killed.');
});
