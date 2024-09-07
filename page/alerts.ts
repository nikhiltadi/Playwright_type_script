import  {Browser, Page} from '@playwright/test';
import { test, expect } from '@playwright/test';

export default class AlertHandle{
    page: Page;
    alertActivateButtonClick = "[class = 'btn btn-danger']"
    // alertActivateButtonClick = "#OKTab"
    alertandCancel = "//*[text()='Alert with OK & Cancel ']"
    alertandOk = "//*[text()='Alert with OK ']"

    constructor(page: Page) {
        this.page = page;

    }

    async launchUrl(url: string) {
        await this.page.goto(url, { waitUntil: 'load' });
      
    }


       async alerts(browser : Browser) {
       // await expect(this.page.locator(this.openLoginText)).toHaveText('Log in to Trello')
       await this.page.locator(this.alertandCancel).click();
       await this.page.locator(this.alertandOk).click();
        await this.page.locator(this.alertActivateButtonClick).click();
        await this.page.waitForTimeout(5000);
     //await this.page.press(this.alertActivateButtonClick, 'Enter');
        const [dialog] = await Promise.all([
            // Listen for the 'dialog' event and capture it
            this.page.waitForEvent('dialog'),
    
            // Trigger an alert manually
            //this.page.evaluate(() => alert('This is another alert')),
        ]);
    
         console.log(`Dialog message: ${dialog.message()}`);
    
        // Accept the dialog
        await dialog.accept();
    
        //Close the browser
        await browser.close();

      
    }
}