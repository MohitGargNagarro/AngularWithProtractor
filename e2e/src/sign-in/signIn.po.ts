import { by, element } from 'protractor';

export class SignInPage {

  getTitle() {
    return element(by.css('.card-header'));
  }

  getEmailInput() {
    return element(by.name('email'));
  }

  getPasswordInput() {
    return element(by.name('password'));
  }

  getLoginButton() {
    return element(by.css('.btn-primary'));
  }
}
