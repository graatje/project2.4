import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AuthService } from '../_services/auth.service';

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
  constructor(private formBuilder: FormBuilder,
    private authService: AuthService) { }

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
      message: "succesvol geregistreerd!!"
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
    
    if(valid.value.success){
      this.authService.register(this.registerForm.get("username")?.value, this.registerForm.get("password")?.value, 
      this.registerForm.get("email")?.value).subscribe(
        data => {
          alert(data.message);
          this.registerForm.reset(); 
        },
        error => {
          alert(error.error.message);
        }
      ); 
    }else{
      alert(valid.value.message);
    }
    
  }

  private passwordsMatching(password: string, passwordconfirm:string): FormGroup{
    return this.formBuilder.group({
      success: password === passwordconfirm,
      message: "wachtwoord en wachtwoordbevestiging komen niet overeen!!"
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
      message: "graag een geldige e-mail invullen!"
    })
  }
}
