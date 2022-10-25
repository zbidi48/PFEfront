import { Component, OnInit } from '@angular/core';
import {CondidatService} from "../../services/condidat.service";
import {OffreemploiecondidatService} from "../../services/offreemploiecondidat.service";
import {ICondidat} from "../../models/ICondidat.model";
import {IOffrecondidat} from "../../models/IOffrecondidat.model";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {StorageService} from "../../services/storage.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-applayoffreemploie',
  templateUrl: './applayoffreemploie.component.html',
  styleUrls: ['./applayoffreemploie.component.scss']
})
export class ApplayoffreemploieComponent implements OnInit {
condidats:ICondidat[]=[];
offrescondidats:IOffrecondidat[]=[];
  apllayoffreform: FormGroup = this.fb.group({


    status:['ENCOUR'],
    condidats_id:[this.storageservice.getId,Validators.required],
    offreemploie_id:[this.path.snapshot.params.id,Validators.required]
  })
  formSubmitted: boolean = false;

  message="offre postuler avec succé!";
  showMsg:boolean = false;
  has_error:boolean = false;
  error_message:string ='verifier svp';
  constructor( private condidatservice:CondidatService,
               private applayoffreservice:OffreemploiecondidatService,
               private fb:FormBuilder,
               private storageservice:StorageService,
               private path:ActivatedRoute) { }

  ngOnInit(): void {
    this.getcondidats()
    this.idcond=this.storageservice.getId

  }
  idcond;

  getcondidats():void
  {
    this.condidatservice.getcondidat().subscribe((value:any) => {
      this.condidats=value.body
    })
  }
  applayoffreempl():void
  {
    console.log(this.apllayoffreform.value)
    //console.log(this.idcond)
   /*
    this.formSubmitted=true;

   if(this.apllayoffreform.valid)
   {




     this.applayoffreservice.addoffrecondidat(this.apllayoffreform.value).subscribe(value => {
       this.apllayoffreform.reset(true);
     })




   }
    */
  }

}
