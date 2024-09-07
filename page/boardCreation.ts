import  {Page} from '@playwright/test';
import { test, expect } from '@playwright/test';

export default class BoardCreation{
    page: Page;
      //createButton =   "[data-testid='header-create-menu-button']"
      createButton = "//*[@aria-label='Create board or Workspace']"
      createBoardButton = "[data-testid='header-create-board-button']"
      createBoardPopupText = "//h2[text()='Create board']"
      enterBoardNameField = "[data-testid='create-board-title-input']"
      createBoardSubmitButton = "[data-testid='create-board-submit-button']"
      boardNameIsDisplay = "[data-testid='board-name-display']"

    constructor(page: Page) {
        this.page = page;

    }

    async boardCreation() {
        await this.page.locator(this.createButton).click()
        await this.page.locator(this.createBoardButton).click()
        await expect(this.page.locator(this.createBoardPopupText)).toHaveText('Create board')
        await this.page.waitForTimeout(3000); 
        await this.page.locator(this.enterBoardNameField).fill('Board 1')
        await this.page.locator(this.createBoardSubmitButton).click()
        await expect(this.page.locator(this.boardNameIsDisplay)).toHaveText('Board 1')
    
            
        }
}