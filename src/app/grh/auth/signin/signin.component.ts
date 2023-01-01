import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../../services/auth.service";
import {Router} from "@angular/router";
import {StorageService} from "../../services/storage.service";

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {
   signinForm: FormGroup;
  constructor(private fb: FormBuilder,
              private authservice: AuthService,
              private router: Router,
              private storageService: StorageService) { }

  ngOnInit(): void {
    this.createSigninForm();
  }
  private createSigninForm() {
    this.signinForm = this.fb.group({
      email: ['ahmed.zbidi1@esprit.tn', Validators.required],
      password:  ['1759848', Validators.required]
    })
  }
   onLogin() {
     this.authservice.login(this.signinForm.value).subscribe(res => {
      localStorage.setItem("authority", res.body.roles[0]);
       this.storageService.saveToken(res.body.token);
       this.storageService.saveEmail(res.body.email);
       this.storageService.saveId(res.body.id);
       this.storageService.getEmail();

       //console.log(res.body.roles[0])
       if(res.body.roles[0] ==="ROLE_Employee"){
         // this.router.navigateByUrl(""); espace employee
         this.router.navigateByUrl("/espaceemployee/congeemployee")
       }else if(res.body.roles[0] ==="ROLE_serviceRH") {
         this.router.navigateByUrl("/rh/visa");
         //this.router.navigateByUrl("")
       }else
       {
         this.router.navigateByUrl("/espacecondidat/offreemploie")
       }


     }, error => {
       console.log(error)
     })
   }


}
