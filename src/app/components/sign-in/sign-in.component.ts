import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  email:string;
  password: string;
  constructor(public authService: AuthService) { }

  ngOnInit(): void {
  }
  
  login(){
    this.authService.login(this.email, this.password);
    this.email="";
    this.password="";
  }
}
