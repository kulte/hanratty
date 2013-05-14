/**
* Module dependencies.
*/

var request = require('superagent')
  , _ = require('underscore');

/**
* Module exports.
*/

module.exports = Hanratty;

/**
* FacebookLogin client.
*/

function Hanratty (options) {
  this.client_id = options.client_id;
  this.redirect_url = options.redirect_url;
  if (_.has(options, 'state')) { this.state = options.state; }
  if (_.has(options, 'response_type') && _.contains(['code', 'token', 'code token'], options.response_type)) {
    this.response_type = options.response_type;
  }
  if (_.has(options, 'scope')) { this.scope = options.scope; }
}

