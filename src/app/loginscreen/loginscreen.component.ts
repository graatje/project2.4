import { Component, OnInit } from '@angular/core';
import { FormBuilder }  from '@angular/forms';


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

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
  }

  onLogin():void {
    console.log("username: " + this.loginForm.value["username"]);
    console.log("password: " + this.loginForm.value["password"]);
    // do stuff to check if username/password combination is correct. get jwt if it is.
  }
}
