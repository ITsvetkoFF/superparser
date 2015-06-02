var page = require('webpage').create();
var system = require('system');

var url = system.args[1]; // haardcoded arg with site
page.open(url, function (status) {
    var filename = "pages/" + Math.random().toString(36).substring(7) + ".jpeg";
    //page.viewportSize = { width: 1024, height: 600 };

    page.render(filename, {format: 'jpeg', quality: '20'});
    system.stdout.write(filename);
    phantom.exit();
});