import { Component, OnInit } from '@angular/core';
import {VisaService} from "../../services/visa.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {StorageService} from "../../services/storage.service";
import {HttpErrorResponse, HttpResponse} from "@angular/common/http";
import {IMessageReponse} from "../../models/messageReponse.model";

@Component({
  selector: 'app-addvisa',
  templateUrl: './addvisa.component.html',
  styleUrls: ['./addvisa.component.scss']
})
export class AddvisaComponent implements OnInit {
  visaaddform: FormGroup = this.fb.group({
    typevisa:['',Validators.required],
    employee_id:[this.storageservice.getId(),Validators.required]
  })
  constructor(private visaservice:VisaService
              ,private fb:FormBuilder
              ,private storageservice:StorageService) { }
  formSubmitted:boolean=false;
  message="Ajout avec success!";
  showMsg:boolean = false;
  has_error:boolean = false;
  error_message:string ='';
  ngOnInit(): void {
  }
  addvisa()
  {
    this.formSubmitted = true;
    if (this.visaaddform.valid)
    {
      this.visaservice.addvisa(this.visaaddform.value).subscribe((value:HttpResponse<IMessageReponse>) => {
        this.showMsg = true;
        this.visaaddform.reset(true)
      },(error: HttpErrorResponse)=>{
      this.showMsg = false;
      this.has_error = true;
      this.error_message = error.message

    })
    }

  }

}
