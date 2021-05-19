import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-loginscreen',
  templateUrl: './loginscreen.component.html',
  styleUrls: ['./loginscreen.component.css']
})
export class LoginscreenComponent implements OnInit {

  usernameField?:string;
  passwordField?:string;

  constructor() { }

  ngOnInit(): void {
  }

}
