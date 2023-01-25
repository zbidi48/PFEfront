import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {IEntretient} from "../../models/IEntretient.model";
import {ICondidat} from "../../models/ICondidat.model";
import {EntretientService} from "../../services/entretient.service";
import {CondidatService} from "../../services/condidat.service";
import {HttpResponse} from "@angular/common/http";
import Swal from "sweetalert2";
import {IMessageReponse} from "../../models/messageReponse.model";
import {ActivatedRoute, Router} from "@angular/router";

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
   inscritoffre_id: ['', Validators.required],

  })

  constructor(private fb: FormBuilder,
              private entretientservice:EntretientService,
              private candidatservice:CondidatService,
              private path:ActivatedRoute,
              private  router:Router) { }
  formSubmitted: boolean = false;
 ngOnInit(): void {
    this.candidatservice.getcondidat().subscribe((value:HttpResponse<ICondidat[]>) => {
      this.candidats=value.body
    })
  }
  ajouterentretient(): void {
  /*  Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'entreteint ajouter avec succée!',
      showConfirmButton: false,
      timer: 1500
    })*/
    this.entretientaddform.controls['inscritoffre_id'].setValue(this.path.snapshot.params.id);
    console.log(this.entretientaddform.value);
    this.formSubmitted = true;
    if (this.entretientaddform.valid) {

      this.entretientservice.addentretient(this.entretientaddform.value).
      subscribe((value:HttpResponse<IMessageReponse>) => {
        this.router.navigateByUrl("/rh/entretient");

        }
      )
    }


  }

}
