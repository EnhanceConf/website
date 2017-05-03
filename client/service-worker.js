var serviceWorker = require('speclate-service-worker')
var spec = require('../spec')
var version = '1.13'

serviceWorker(spec, version)