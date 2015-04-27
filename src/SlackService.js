'use strict';

/* jshint -W109 */
var request = require('request'),
	readYaml   = require('read-yaml');

var config = readYaml.sync('./config/config.yml');

module.exports = {
	sendAlert: function (alert, callback) {
		var cb = callback || function () {};

		var slackAlert = JSON.stringify({
			"text": alert.message + " : " + alert.description + "\n" + alert.date.toUTCString() + " <" + alert.link + "|Click here> for details.",
			"username": config.slackUsername
		});

		request
		.post({
			uri: config.outcomingMessageURI,
			timeout: config.requestTimeout,
			body: slackAlert
		},
		function (err, response) {
			if (err) {
				cb(err);
				return;
			}

			if (response.statusCode === 200) {
				cb(null, slackAlert);
			} else {
				cb(new Error('Slack response status code : ' + response.statusCode));
			}
		});
	}
};