import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {PresenceService} from "../../services/presence.service";
import {IPresence} from "../../models/IPresence.model";
import {IEmployee} from "../../models/IEmployee.model";
import {EmployeeService} from "../../services/employee.service";
import {HttpErrorResponse} from "@angular/common/http";
import {StorageService} from "../../services/storage.service";



@Component({
  selector: 'app-addpresence',
  templateUrl: './addpresence.component.html',
  styleUrls: ['./addpresence.component.scss']
})
export class AddpresenceComponent implements OnInit {
  presences:IPresence[]=[];
  employees:IEmployee[]=[];
 presenceform: FormGroup = this.fb.group({

   nbreheure: ['', Validators.required],
    date:['',Validators.required],
    user_id:[this.storageService.getId(),Validators.required]
 })

  formSubmitted:boolean=false;
  message="Ajout avec success!";
  showMsg:boolean = false;
  has_error:boolean = false;
  error_message:string ='';
  constructor(private fb: FormBuilder,
              private presenceservice:PresenceService,
              private employeeservice:EmployeeService,
              private storageService: StorageService) { }

  ngOnInit(): void {


  }
  ajouterpresence(): void {
    //console.log(this.presenceform.value)

    this.formSubmitted = true;
    console.log(this.presenceform.value)
    if (this.presenceform.valid) {
      this.presenceservice.addpresence(this.presenceform.value).subscribe( data=>
          {
            console.log(data.body)
            this.showMsg = true;
            this.presenceform.reset(true);



          },(error: HttpErrorResponse)=>{
            this.showMsg = false;
            this.has_error = true;
            this.error_message = error.message

      })
    }


  }


}
