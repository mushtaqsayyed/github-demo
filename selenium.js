var webdriver = require('selenium-webdriver'),
    By = webdriver.By,
    until = webdriver.until;

var driver = new webdriver.Builder()
    .forBrowser('chrome')
    .build();

driver.get('https://www.facebook.com');
// driver.get('https://www.browserstack.com');
driver.navigate().back();
//Page should go forward
driver.navigate().forward();
driver.getTitle().then(function (websiteTitle) {
    console.log(websiteTitle);
});


driver.getCurrentUrl().then(function (websiteTitle) {
    console.log('================================'+ websiteTitle);
});


driver.wait(until.titleIs('Facebook – log in or sign up'), 1000)
    .then(function () {
        console.log('Page title is: Facebook – log in or sign up');
    });

    driver.wait(until.urlIs('https://www.facebook.com/'), 1000)
    .then(function () {
        console.log('URL is: https://www.facebook.com/');
    });

//Print Current URL of page

//If current URL is https://www.facebook.com/ then print -> URL is: https://www.facebook.com/

driver.quit();