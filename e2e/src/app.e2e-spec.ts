import { AppPage } from './app.po';
import { browser, logging } from 'protractor';

describe('angular-with-protractor App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
    browser.driver.manage().window().maximize();
  });

  it('should display welcome message', () => {
    page.navigateTo('/');
    expect(page.getTitleText()).toEqual('Employee Maintenance App');
  });
  
  it('should display EmployeeList tab', () => {
    page.navigateTo('/');
    expect(page.getEmployeeListTab().getText()).toEqual('Employee List');
  });

  it('should display EmployeeAdd tab', () => {
    page.navigateTo('/');
    expect(page.getEmployeeAddTab().getText()).toEqual('Add Employee');
  });

  it('should display EmployeeList tab', () => {
    page.navigateTo('/');
    expect(page.getSignUpTab().getText()).toEqual('Sign Up');
  });

  it('should display EmployeeList tab', () => {
    page.navigateTo('/');
    expect(page.getSignInTab().getText()).toEqual('Sign In');
  });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});
