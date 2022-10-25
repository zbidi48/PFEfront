import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {OffreemploieService} from "../../services/offreemploie.service";

@Component({
  selector: 'app-addoffreemploie',
  templateUrl: './addoffreemploie.component.html',
  styleUrls: ['./addoffreemploie.component.scss']
})
export class AddoffreemploieComponent implements OnInit {
 offreemplform: FormGroup = this.fb.group({
   titredoffre: ['',Validators.required],
   datelimite: ['', Validators.required],
   description: ['', Validators.required],
   langue: ['', Validators.required],
   experience: ['', Validators.required],
   exigenceemploie:['',Validators.required]


  })
  constructor(private fb: FormBuilder,private offreemploieservice:OffreemploieService) { }

  ngOnInit(): void {
  }

  message="Ajout avec success!";
  showMsg:boolean = false;
  addoffre():void
  {
    this.offreemploieservice.addoffre(this.offreemplform.value).subscribe(value => {
      this.showMsg = true;
      this.offreemplform.reset(true);


    })
  }

}
