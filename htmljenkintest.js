var webdriver = require('selenium-webdriver');
Keys = webdriver.Key,
By = webdriver.By,
    until = webdriver.until;
    var assert = require('assert');

var capabilities = {
 'browserName' : 'chrome'
}

var driver = new webdriver.Builder().
  usingServer('http://10.100.101.235:4444/wd/hub').
  withCapabilities(capabilities).
  build();

driver.get('http://localhost:80');


// robot.keyPress(KeyEvent.VK_TAB);

driver.findElement(By.tagName('h1')).getText().then(function (def){

    assert.equal("hello world",def);
    console.log(def);
    });

    driver.quit();