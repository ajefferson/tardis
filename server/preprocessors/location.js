/**
 * Created by ajefferson on 17/10/13.
 */
var common = require("../preprocessors/lib/common.js"),
    _ = require("underscore");

var synonyms = {
    longitude: ["longitude", "long", "lon"],
    latitude: ["latitude", "lat", "lat"]
}


function getMatchingProperty(data, synonyms, subject) {
    //console.log(data);
    if (_.isObject(data) && data) {
        var match = _(data).chain().keys().filter(function (key) {
            return _(synonyms).any(_(_.isEqual).partial(key.toLowerCase()));
        }).first().value();

        //console.log(match);

        if (match) {
            return [subject, data[match]];
        } else {
            return undefined;
        }
    }
}

exports.match = function (eventData) {

    var getMatches = _(getMatchingProperty).partial(eventData);

    var matches = _(synonyms).chain().map(getMatches).reject(_.isUndefined).value();

    //console.log(matches);
    if (matches.length == 2) {
        return _.object(matches); // should be an object with their term replaced with ours {longitude: val, latitude: val}
    }

    return false;
}

exports.process = function (ourData, memo) {
    //console.log(ourData);
    var longitude = parseFloat(ourData.longitude);
    var latitude = parseFloat(ourData.latitude);
    if (_.isNaN(longitude) || _.isNaN(latitude) || (latitude === 0 && longitude === 0)) {
        console.log("nan " + longitude + ", " + latitude)
        return;
    } else {
        console.log("location found: " + longitude + ", " + latitude);
        _(memo).extend({
            longitude: longitude,
            latitude: latitude
        });

    }

}