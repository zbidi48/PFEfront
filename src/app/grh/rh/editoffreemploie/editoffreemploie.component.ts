import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {OffreemploieService} from "../../services/offreemploie.service";

@Component({
  selector: 'app-editoffreemploie',
  templateUrl: './editoffreemploie.component.html',
  styleUrls: ['./editoffreemploie.component.scss']
})
export class EditoffreemploieComponent implements OnInit {
  maoffreemplform: FormGroup = this.fb.group({
    titredoffre: ['',Validators.required],
    datelimite: ['', Validators.required],
    description: ['', Validators.required],
    langue: ['', Validators.required],
    experience: ['', Validators.required],
    exigenceemploie:['',Validators.required]


  })


  constructor(private fb:FormBuilder,
              private path:ActivatedRoute,
              private router:Router,
              private  offreemploieservice:OffreemploieService) { }

  ngOnInit(): void {
    this.id=this.path.snapshot.params.id;
    this.data=this.maoffreemplform.value
    this.getoffredata()
  }
  id;
  data;
  editoffreemploie():void
  {
    //console.log(this.maoffreemplform.value)

    this.offreemploieservice.updateoffre(this.data,this.id).subscribe((value:any) => {
      this.router.navigate(['/rh/offreemploie'])
    })

  }
  getoffredata():void
  {
    this.offreemploieservice.getodffrebyid(this.id).subscribe((value:any) => {
      this.maoffreemplform.setValue(
        {
          titredoffre:value.titredoffre,
          datelimite:value.datelimite,
          description:value.description,
          langue:value.langue,
          experience:value.experience,
          exigenceemploie:value.exigenceemploie
        })
    })
  }

}
