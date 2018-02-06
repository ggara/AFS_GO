'use strict';

/* Export all files inside API folder */
require('fs').readdirSync(__dirname).forEach(function (file) {
    if (file.match(/\.js(on)?$/) && file != 'index.js' && file != 'package.json') {
        var fileName = file.split('.')[0];
        exports[fileName] = require('./' + fileName);
    }
});