import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  title = "Employee Maintenance App";
  // isLoggedIn: Boolean = false;
  constructor(public authService: AuthService) { }

  ngOnInit(): void {
   
  }
  
  ngOnChange(abc): void{
    console.log('abc------------', abc)
  }
  
  logOut(){
    this.authService.logOut();
  }
  

}
