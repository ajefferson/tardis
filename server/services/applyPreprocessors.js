/**
 * Created by ajefferson on 17/10/13.
 */

var _ = require("underscore"),
    location = require("../preprocessors/location.js"),
    eventType = require("../preprocessors/eventType.js"),
    lineData = require("../preprocessors/lineData.js");




var preProcessors = [
    eventType,
    location,
    lineData
]


exports.run = function(data, key) {

    var output = {};
    _(preProcessors).forEach(function(preProcessor){
        var infoToSave = preProcessor.match(data, key);
        if(infoToSave){
            preProcessor.process(infoToSave, output, key);
        }
    });

    return output;
};




















