var serviceWorker = require('speclate-service-worker')
var spec = require('../spec')
var version = '1.16'

serviceWorker(spec, version)