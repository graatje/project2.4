import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../_services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private authService : AuthService,
    private router : Router) { }

  ngOnInit(): void {
    if (this.authService.isLoggedIn()){
      this.router.navigate(['plattegrond']);
    }
  }

}
