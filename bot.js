"use strict";

var login = require("./index");
var log = require("npmlog");

login({email: process.argv[2], password: process.argv[3]}, {pageID: process.argv[4]}, function callback (err, api) {
    if(err) return console.error(err);
    api.setOptions({listenEvents: true, selfListen: true});

    var stopListening = api.listen(function(err, event) {
        if(err) return console.error(err);

        log.info("Event received: ", JSON.stringify(event));
        console.log(JSON.stringify(event));
    });
});