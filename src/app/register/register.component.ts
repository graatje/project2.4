import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  usernameField?: string;
  passwordField?: string;
  emailField?: string;
  confirmPasswordField?: string;
  registerForm = this.formBuilder.group({
    username: '',
    email:'',
    password: '',
    confirmPassword: '',
  });
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
  }

  private isValid(): FormGroup{
    // @todo check if username already in database.
    let empty = this.emptyCheck();
    if(!empty.value.success){ return empty; }

    let email = this.emailValid(this.registerForm.get("email")?.value);
    if(!email.value.success){ return email; }

    let passwordsMatch = this.passwordsMatching(this.registerForm.value.password, this.registerForm.value.confirmPassword);
    if(!passwordsMatch.value.success){
      this.registerForm.reset({  // reset the fields except for username field.
        username: this.registerForm.get("username")?.value
      });
      return passwordsMatch;
    }

    return this.formBuilder.group({
      success: true,
      message: "registering successful!"
    });
  }

  private emptyCheck(): FormGroup{
    
    let isEmpty = false;
    Object.keys(this.registerForm.controls).forEach(key => {
      if(this.registerForm.get(key)?.value === "")
      {
        isEmpty = true;
      }
    });
    return this.formBuilder.group({
      success: !isEmpty,
      message: "Please fill in all fields!"
    })
  }

  onRegister(): void{
    let valid = this.isValid();
    console.log(valid.value.success);  // when true, register.
    alert(valid.value.message);
    

  }

  private passwordsMatching(password: string, passwordconfirm:string): FormGroup{
    return this.formBuilder.group({
      success: password === passwordconfirm,
      message: "password and passwordconfirmation don't match!"
    })
  }
  private emailValid(email: string): FormGroup{
    // @todo check if email already in database.
    let regexp = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
    let match = email.match(regexp);
    let valid = false;
    if(match !== null){
      valid = true;
    }
    return this.formBuilder.group({
      success: valid,
      message: "please fill in a valid e-mail address!"
    })
  }
}
