import { TestBed } from '@angular/core/testing';

import { AuthService } from './auth.service';

describe('AuthService', () => {
  let service: AuthService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthService);
  });


  it('should set isLoggedIn to be true on signUp', () => {
    service.signup("1@gmail.com", "123456");
    expect(service.isLoggedIn).toBeTruthy();
  });
  
  it('should set isLoggedIn to be true on signUpfor already created user', () => {
    service.signup("1@gmail.com", "123");
    expect(service.isLoggedIn).toBeFalsy();
  });

  it('should set isLoggedIn to be true on login', () => {
    service.login("1@gmail.com", "123456");
    expect(service.isLoggedIn).toBeTruthy();
  });

  it('should set isLoggedIn to be false on login for wrong credentials', () => {
    service.login("1@gmail.com", "123456789");
    expect(service.isLoggedIn).toBeFalsy();
  });

  it('should set isLoggedIn to be false on logout', () => {
    service.logOut();
    expect(service.isLoggedIn).toBeFalsy();
  });

});
