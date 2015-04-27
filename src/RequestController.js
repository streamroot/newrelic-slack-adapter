'use strict';

/* jshint -W106 */
var pjson        = require('../package.json'),
	SlackService = require('./SlackService');

var RequestController = {
	sendVersionNumber: function (req, res) {
		res.status(200);
		res.end('New Relic Slack Adapter v' + pjson.version);
	},
	convertAndSendMessage: function (req, res) {
		var alert = {
			message: req.body.message,
			description: req.body.short_description,
			link: req.body.alert_url,
			date: new Date(req.body.created_at)
		};

		SlackService.sendAlert(alert, function (err) {
			if (err) {
				res.status(500).end();
				return;
			}

			res.status(200).end();
		});
	}
};

module.exports = RequestController;