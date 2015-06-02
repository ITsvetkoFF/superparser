var express = require('express');
var router = express.Router();

var path = require('path');
var childProcess = require('child_process');
var phantomjs = require('phantomjs');
var binPath = phantomjs.path;

/* GET site in query parameter (site) and render in on the server */
router.get('/', function (req, res, next) {
    var childArgs = [
        path.join(global.appRoot, 'phantoms', 'my-phantomjs-script.js'),
        req.query.site
    ];
    childProcess.execFile(binPath, childArgs, function (err, stdout, stderr) {
        res.sendFile(global.appRoot + "/" + stdout);
    });

});

module.exports = router;
