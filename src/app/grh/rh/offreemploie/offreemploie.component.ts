import { Component, OnInit } from '@angular/core';
import {IOffreemploie} from "../../models/IOffreemploie.model";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {OffreemploieService} from "../../services/offreemploie.service";
import {HttpResponse} from "@angular/common/http";
import {IMessageReponse} from "../../models/messageReponse.model";
import Swal from "sweetalert2";

@Component({
  selector: 'app-offreemploie',
  templateUrl: './offreemploie.component.html',
  styleUrls: ['./offreemploie.component.scss']
})
export class OffreemploieComponent implements OnInit {
  offreemploies:IOffreemploie[]=[];
  searchoffreempl: FormGroup = this.fb.group({

    titredoffre: ['', Validators.required]

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
    Swal.fire({
      title: 'vous ete sure de supprimer offre emploie ?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'ok, supprimer!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.offresemploieservice.deleteoffre(id).
        subscribe((value:HttpResponse<IMessageReponse>) => {
          this.getoffreempl()
        })
        Swal.fire(
          'supprimer!',
          'offre emploie est supprimé.',
          'success'
        )
      }
    })
  }
  search():void
  {
    this.offresemploieservice.searchoffre(this.searchoffreempl.value.titredoffre).
    subscribe((value:HttpResponse<IOffreemploie[]>) => {
      this.offreemploies=value.body
    })
  }

}
