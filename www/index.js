var express = require('express');
var app = express();
var path = require("path");
var jquery = require('jquery');
var requirejs = require('requirejs');

app.use("/bootstrap", express.static(__dirname+ '/bootstrap'));
app.use("/img", express.static(__dirname+ '/img'));
app.use("/json", express.static(__dirname+ '/json'));

app.use("/home.js", express.static(__dirname+ '/scripts/home.js'));
app.use("/require.js", express.static(__dirname + '/scripts/require.js'));
app.use("/jquery-1.11.3.min.js", express.static(__dirname+ '/bootstrap/js/jquery-1.11.3.min.js'));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname + '/home.html'));
});

app.get('/info-point', function (req, res) {
	res.sendFile(path.join(__dirname + '/tour.html'));
});

app.get('/secretary', function (req, res) {
	res.sendFile(path.join(__dirname + '/tour.html'));
});

app.get('/aula-magna', function (req, res) {
	res.sendFile(path.join(__dirname + '/tour.html'));
});

app.get('/library', function (req, res) {
	res.sendFile(path.join(__dirname + '/tour.html'));
});

app.get('/elevator-e', function (req, res) {
	res.sendFile(path.join(__dirname + '/tour.html'));
});

app.get('/relax-area-e', function (req, res) {
	res.sendFile(path.join(__dirname + '/tour.html'));
});

var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});

requirejs.config({nodeRequire: require});

/**var bebop = require('node-bebop');

var drone = bebop.createClient();

console.log('Now the drone take off...');

drone.connect(function() {
  drone.takeOff();

  setTimeout(function() {
    drone.land();
  }, 5000);
});**/
