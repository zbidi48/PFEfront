import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {IEntretient} from "../../models/IEntretient.model";
import {ICondidat} from "../../models/ICondidat.model";

@Component({
  selector: 'app-addentretient',
  templateUrl: './addentretient.component.html',
  styleUrls: ['./addentretient.component.scss']
})
export class AddentretientComponent implements OnInit {

 candidats:ICondidat[]=[];
 entretientform: FormGroup = this.fb.group({

   date: ['', Validators.required],
   heure: ['', Validators.required],
   condidats_id: ['', Validators.required],

  })
  formSubmitted: boolean = false;
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }
  ajouterentretient(): void {
    //console.log(this.entretientform.value);
    /*
    this.formSubmitted = true;
    if (this.entretientform.valid) {

    }
     */

  }

}
