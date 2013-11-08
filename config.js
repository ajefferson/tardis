/**
 * Created by ajefferson on 16/10/13.
 */

var AA = require("acunu-analytics")

var cluster = new AA.Cluster();
cluster.addURIs.apply(cluster,['your acunu analytics server url here:8080']);
var config = new AA.ConnectionConfig();
var session = cluster.getSession(config);


exports.session = session;
