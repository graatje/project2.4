import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { AuthService } from '../_services/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-loginscreen',
  templateUrl: './loginscreen.component.html',
  styleUrls: ['./loginscreen.component.css']
})
export class LoginscreenComponent implements OnInit {

  usernameField?: string;
  passwordField?: string;
  loginForm = this.formBuilder.group({
    username: '',
    password: ''
  });

  constructor(private formBuilder: FormBuilder,
              private authService: AuthService,
              private router: Router
    ) { }

  ngOnInit(): void {
  }

  onLogin(): void {
    // do stuff to check if username/password combination is correct. get jwt if it is.
    this.authService.login(this.loginForm.value.username, this.loginForm.value.password)
    .subscribe(
      data => {
        this.router.navigate(['plattegrond']);
      },
      error => {
        alert(error.error.message);
      }
    );
  }
}
