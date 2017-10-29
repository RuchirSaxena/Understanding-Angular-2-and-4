import { Component } from '@angular/core';
import { FormGroup, FormControl,Validators } from '@angular/forms';
@Component({
  selector: 'signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css']
})
export class SignupFormComponent {
  form=new FormGroup({
    username:new FormControl('',[
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(10)
    ]),
    password:new FormControl('',Validators.required)
  });

  //Further we can create below property to acess from properties in component.html
  get Username(){
    return this.form.controls.username;
  }
}
