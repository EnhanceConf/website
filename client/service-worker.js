var serviceWorker = require('speclate-service-worker')
var spec = require('../spec')
var version = '1.9'

serviceWorker(spec, version)