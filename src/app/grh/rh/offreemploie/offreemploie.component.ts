import { Component, OnInit } from '@angular/core';
import {IOffreemploie} from "../../models/IOffreemploie.model";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {OffreemploieService} from "../../services/offreemploie.service";

@Component({
  selector: 'app-offreemploie',
  templateUrl: './offreemploie.component.html',
  styleUrls: ['./offreemploie.component.scss']
})
export class OffreemploieComponent implements OnInit {
  offreemploies:IOffreemploie[]=[];
  searchoffreempl: FormGroup = this.fb.group({

    typedoffre: ['', Validators.required]

  })
  constructor(private fb: FormBuilder,private offresemploieservice:OffreemploieService) { }


  ngOnInit(): void {
    this.getoffreempl()
  }
  getoffreempl():void
  {
    this.offresemploieservice.getoffre().subscribe((value:any) => {
      this.offreemploies=value.body

    },(err) => {
    alert(('eurreure'));
  })
  }
  deleteoffreempl(id):void
  {
    if (confirm('vous ete sure d efface' + id + '!!'))
    {
      this.offresemploieservice.deleteoffre(id).subscribe(value => {
        this.getoffreempl()
      })
    }
  }
  search():void
  {
    this.offresemploieservice.searchoffre(this.searchoffreempl.value.typedoffre).subscribe((value:any) => {
      this.offreemploies=value.body

    },(err) => {
      this.getoffreempl()
      alert(('offre non trouver verifier svp'));
    })
  }

}
