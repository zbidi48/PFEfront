import { Component, OnInit } from '@angular/core';
import {NotedefraieService} from "../../services/notedefraie.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {HttpErrorResponse, HttpResponse} from "@angular/common/http";
import {IMessageReponse} from "../../models/messageReponse.model";
import {INotedefraie} from "../../models/INotedefraie.model";

@Component({
  selector: 'app-editnotedefraie',
  templateUrl: './editnotedefraie.component.html',
  styleUrls: ['./editnotedefraie.component.scss']
})
export class EditnotedefraieComponent implements OnInit {
  updatenotedefraieform: FormGroup = this.fb.group({
    description:['',Validators.required],
    fraie: ['', Validators.required],



  })
  constructor(private notedefraieservice:NotedefraieService,
              private fb:FormBuilder,
              private path:ActivatedRoute,
              private router:Router) { }
  formSubmitted:boolean=false;
  message="mise ajour avec success!";
  showMsg:boolean = false;
  has_error:boolean = false;
  error_message:string ='';

  ngOnInit(): void {
    this.getnotedefraiebyid()
  }
  editnotedefraie():void
  {
    this.formSubmitted = true;
    if (this.updatenotedefraieform.valid)
    {

    this.notedefraieservice.updatenotedefraie(this.path.snapshot.params.id,this.updatenotedefraieform.value)
      .subscribe((value:HttpResponse<IMessageReponse>) => {
        this.router.navigate(['/espaceemployee/notedefraie'])
        this.showMsg = true;
      },(error: HttpErrorResponse)=>{
        this.showMsg = false;
        this.has_error = true;
        this.error_message = error.message
      }
      )
    }

  }
  getnotedefraiebyid():void
  {
    this.notedefraieservice.detailnotedefraie(this.path.snapshot.params.id).
    subscribe((value:HttpResponse<INotedefraie>) =>
    {
      this.updatenotedefraieform.setValue(
        {
          description:value.body.description,
          fraie:value.body.fraie

        }
      )
    })
  }

}
