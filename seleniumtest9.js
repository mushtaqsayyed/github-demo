describe('selenium test 9',function(){
    it('click on link untill successfull msg',function(){

        beforeEach(function() {
            return browser.ignoreSynchronization = true;
         });

         browser.waitForAngularEnabled(false);

         browser.get('http://the-internet.herokuapp.com/notification_message');

  

var a = 1;

    var foo = element(by.id("flash")).getText().then(function(ans){


for(a;a<100;a++){
    console.log("================================  "+a);
    if(!ans.includes("Action unsuccesful, please try again")){
    browser.driver.findElement(by.linkText('Click here')).click();
    browser.sleep(3000)
   
break;
}
browser.sleep(3000)
}

    });

 







});    
    });
