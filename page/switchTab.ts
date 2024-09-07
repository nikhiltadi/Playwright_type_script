import { test, expect } from '@playwright/test';
import { Browser, Page } from '@playwright/test';

export default class switchTab {
  page: Page;
  moreButton = "//*[@aria-label='More']"
  templateButton = "//*[@title='Starred boards']/following-sibling::button[@aria-label='Templates']"
  //firstTempalteClick = "//li//div//button[@role='menuitem'][1]//div[2]"
  firstTempalteClick = "//li//div//button[@role='menuitem']//div[text()='1-on-1 Meeting Agenda']"
  externalLinkIconButton = '//span[@data-testid="ExternalLinkIcon"]'
  useTemplateButton = "//*[text()='Use template']"
  createButton = '//*[@value="Create"]'
  createCard = "//h2[text()='Alpha']//parent::div//parent::div/following-sibling::div//button[1]"
  newTabVerify = "//div[text()='Created by Sarah Goff-Dupont, Principal Writer @ Atlassian']/preceding-sibling::h1"
  useThisTemplateButton = "//*[text()='Use template']"
  
  constructor(page: Page) {
    this.page = page;

  }

  async templateOpen(page: Page) {

    await this.page.locator(this.moreButton).click()
    await this.page.locator(this.templateButton).click()
    await this.page.locator(this.firstTempalteClick).click()
    await this.page.locator(this.externalLinkIconButton).click()
  }

  async switchTab(browser: Browser) {

    const pages = browser.contexts()[0].pages(); // Get all open pages (tabs)
    const currentTab = pages[pages.length - 1]; // Select the most recently opened tab

    await currentTab.bringToFront(); // Bring the new tab to the front (focus on it)

    // Optionally, perform an action on the new tab to ensure it's focused
    await currentTab.waitForLoadState(); // Wait for the new tab to load fully
    await currentTab.locator('body').click(); // Click on the body of the new tab to ensure focus
    await currentTab.close()

    const remainingPages = browser.contexts()[0].pages(); // Get the remaining open pages
    const lastTab = remainingPages[remainingPages.length - 1]; // Select the last remaining tab

    await lastTab.bringToFront(); // Bring the last tab to the front (focus on it)
    this.page = lastTab;

    await this.page.locator(this.newTabVerify).waitFor({ state: 'visible' });
    await expect(this.page.locator(this.newTabVerify)).toHaveText('1-on-1 Meeting Agenda')
    await this.page.locator(this.useThisTemplateButton).click()
  }
}