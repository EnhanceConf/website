#!/usr/bin/env node

var PORT = 9000

var serveMe = require('serve-me')({
  debug: true,
  directory: './'
})

serveMe.start(PORT)
console.log('http://127.0.0.1:' + PORT)
