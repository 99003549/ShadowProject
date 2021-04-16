const { Given, When, Then } = require('cucumber');
//const expect = require('chai').expect;cl
 
When('Hit The web Page URL',async () => {
    await browser.get('https://opensource-demo.orangehrmlive.com');
});
 
Then('Verify The Page Title', async () => {
    browser.sleep(300);
    const title = await browser.driver.getTitle();
    console.log('TITLE = ', title);
    await expect(title).to.be.equal( "OrangeHRM");
});
 
Then('Verify The Current Page URL', async () => {
    const url = await browser.driver.getCurrentUrl();
    console.log('URL = ', url);
    await expect(url).to.be.equal("https://opensource-demo.orangehrmlive.com");
});