import  {Page} from '@playwright/test';
import { test, expect } from '@playwright/test';

export default class Login{
    page: Page;
    openLoginText = " //div //h1[text() = 'Log in to Trello']"
    userName = "[id = 'username']"
    continueButton= '[id="login-submit"] span'
    login = "[id = 'login']"
    loginText = "//span[text() = 'Log in']"
    password = '[id="password"]'
    submit = '[id="login-submit"]'

    constructor(page: Page) {
        this.page = page;

    }

    async launchApplication(url: string) {
        await this.page.goto(url, { waitUntil: 'load' });
      
    }

    // async loginInToApplication(userName: string,password: string) {
    //    // await expect(this.page.locator(this.openLoginText)).toHaveText('Log in to Trello')
    //     await this.page.locator(this.userName).fill(userName)
    //     await this.page.locator(this.login).click()
    //     await expect(this.page.locator(this.loginText)).toHaveText('Log in')
    //     await this.page.locator(this.password).fill(password)
    //     await this.page.locator(this.submit).click()
      
    // }

       async loginInToApplication(userName: string,password: string) {
       // await expect(this.page.locator(this.openLoginText)).toHaveText('Log in to Trello')
        await this.page.locator(this.userName).fill(userName)
        await this.page.locator(this.continueButton).click()
        await expect(this.page.locator(this.loginText)).toHaveText('Log in')
        await this.page.locator(this.password).fill(password)
        await this.page.locator(this.submit).click()
      
    }
}