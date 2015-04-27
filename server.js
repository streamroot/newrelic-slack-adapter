'use strict';

var bodyParser = require('body-parser'),
	express    = require('express'),
	readYaml   = require('read-yaml');

var RequestController = require('./src/RequestController');

var app    = express(),
	config = readYaml.sync('./config/config.yml');

app.use(bodyParser.json());

app.get('/', RequestController.sendVersionNumber);
app.post(config.incomingMessageRoute, RequestController.convertAndSendMessage);

app.listen(config.port, function () {
	console.log('Server running on port', config.port);
});