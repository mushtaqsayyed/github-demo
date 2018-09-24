var webdriver = require('selenium-webdriver'),
    By = webdriver.By,
    until = webdriver.until;
    var assert = require('assert');
    

var driver = new webdriver.Builder()
    .forBrowser('chrome')
    .build();

    // driver.manage().window().maximize();
    driver.get('https://the-internet.herokuapp.com/javascript_alerts');

    // driver.manage().timeouts().implicitlyWait(30);

    driver.findElement(By.xpath("//button[text()='Click for JS Alert']")).click();


   
    driver.switchTo().alert().accept();

    driver.sleep(10000);
    console.log('==========after first alert============');

    driver.findElement(By.xpath("//button[text()='Click for JS Confirm']")).click();

    // driver.findElement({id : 'result'}).getText().then(function(ans){
        var ans = driver.switchTo().alert().getText().then(function(ans){

            assert.equal("I am a JS Confirm",ans);
            console.log('=========='+ ans +'============');
        // assert.equal("I am a JS Confirm",true,ans);
    
        });
    driver.switchTo().alert().accept();

    driver.sleep(10000);

    driver.findElement(By.xpath("//button[text()='Click for JS Prompt']")).click();


   var alert =  driver.switchTo().alert().getText().then(function(alert){
        assert.equal("I am a JS prompt",alert);
        console.log('=========='+ alert +'============');
    console.log(alert);
    });
    driver.switchTo().alert().sendKeys('BrowserStack');
    driver.switchTo().alert().accept();
 
    driver.sleep(10000);
    
    driver.quit();


    

    
    