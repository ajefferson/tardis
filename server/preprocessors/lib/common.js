/**
 * Created by ajefferson on 17/10/13.
 */
var _ = require("underscore");

var synonyms = [
    "eventType",
    "event_type",
    "event-type"
];

exports.getEventType = function(eventObject){
    var matches = _(synonyms).chain().map(function(name){
        return eventObject[name];
    }).filter(function(obj){return !_.isUndefined(obj)}).value();

    if(eventObject && _(matches).any()){
        return matches[0];
    }
}