import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {FormationService} from "../../services/formation.service";
import {ActivatedRoute, Router} from "@angular/router";
import {IFormation} from "../../models/IFormation.model";

@Component({
  selector: 'app-editformation',
  templateUrl: './editformation.component.html',
  styleUrls: ['./editformation.component.scss']
})
export class EditformationComponent implements OnInit {

    maformationform: FormGroup = this.fb.group({
      nomdeforamtion: ['', Validators.required],
      typedeformation: ['', Validators.required],

  })
  constructor( private fb:FormBuilder,
               private formationservice:FormationService,
               private path:ActivatedRoute,
               private router:Router) { }

  ngOnInit(): void {
      this.getformationdata()
  }
editformation()
{


  const id=this.path.snapshot.params.id;
  this.formationservice.updateformation(this.maformationform.value,id).subscribe((data:any)=>{
    this.router.navigate(['/rh/formation'])
  });

}
   getformationdata():void
   {
     const id=this.path.snapshot.data.params.id;
     this.formationservice.getformationid(id).subscribe((data:any)=> {
       this.maformationform.setValue({
         nomdeforamtion:data.nomdeforamtion,
         typedeformation:data.typedeformation

       })
     })

   }

}
