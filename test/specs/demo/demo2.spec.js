const assert = require('assert');

describe('demo 2', function() {
  before(function() {
    browser.windowHandleSize({
      width: 375,
      height: 667
    });
  });
  
  beforeEach(function() {
    browser.pause(1000);
  });

  it('login failure', function() {
    browser.url('http://demo.keystonejs.com/keystone/signin')
           .element('[name=email]').setValue('demo@keystonejs.com')
           .element('[name=password]').setValue('1111')
           .click('button[type=submit]')
           .waitForExist('.Alert--danger');
    const message = browser.getText('.Alert--danger');
    assert.equal(message,
      'The email and password you entered are not valid.');
  });

  it('login successful', function() {
    browser.url('http://demo.keystonejs.com/keystone/signin')
           .element('[name=email]').setValue('demo@keystonejs.com')
           .element('[name=password]').setValue('demo')
           .click('button[type=submit]')
           .waitForExist('[href="/keystone/signout"]');
  });

  it('logout', function() {
    browser.click('[href="/keystone/signout"]')
           .waitForExist('.Alert--info');
  });

});
