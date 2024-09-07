import {test,expect,Browser, Page } from '@playwright/test';
import Login from '../page/login';
import BoardCreation from '../page/boardCreation';
import ListCreation from '../page/listCreation';
import DeleteBoard from '../page/deleteBoard';
import DropdownSelect from '../page/dropdownSelect';
import switchTab from '../page/switchTab';
import AlertHandle from '../page/alerts';
//import { Browser, Page } from '@playwright/test';


test.describe('',()=>{

test.skip('login', async({page})=>{
    const loginPage = new Login(page);
    const boardCreationObj = new BoardCreation(page);
    const listcreationobj = new ListCreation(page);
    const deletBoardObj = new DeleteBoard(page)
    test.setTimeout(12000000);
    await loginPage.launchApplication("https://trello.com/en/login");
    await page.evaluate(() => {
        window.moveTo(0, 0);
        window.resizeTo(screen.width, screen.height);
      });
    await loginPage.loginInToApplication("nikhil.tadi@optimworks.com","bunny12345678");
    await boardCreationObj.boardCreation()
    await listcreationobj.listCreation()
    await deletBoardObj.deleteCreatedBoard()
    
})

test.skip('Trello drop down select', async({page})=>{
    const loginPage = new Login(page);
    const dropdownSelectObj = new DropdownSelect(page)
    test.setTimeout(12000000);
    await loginPage.launchApplication("https://trello.com/en/login");
    await loginPage.loginInToApplication("nikhil.tadi@optimworks.com","bunny12345678");
    await dropdownSelectObj.dropdownSelect()
    
})

test.skip('Switch tab', async({page,browser})=>{
    const loginPage = new Login(page);
    const switchToTabPage = new switchTab(page);
    test.setTimeout(12000000);
    await loginPage.launchApplication("https://trello.com/en/login");
    await page.evaluate(() => {
        window.moveTo(0, 0);
        window.resizeTo(screen.width, screen.height);
      });
    await loginPage.loginInToApplication("nikhil.tadi@optimworks.com","bunny12345678");
    await switchToTabPage.templateOpen(page);
    await switchToTabPage.switchTab(browser);



    
})

test('Alerts', async({page,browser})=>{
  const alertobj = new AlertHandle(page);
  test.setTimeout(12000000);
  await alertobj.launchUrl('https://demo.automationtesting.in/Alerts.html');
  await alertobj.alerts(browser);



  
})





})



