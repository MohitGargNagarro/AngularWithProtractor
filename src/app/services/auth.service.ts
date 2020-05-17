import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from "@angular/router"

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isLoggedIn: Boolean = false;
  
  constructor(
    public afAuth: AngularFireAuth,
    public router: Router
  ) { }

  signup(email: string, password: string) {
    this.afAuth.createUserWithEmailAndPassword(email, password).then(value => {
      console.log('Success!!');
      this.isLoggedIn = true;
      this.router.navigate(['employees'])
    }).catch(error => console.log('something went wrong', error.message))
  }
  login(email: string, password: string) {
    this.afAuth.signInWithEmailAndPassword(email, password).then(value => {
      console.log('Success!!');
      this.isLoggedIn = true;
      this.router.navigate(['employees'])
    }).catch(error => console.log('something went wrong', error.message))
  }

  logOut() {
    this.isLoggedIn = false;
    this.afAuth.signOut();
  }
}
