import { AppPage } from '../app.po';
import { SignInPage } from './signIn.po';
import { browser, logging } from 'protractor';

describe('angular-with-protractor App', () => {
  let page: AppPage;
  let signInPage: SignInPage;

  beforeEach(() => {
    page = new AppPage();
    signInPage = new SignInPage();
    browser.driver.manage().window().maximize();
  });

  it('should display Login page', () => {
    page.navigateTo('sign-in');
    expect(signInPage.getTitle().getText()).toEqual('Login');
  });
  
  it('should display email Input text, check with it\'s placeholder', () => {
    page.navigateTo('sign-in');
    expect(signInPage.getEmailInput().getAttribute('placeholder')).toEqual('Email');
  });

  it('should display password Input text, check with it\'s placeholder', () => {
    page.navigateTo('sign-in');
    expect(signInPage.getPasswordInput().getAttribute('placeholder')).toEqual('Password');
  });

  it('should display Login button', () => {
    page.navigateTo('sign-in');
    expect(signInPage.getLoginButton().getText()).toEqual('Login');
  });

  it('set value in email Input text', () => {
    page.navigateTo('sign-in');
    expect(signInPage.getEmailInput().sendKeys("1@gmail.com"));
  });

  it('set value in pasword Input text', () => {
    page.navigateTo('sign-in');
    expect(signInPage.getPasswordInput().sendKeys("123456"));
  });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});
