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

driver.get('http://stormy-beyond-9729.herokuapp.com/');


driver.findElement(By.name('testname')).sendKeys("Browserstack");

 driver.findElement(By.name('testemail')).sendKeys("support@bstack.com");

 driver.findElement(By.name('testcheckbox')).click();

 driver.findElement(By.xpath("//option[text()='yellow']")).click();

//  driver.findElement(By.xpath("//option[text()='yellow']")).click();

//  driver.findElement(By.xpath("//option[text()='yellow']")).click();

//  red
 driver.findElement(By.xpath("//option[text()='red']")).click();

//  gray
 driver.findElement(By.xpath("//option[text()='gray']")).click();

driver.findElement(By.id("submit")).click();

driver.findElement(By.xpath("//body")).getText().then(function (abc){

  assert.equal('{"testname"=>"Browserstack", "testemail"=>"support@bstack.com", "testcheckbox"=>"true", "testcolor"=>"yellow", "testmultiple"=>["green", "red", "gray", "yellow"]}',abc);

});

// var alert =  driver.switchTo().alert().getText().then(function(alert){
//   assert.equal("I am a JS prompt",alert);
//   console.log('=========='+ alert +'============');
// console.log(alert);
// });

// assert.equal('{"testname"=>"BrowserStack", "testemail"=>"support@bstack.com", "testcheckbox"=>"true", "testcolor"=>"yellow", "testmultiple"=>["red", "gray"]}',ans.value_);
driver.quit();
