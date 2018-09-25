var webdriver = require('selenium-webdriver'),
    By = webdriver.By,
    until = webdriver.until;
    var assert = require('assert');
    

var driver = new webdriver.Builder()
    .forBrowser('chrome')
    .build();

    driver.get('http://demo.guru99.com/popup.php');

    // driver.getWindowHandle().then(function (mainWindowHandle) {
    //     console.log ( + mainWindowHandle);
    
    // });

var title1 = driver.getTitle();
    var parent_window = driver.getWindowHandle();

    driver.findElement(By.linkText('Click Here')).click();

    var child_window = driver.getAllWindowHandles().then(function gotWindowHandles(allHandles){driver.switchTo().window(allHandles[1]);});
   driver.sleep(5000);
    driver.findElement(By.name('emailid')).sendKeys("support@bstack.com");

 


    driver.findElement(By.name("btnLogin")).submit();
   
    // driver.switchTo().window(windows[2]);

    // var ans = driver.findElement(By.css("h3")).getText();



    // assert.equal("This access is valid only for 20 days.",ans.value_);


    var ans = driver.findElement(By.css("h3")).getText().then(function(ans){

        assert.equal("This access is valid only for 20 days.",ans);
        console.log('=========='+ ans +'============');
    // assert.equal("I am a JS Confirm",true,ans);

    });



    driver.switchTo().window(parent_window);

 var c = driver.findElement(By.xpath("//body/p/a")).getText().then(function(abc){
    assert.equal("Click Here",abc);
 });



    
   driver.quit();