/**
 * Created by ajefferson on 17/10/13.
 */
var _ = require("underscore");

var applyPreprocessors = require("../services/applyPreprocessors.js").run;

var analytics = require("../../config.js").session;
var TABLE_NAME = 'kvpData';
var inserter = analytics.inserter(TABLE_NAME);

exports.getValue = function(key,version){
    if(version){
        throw "version not implemented";
    }
    var request = "SELECT LAST(`value`) FROM `"+TABLE_NAME+"` WHERE `key` IN('"+key+"')";
    var query = analytics.execute(request);
    query.otherwise(function(error){
        console.log("ERROR making request:" + request)
        console.log(error)
    });
    return query;
}

exports.setValue = function(key,value){

    var timestamp = Date.now();
    console.log(key)
    //console.log(value)


    var data = _(applyPreprocessors(value, key)).extend({
        key: key,
        value: value,
        timestamp: timestamp
    })

    //console.log(data)

    var query = inserter.insert([data]);

    query.otherwise(function(error){
        console.log("ERROR making request:" + request)
        console.log(error)
    });
    return query
}


























