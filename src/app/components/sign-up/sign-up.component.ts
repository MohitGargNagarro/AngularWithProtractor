import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  email: string;
  password: string;
  constructor(public authSerivce: AuthService) { }

  ngOnInit(): void {
  }

  signUp(){
    this.authSerivce.signup(this.email, this.password);
    this.email="";
    this.password="";
  }

}
