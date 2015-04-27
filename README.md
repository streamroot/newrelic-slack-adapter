# New Relic Slack Adapter

## Set-up

* Run `npm install`
* Configure the app `mv ./config/config.yml.example ./config/config.yml && editor ./config/config.yml`
* Run `npm start`

## Usage

* Configure NewRelic to send alert to `incomingMessageRoute` defined in configuration file.
* Alerts are sent to Slack on `outcomingMessageURI` URI defined in configuration file.

## TODO

* Tests!
* Add a logger.