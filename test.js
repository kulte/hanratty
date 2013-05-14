/**
* Module dependencies.
*/

var assert = require('assert')
  , Hanratty = require('./hanratty');

/**
* Test constructor
*/

describe('Hanratty', function () {
  var login = new Hanratty({ client_id: process.env.FACEBOOK_APP_ID, redirect_url: 'http://localhost:8080/facebook/callback' });

  it('should assign client_id in the constructor', function () {
    assert.equal(login.client_id, process.env.FACEBOOK_APP_ID);
  })

  it('should assign redirect_url in the constructor', function () {
    assert.equal(login.redirect_url, 'http://localhost:8080/facebook/callback');
  })

  it('should assign state if provided', function () {
    var login = new Hanratty({
        client_id: process.env.FACEBOOK_APP_ID
      , redirect_url: 'http://localhost:8080/facebook/callback'
      , state: '0178443336'
    });

    assert.equal(login.state, '0178443336');
  })

  it('should not assign state if not provided', function () {
    assert.equal(login.state, undefined);
  })

  it('should assign response_type with valid option', function () {
    var login = new Hanratty({
        client_id: process.env.FACEBOOK_APP_ID
      , redirect_url: 'http://localhost:8080/facebook/callback'
      , response_type: 'code'
    });

    assert.equal(login.response_type, 'code');
  })

  it('should not assign response_type with invalid option', function () {
    var login = new Hanratty({
        client_id: process.env.FACEBOOK_APP_ID
      , redirect_url: 'http://localhost:8080/facebook/callback'
      , response_type: 'invalid_type'
    });

    assert.equal(login.response_type, undefined);
  })

  it('should assign scope if present', function () {
    var login = new Hanratty({
        client_id: process.env.FACEBOOK_APP_ID
      , redirect_url: 'http://localhost:8080/facebook/callback'
      , scope: ['email']
    });

    assert.deepEqual(login.scope, ['email']);
  })

  it('should not assign scope if not present', function () {
    var login = new Hanratty({
        client_id: process.env.FACEBOOK_APP_ID
      , redirect_url: 'http://localhost:8080/facebook/callback'
    });

    assert.equal(login.scope, undefined);
  })
})
