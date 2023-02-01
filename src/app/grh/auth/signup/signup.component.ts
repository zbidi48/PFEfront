import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../../services/auth.service";
import Swal from 'sweetalert2'
import {HttpErrorResponse, HttpResponse} from "@angular/common/http";
import {IMessageReponse} from "../../models/messageReponse.model";

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  signupForm: FormGroup;
  msg:string = '';

  constructor(private fb: FormBuilder, private authservice: AuthService) { }

  ngOnInit(): void {
    this.createSignupForm();
  }
  private createSignupForm() {
    this.signupForm = this.fb.group({
      email: ['', Validators.required],
      password:['', Validators.required],
      nom:['', Validators.required],
      prenom:['', Validators.required],
      post:['', Validators.required],
      dateOfBirth:['', Validators.required],
      phone:['', Validators.required],
      adresse:['', Validators.required],
      ville:['', Validators.required],
      nationality:['', Validators.required],
      niveauEtud:['', Validators.required],
      titreDiplome:['', Validators.required],
      university:['', Validators.required],
      niveauExp:['', Validators.required],
      experience:['', Validators.required],
      cin:['', Validators.required],
      competences:['', Validators.required]
    })
  }
  onregister(){
    Swal.fire({
      title:'Êtes-vous sûr de crier vortre compte?',
      showCancelButton:true,
      confirmButtonText: 'ok',
    }).then((result) =>{
      if(result.isConfirmed) {
        this.authservice.register(this.signupForm.value).subscribe({
          next:(msg:HttpResponse<IMessageReponse>)=> this.msg=msg.body.message,
          error:(err:HttpErrorResponse) => {
            this.signupForm.reset(true)
            //Swal.fire('erreur ','','error')
            this.msg = ''
          },
          complete:() => {
            Swal.fire(this.msg,'','success')

          }
        })

      }
    })

  }

}
