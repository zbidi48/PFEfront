import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-addentretient',
  templateUrl: './addentretient.component.html',
  styleUrls: ['./addentretient.component.scss']
})
export class AddentretientComponent implements OnInit {
 entretientform: FormGroup = this.fb.group({
   nometprenomdecondidat: ['', Validators.required],
    date: ['', Validators.required],
   heure: ['', Validators.required],
   compétence: ['', Validators.required],
   equipemanager: ['', Validators.required],
   validepar: ['', Validators.required],

  })
  formSubmitted: boolean = false;
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }
  ajouterentretient(): void {
    this.formSubmitted = true;
    if (this.entretientform.valid) {
      console.log(this.entretientform.value);
    }

  }

}
