import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../_services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private auth_service:AuthService, private router:Router) { }

  ngOnInit(): void {
  }

  isLoggedIn(): boolean{
    return this.auth_service.isLoggedIn();
  }

  logout(){
    this.auth_service.logout();
    this.router.navigate(['home']);
  }
}
