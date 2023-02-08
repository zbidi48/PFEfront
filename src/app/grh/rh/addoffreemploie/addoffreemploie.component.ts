import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {OffreemploieService} from "../../services/offreemploie.service";
import {HttpErrorResponse, HttpResponse} from "@angular/common/http";
import {IMessageReponse} from "../../models/messageReponse.model";
import {Router} from "@angular/router";

@Component({
  selector: 'app-addoffreemploie',
  templateUrl: './addoffreemploie.component.html',
  styleUrls: ['./addoffreemploie.component.scss']
})
export class AddoffreemploieComponent implements OnInit {
 offreemplform: FormGroup = this.fb.group({
   titredoffre: ['',Validators.required],
   datelimite: [ Validators.required],
   description: ['', Validators.required],
   langue: ['', Validators.required],
   experience: ['', Validators.required],
   exigenceemploie:['',Validators.required]


  })
  constructor(private fb: FormBuilder,private offreemploieservice:OffreemploieService,
              private  router:Router) { }

  ngOnInit(): void {
  }

  formSubmitted:boolean=false;
  message="Ajout avec success!";
  showMsg:boolean = false;
  has_error:boolean = false;
  error_message:string ='';
  addoffre():void
  {
    this.offreemploieservice.addoffre(this.offreemplform.value).subscribe((value:HttpResponse<IMessageReponse>) => {
      this.showMsg = true;
      this.offreemplform.reset(true);
      this.router.navigateByUrl("/rh/offreemploie");



    },(error: HttpErrorResponse)=>{
      this.showMsg = false;
      this.has_error = true;
      this.error_message = error.message
    })
  }

}
