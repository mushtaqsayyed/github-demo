var webdriver = require('selenium-webdriver');
var webdriver = require('selenium-webdriver');
Keys = webdriver.Key,
By = webdriver.By,
    until = webdriver.until;
    var assert = require('assert');

var capabilities = {
    "browserName": "internet explorer"
}

var driver = new webdriver.Builder().
  usingServer('http://192.168.43.98:4444/wd/hub').
  withCapabilities(capabilities).
  build();

driver.get('https://www.google.com');