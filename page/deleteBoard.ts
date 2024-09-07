import  {Page} from '@playwright/test';
import { test, expect } from '@playwright/test';

export default class DeleteBoard{
  page: Page;
    threeDots =   "button[aria-label='Show menu']  [data-testid ='OverflowMenuHorizontalIcon']"
    closeBoardButton = "[class='board-menu-navigation-item-link board-menu-navigation-item-link-v2 js-close-board']"
    confirmationCloseButton = '[data-testid="close-board-confirm-button"]'
    permanentlDeleteBoardLink = '[data-testid="close-board-delete-board-button"]'
    confirmaitonOdDeleteButton = '[data-testid="close-board-delete-board-confirm-button"]'

    constructor(page: Page) {
      this.page = page;

  }

    async deleteCreatedBoard() {
     // await this.page.locator(this.addListButton).click()
      await this.page.locator(this.threeDots).click()
      await this.page.locator(this.closeBoardButton).click()
      await this.page.locator(this.confirmationCloseButton).click()
      //await expect(this.page.locator(this.addListButton))
      await this.page.locator(this.permanentlDeleteBoardLink).click()
      await this.page.locator(this.confirmaitonOdDeleteButton).click()
    
            
        }
}