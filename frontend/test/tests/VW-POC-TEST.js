module.exports = {
   tags : ['Vw-POC-TEST'],
   'Testing started' : function(browser)
   {
       browser
       .url('http://ec2-54-218-152-159.us-west-2.compute.amazonaws.com/')
       .verify.title('App')
       .click('select[name="sel1"] option[value="0000000000GS1"]').pause(4000).saveScreenshot('./screenshots/Chrome/0000000000GS1.png')
       .click('select[name="sel1"] option[value="5000000147"]').pause(3000).saveScreenshot('./screenshots/Chrome/5000000147.png')
       browser.end();
      
        
   } 
}