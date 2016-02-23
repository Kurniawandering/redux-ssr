'use strict'

if (process.env.NODE_ENV === 'production') {
    module.exports = require('./routeStore');
} else {
    module.exports = require('../devtools/DevToolsStore');
}
