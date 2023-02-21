import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {NotedefraieService} from "../../services/notedefraie.service";
import {ActivatedRoute, Router} from "@angular/router";
import {CongeService} from "../../services/conge.service";
import {HttpErrorResponse, HttpResponse} from "@angular/common/http";
import {IConge} from "../../models/IConge.model";
import {IMessageReponse} from "../../models/messageReponse.model";

@Component({
  selector: 'app-editconge',
  templateUrl: './editconge.component.html',
  styleUrls: ['./editconge.component.scss']
})
export class EditcongeComponent implements OnInit {
  updateconge: FormGroup = this.fb.group({
    datedebut:['',Validators.required],
    datefin: ['', Validators.required],
    typeConge:['',Validators.required]
  })
  formSubmitted:boolean=false;
  message="mise ajour avec success!";
  showMsg:boolean = false;
  has_error:boolean = false;
  error_message:string ='';
  constructor(private congeservice:CongeService,
              private fb:FormBuilder,
              private path:ActivatedRoute,
              private router:Router) { }

  ngOnInit(): void {
    this.getcongebyid()
  }
getcongebyid():void
{
 this.congeservice.Detailconge(this.path.snapshot.params.id).subscribe(
   (value:HttpResponse<IConge>) => {
     this.updateconge.setValue(
       {
         datedebut:value.body.datedebut,
         datefin:value.body.datefin,
         typeConge:value.body.typeConge
       }
     )
   }
 )
}
editcongee():void
{
  if (this.updateconge.valid)
  {
    this.congeservice.updateconge(this.path.snapshot.params.id,this.updateconge.value).subscribe(
      (value:HttpResponse<IMessageReponse>) => {
        this.showMsg = true;
        this.router.navigate(['/espaceemployee/congeemployee'])
      },(error:HttpErrorResponse)=>{
        this.showMsg = false;
        this.has_error = true;
        this.error_message = error.message
      }
    )
  }
}
}
