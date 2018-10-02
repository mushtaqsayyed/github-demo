var config = require('../../nightwatch.conf.BASIC.js');

module.exports = { // adapted from: https://git.io/vodU0
  'Guinea Pig Assert Title': function(browser) {
    browser
      .url('https://www.google.com')
      .useXpath()
      .waitForElementVisible('//input[@name="q"]')
      .setValue('//input[@name="q"]','nightwatch')
      .click('//input[@name="btnK"]')
      .waitForElementVisible('//cite[text()="nightwatchjs.org/"]',2000)
      .saveScreenshot('google.png')
      .end();
  }
};