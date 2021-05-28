import { Component, OnInit } from '@angular/core';
import { FormBuilder }  from '@angular/forms';
import { AuthService } from '../_services/auth.service';
import { TokenStorageService } from '../_services/tokenservice';

@Component({
  selector: 'app-loginscreen',
  templateUrl: './loginscreen.component.html',
  styleUrls: ['./loginscreen.component.css']
})
export class LoginscreenComponent implements OnInit {

  usernameField?:string;
  passwordField?:string;
  loginForm = this.formBuilder.group({
    username: '',
    password: ''
  });

  constructor(private formBuilder: FormBuilder,
    private authService: AuthService,
    private tokenStorage: TokenStorageService
    ) { }

  ngOnInit(): void {
    if(this.authService.isLoggedIn()){
      window.location.replace(window.location.origin + "/plattegrond");
    }
    
  }

  onLogin():void {
    // do stuff to check if username/password combination is correct. get jwt if it is.
    this.authService.login(this.loginForm.value["username"], this.loginForm.value["password"])
    .subscribe(
      data => {
        
        console.log("message: " + data.message);
        this.tokenStorage.saveToken(data.token);
        this.tokenStorage.saveUser(data);
        console.log("before:");
        console.log(data);
        console.log("after");
        window.location.reload();
      },
      error => {
        alert(error.error.message);
      }
    );
  }
}
