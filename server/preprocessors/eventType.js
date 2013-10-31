/**
 * Created by ajefferson on 17/10/13.
 */
var common = require("../preprocessors/lib/common.js"),
    _ = require("underscore");


exports.match = function(eventData){
    var eventType = common.getEventType(eventData);
    if(eventType){
        return {eventType : eventType};
    }
}

exports.process = function(ourData, memo){
    _.extend(memo,ourData);
}