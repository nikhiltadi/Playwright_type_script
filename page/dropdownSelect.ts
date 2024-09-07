import  {Page} from '@playwright/test';
import { test, expect } from '@playwright/test';

export default class DropdownSelect{
  page: Page;
    //templateDropdown =   "//button//span[text()='Templates']"
    moreButton = "//*[@aria-label='More']"
  templateButton = "//*[@title='Starred boards']/following-sibling::button[@aria-label='Templates']"
  templateText = '//div[@data-testid="template-picker-container-inner-wrapper"]/descendant::li'
    constructor(page: Page) {
      this.page = page;

  }

    async dropdownSelect() {
      await this.page.locator(this.moreButton).click()
      await this.page.locator(this.templateButton).click()
     // await this.page.locator(this.templateDropdown).click()
     // await this.page.getByRole('menuitem', { name:'Remote Team Meetings'}).click()
     for(let i=1;i<=11;i++)
     {
      console.log('//div[@data-testid="template-picker-container-inner-wrapper"]/descendant::li['+i+']');
     const element = await this.page.locator('//div[@data-testid="template-picker-container-inner-wrapper"]/descendant::li['+i+']'); 
     const text = await element.textContent();
     console.log('-----'+text)
     if(text == 'Remote Team Meetings')
     {
      element.click()
     }
     else{
      console.log('Element couldnt found')
     }
     }
    
            
        }
}