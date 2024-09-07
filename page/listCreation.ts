import  {Page} from '@playwright/test';
import { test, expect } from '@playwright/test';

export default class ListCreation{
  page: Page;
    addListButton =   "[data-testid = 'list-composer-button']"
    enterListTitle = "//*[@name = 'Enter list title…']"
    addListButton1 = "//*[text()= 'Add list']"
    plusAddCardButton = "[data-testid='list-add-card-button']"
    enterCardName = "[data-testid='list-card-composer-textarea']"
    addCardButton = "[data-testid='list-card-composer-add-card-button']"
    createCard= "//h2[text()='Alpha']//parent::div//parent::div/following-sibling::div//button[1]"

    constructor(page: Page) {
      this.page = page;

  }

    async listCreation() {
      
     let myList = ["apple", "banana", "orange"];
     let myListOfCards = ["apple card", "banana card", "orange card"];
     await this.page.locator(this.enterListTitle).fill(myList[0])
     for(let i=0;i<3;i++)
      {
      
      await this.page.locator(this.addListButton1).click()
      console.log("//h2[text()='"+myList[i]+"']//parent::div//parent::div/following-sibling::div//button[1]")
      await this.page.locator("//h2[text()='"+myList[i]+"']//parent::div//parent::div/following-sibling::div//button[1]").click()
      await this.page.locator("//h2[text()='"+myList[i]+"']//parent::div//parent::div/following-sibling::div//button[1]").click()
      await this.page.locator(this.enterCardName).fill(myListOfCards[i])
      await this.page.locator(this.addCardButton).click()
      if(i<2)
        {
      await this.page.locator(this.addListButton).click()
      await this.page.locator(this.enterListTitle).fill(myList[i+1])
      }
    }    
        }
}