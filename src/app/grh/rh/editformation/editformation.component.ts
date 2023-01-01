import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {FormationService} from "../../services/formation.service";
import {ActivatedRoute, Router} from "@angular/router";
import {IFormation} from "../../models/IFormation.model";
import {HttpErrorResponse, HttpResponse} from "@angular/common/http";
import {IMessageReponse} from "../../models/messageReponse.model";

@Component({
  selector: 'app-editformation',
  templateUrl: './editformation.component.html',
  styleUrls: ['./editformation.component.scss']
})
export class EditformationComponent implements OnInit {

    maformationform: FormGroup = this.fb.group({
      nomdeforamtion: ['', Validators.required],
      typedeformation: ['', Validators.required],
      datedebut:[ Validators.required],
      heure:['', Validators.required],


    })
  constructor( private fb:FormBuilder,
               private formationservice:FormationService,
               private path:ActivatedRoute,
               private router:Router) { }

  ngOnInit(): void {
      this.getformationdata()
  }
  formSubmitted:boolean=false;
  message="mise a jour avec success!";
  showMsg:boolean = false;
  has_error:boolean = false;
  error_message:string ='';
editformation()
{
  this.formSubmitted=true;
  //const id=this.path.snapshot.params.id;
   if(this.maformationform.valid)
   {
     {
       this.formationservice.updateformation(this.maformationform.value,this.path.snapshot.params.id).
       subscribe((data:HttpResponse<IMessageReponse>)=>{
         this.showMsg=true;
         this.router.navigate(['/rh/formation'])
       },(error: HttpErrorResponse)=>{
         this.showMsg = false;
         this.has_error = true;
         this.error_message = error.message
       });
     }
   }


}
   getformationdata():void
   {

     this.formationservice.getformationid(this.path.snapshot.params.id)
       .subscribe((data:HttpResponse<IFormation>)=> {
       this.maformationform.setValue({
         nomdeforamtion:data.body.nomdeforamtion,
         typedeformation:data.body.typedeformation,
         datedebut:data.body.datedebut,
         heure:data.body.heure

       })
     })

   }

}
