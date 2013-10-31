/**
 * Created by ajefferson on 16/10/13.
 */

var AA = require("acunu-analytics")

var cluster = new AA.Cluster();
cluster.addURIs.apply(cluster,['http://ec2-46-137-13-61.eu-west-1.compute.amazonaws.com:8080']);
var config = new AA.ConnectionConfig();
var session = cluster.getSession(config);


exports.session = session;