var webdriver = require('selenium-webdriver');
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

driver.get('https://the-internet.herokuapp.com/dynamic_controls');

driver.findElement(By.xpath('//button[text()="Remove"]')).click();


driver.sleep(5000);

driver.findElement(By.id('message')).getText().then(function (abc){

assert.equal("It's gone!",abc);

});

driver.findElement(By.xpath('//button[text()="Add"]')).click();



driver.sleep(5000);

driver.findElement(By.id('message')).getText().then(function (def){

  assert.equal("It's back!",def);
  
  });

driver.quit();