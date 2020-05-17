import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo(path: string): Promise<unknown> {
    return browser.get(path) as Promise<unknown>;
  }

  getTitleText(): Promise<string> {
    return element(by.css('app-root nav .navbar-brand')).getText() as Promise<string>;
  }

  getEmployeeListTab(){
    return element(by.css('.nav-item [routerlink="employees"]'));
  }

  getEmployeeAddTab(){
    return element(by.css('[routerlink="add-employee"]'));
  }

  getSignUpTab(){
    return element(by.css('[routerlink="sign-up"]'));
  }

  getSignInTab(){
    return element(by.css('[routerlink="sign-in"]'));
  }
}
