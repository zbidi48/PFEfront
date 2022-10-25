import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {FormationService} from "../../services/formation.service";
import {error} from "protractor";

@Component({
  selector: 'app-addformation',
  templateUrl: './addformation.component.html',
  styleUrls: ['./addformation.component.scss']
})
export class AddformationComponent implements OnInit {
  formationform: FormGroup = this.fb.group({
    nomdeforamtion: ['', Validators.required],
    typedeformation: ['', Validators.required],

  })
  formSubmitted: boolean = false;
  message="Ajout avec success!";
  showMsg:boolean = false;
  constructor(private fb: FormBuilder,private formationService:FormationService) { }

  ngOnInit(): void {

  }
  ajouterformation(): void {
    this.formSubmitted = true;
    console.log(this.formationform.value);
    if (this.formationform.valid) {
      //console.log(this.formationform.value);
       this.formationService.addformation(this.formationform.value).subscribe(res => {
         console.log(res.body.message);
         this.showMsg = true;
         this.formationform.reset(true);

       })

    }

  }


}
