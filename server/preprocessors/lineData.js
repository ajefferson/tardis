/**
 * Created by ajefferson on 18/10/13.
 */
var common = require("../preprocessors/lib/common.js"),
    _ = require("underscore");

var analytics = require("../../config.js").session;
var TABLE_NAME = 'lineData';
var inserter = analytics.inserter(TABLE_NAME);

exports.match = function (data, key) {

    var timestamp = Date.now();

    if (_.isObject(data) && data && data.lineData && _.isArray(data.lineData)) {
        console.log("lineData");
        var lineData = data.lineData;
        var output = [];
        _(lineData).each(function(data,i){
            _(data).each(function(point){
                output.push({
                    key: key,
                    lineId: key + "-" + i.toString(),
                    x:point.x,
                    y:point.y,
                    timestamp: timestamp
                })
            })
        })

        savePointData(output);
    }
}

exports.process = function (ourData, memo) {
    //does nothing

}

function savePointData(data){
    var query = inserter.insert(data);

    query.otherwise(function(error){
        console.log("ERROR making request:" + request)
        console.log(error)
    });
    return query
}















