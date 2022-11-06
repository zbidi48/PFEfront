import { Component, OnInit } from '@angular/core';
import {MailingService} from "../../services/mailing.service";
import {CondidatService} from "../../services/condidat.service";
import {ActivatedRoute} from "@angular/router";
import {HttpErrorResponse, HttpResponse} from "@angular/common/http";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ICondidat} from "../../models/ICondidat.model";

@Component({
  selector: 'app-sendmail',
  templateUrl: './sendmail.component.html',
  styleUrls: ['./sendmail.component.scss']
})
export class SendmailComponent implements OnInit {
  candidats:ICondidat[]=[];
  mailaccepform: FormGroup = this.fb.group({

    to: ['', Validators.required]

  })
  formSubmitted:boolean=false;
  message="message envoye avec  success!";
  showMsg:boolean = false;
  has_error:boolean = false;
  error_message:string ='';
  constructor(private fb: FormBuilder,
              private path:ActivatedRoute,
              private mailservice:MailingService,
              private  condidatservice:CondidatService) { }

  ngOnInit(): void {
    this.getcondidat()
  }
  sendaccepmail():void
  {
        if(this.mailaccepform.value)
        {
          this.mailservice.sendsucce(this.path.snapshot.params.id).
    subscribe((value:HttpResponse<string>) => {
      this.mailaccepform.reset(true)
    },(error: HttpErrorResponse)=>{
          this.showMsg = false;
          this.has_error = true;
          this.error_message = error.message
    })
        }}
  getcondidat():void
  {
    this.condidatservice.getcondidat().subscribe((value:HttpResponse<ICondidat[]>) => {
      this.candidats=value.body

    })
  }

}
