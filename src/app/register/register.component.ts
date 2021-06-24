import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  usernameField?: string;
  passwordField?: string;
  confirmPasswordField?: string;
  registerForm = this.formBuilder.group({
    username: '',
    password: '',
    confirmPassword: '',
  });
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
  }
  private isValid(){
    // check if a field is empty. return if it is.
    let successForm = this.formBuilder.group({
      success: false,
      message: ""
    })
    let isEmpty = false;
    Object.keys(this.registerForm.controls).forEach(key => {
      console.log(key);
      if(this.registerForm.get(key)?.value === "")
      {
        isEmpty = true;
      }
    });
    if(isEmpty){
      successForm.setValue({success: false, message: "please fill in all fields!" })
      return successForm;
    }

    if(this.registerForm.value.password !== this.registerForm.value.confirmPassword){
      this.registerForm.reset({  // reset the fields except for username field.
        username: this.registerForm.get("username")?.value
      });
      successForm.setValue({success: false, message: "password and password confirmation don't match!" })
      return successForm;
    }
    successForm.setValue({success: true, message: "registering successfull" })
    return successForm;
  }
  onRegister(): void{
    let valid = this.isValid();
    console.log(valid.value.success);  // when true, register.
    alert(valid.value.message);
    
  }
}
