import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../../services/auth.service";

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  signupForm: FormGroup;

  constructor(private fb: FormBuilder, private authservice: AuthService) { }

  ngOnInit(): void {
    this.createSignupForm();
  }
  private createSignupForm() {
    this.signupForm = this.fb.group({
      email: ['', Validators.required],
      password:  ['', Validators.required]
    })
  }
  onregister(){
console.log("succe de signup",this.signupForm.value)
  }

}
