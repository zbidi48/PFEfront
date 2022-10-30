import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {CongeService} from "../../services/conge.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-accordconge',
  templateUrl: './accordconge.component.html',
  styleUrls: ['./accordconge.component.scss']
})
export class AccordcongeComponent implements OnInit {
  satuscongeform: FormGroup = this.fb.group({
    statusConge:[Validators.required]
  })
  constructor(private fb:FormBuilder,
              private congeservice:CongeService,
              private path:ActivatedRoute,
              private router:Router) { }

  ngOnInit(): void {

  }
 accordconge():void
 {
   //console.log(this.satuscongeform.value)

   const id=this.path.snapshot.params.id;
   //console.log(id);
   this.congeservice.statusconge(this.satuscongeform.value,id).subscribe((value:any) => {
     this.router.navigate(['/rh/conge'])

   })

 }



}
