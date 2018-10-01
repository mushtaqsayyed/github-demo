var webdriver = require('selenium-webdriver');
var webdriver = require('selenium-webdriver');
Keys = webdriver.Key,
By = webdriver.By,
    until = webdriver.until;
    var assert = require('assert');

var capabilities = {
 'browserName' : 'chrome'
}

var driver = new webdriver.Builder().
  usingServer('http://localhost:4444/wd/hub').
  withCapabilities(capabilities).
  build();

driver.get('https://the-internet.herokuapp.com/hovers');

// Hover the mouse on first image

driver.findElement(webdriver.By.xpath("//img[@src='/img/avatar-blank.jpg']")).then(function(elem){
    driver.actions().mouseMove(elem).perform();
    driver.sleep(5000);
});


// Assert if 'name: user1' exist


driver.findElement(By.xpath("//h5")).getText().then(function (elem1){
assert.equal("name: user1",elem1);
});

driver.quit();