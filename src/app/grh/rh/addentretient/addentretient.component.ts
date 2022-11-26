import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {IEntretient} from "../../models/IEntretient.model";
import {ICondidat} from "../../models/ICondidat.model";
import {EntretientService} from "../../services/entretient.service";
import {CondidatService} from "../../services/condidat.service";
import {HttpResponse} from "@angular/common/http";
import Swal from "sweetalert2";
import {IMessageReponse} from "../../models/messageReponse.model";

@Component({
  selector: 'app-addentretient',
  templateUrl: './addentretient.component.html',
  styleUrls: ['./addentretient.component.scss']
})
export class AddentretientComponent implements OnInit {

 candidats:ICondidat[]=[];
 entretientaddform: FormGroup = this.fb.group({

   date: [ Validators.required],
   heure: ['', Validators.required],
   condidats_id: ['', Validators.required],

  })

  constructor(private fb: FormBuilder,
              private entretientservice:EntretientService,
              private candidatservice:CondidatService) { }
  formSubmitted: boolean = false;
 ngOnInit(): void {
    this.candidatservice.getcondidat().subscribe((value:HttpResponse<ICondidat[]>) => {
      this.candidats=value.body
    })
  }
  ajouterentretient(): void {
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'entreteint ajouter avec succée!',
      showConfirmButton: false,
      timer: 1500
    })

    this.formSubmitted = true;
    if (this.entretientaddform.valid) {
      //console.log(this.entretientaddform.value);
      this.entretientservice.addentretient(this.entretientaddform.value).
      subscribe((value:HttpResponse<IMessageReponse>) => {
        this.entretientaddform.reset(true)


        }
      )
    }


  }

}
