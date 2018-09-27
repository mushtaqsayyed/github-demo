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

driver.get('http://the-internet.herokuapp.com/key_presses');

driver.findElement(By.linkText('Elemental Selenium')).sendKeys(webdriver.Key.ENTER);
// robot.keyPress(KeyEvent.VK_TAB);

driver.findElement(By.id('result')).getText().then(function (def){

    assert.equal("You entered: ENTER",def);
    console.log(def);
    });

    driver.quit();