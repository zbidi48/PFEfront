import { Component, OnInit } from '@angular/core';
import {FormationService} from "../../services/formation.service";
import {IFormation} from "../../models/IFormation.model";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-formation',
  templateUrl: './formation.component.html',
  styleUrls: ['./formation.component.scss']
})
export class FormationComponent implements OnInit {
  formations:IFormation[] =[];
 cherchform: FormGroup = this.fb.group({

   typedeformation: ['', Validators.required]

  })

  constructor( private formationservice:FormationService,private fb: FormBuilder) { }


  ngOnInit(): void {
    this.getformation();
    //this.data=this.cherchform.value
  }
  //data;
  getformation()
  {
   this.formationservice.getformations().subscribe((value:any) => {
     this.formations = value.body
   }, (err) => {
     alert(('eurreure'));
   })
  }
  deleteformation(id)
  {
    if (confirm('vous ete sure d efface' + id + '!!'))
    {
      this.formationservice.deleteformation(id).subscribe(value => {
        this.getformation()
        }

      )
    }
  }
 search()
 {
   //console.log(this.cherchform.value.typedeformation)


   this.formationservice.chercherformation(this.cherchform.value.typedeformation).subscribe((donn:any) => {
     this.formations=donn.body
   })

 }


}
