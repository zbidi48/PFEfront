import { Component, OnInit } from '@angular/core';
import {ICondidat} from "../../models/ICondidat.model";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute} from "@angular/router";
import {MailingService} from "../../services/mailing.service";
import {CondidatService} from "../../services/condidat.service";
import {HttpErrorResponse, HttpResponse} from "@angular/common/http";

@Component({
  selector: 'app-sendmailrefus',
  templateUrl: './sendmailrefus.component.html',
  styleUrls: ['./sendmailrefus.component.scss']
})
export class SendmailrefusComponent implements OnInit {
  candidats:ICondidat[]=[];
  mailrefusform: FormGroup = this.fb.group({

    to: ['', Validators.required]

  })
  constructor(private fb: FormBuilder,
              private path:ActivatedRoute,
              private mailservice:MailingService,
              private  condidatservice:CondidatService) { }

  ngOnInit(): void {
    this.getcondidat()
  }
  message="message envoye avec  success!";
  showMsg:boolean = false;
  has_error:boolean = false;
  error_message:string ='';
  getcondidat():void
  {
    this.condidatservice.getcondidat().subscribe((value:HttpResponse<ICondidat[]>) => {
      this.candidats=value.body

    })
  }
  sendrefusepmail():void
  {
    if(this.mailrefusform.value)
    {
      this.mailservice.sendfailed(this.path.snapshot.params.id).
      subscribe((value:HttpResponse<string>) => {
        this.mailrefusform.reset(true)
      },(error: HttpErrorResponse)=>{
        this.showMsg = false;
        this.has_error = true;
        this.error_message = error.message
      })
    }}


}
