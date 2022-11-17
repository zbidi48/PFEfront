import { Component, OnInit } from '@angular/core';
import {FormationService} from "../../services/formation.service";
import {HttpResponse} from "@angular/common/http";
import {IFormation} from "../../models/IFormation.model";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {InscritformationService} from "../../services/inscritformation.service";
import {StorageService} from "../../services/storage.service";
import {ActivatedRoute} from "@angular/router";
import {Iinscritformation} from "../../models/Iinscritformation.model";
import Swal from "sweetalert2";

@Component({
  selector: 'app-formationemployee',
  templateUrl: './formationemployee.component.html',
  styleUrls: ['./formationemployee.component.scss']
})
export class FormationemployeeComponent implements OnInit {
 formations:IFormation[]=[];
  constructor(private formationservice:FormationService,private fb: FormBuilder,
              private inscritformationservice:InscritformationService,
              private storageservice:StorageService,
              private path:ActivatedRoute ) { }
  cherchform: FormGroup = this.fb.group({

    typedeformation: ['', Validators.required]

  })
  ngOnInit(): void {
    this.formationservice.getformations().subscribe((value:HttpResponse <IFormation[]>) => {
      this.formations=value.body
    })
  }
  search()
  {
    //console.log(this.cherchform.value.typedeformation)
    this.formationservice.chercherformation(this.cherchform.value.typedeformation).
    subscribe((donn:HttpResponse<IFormation[]>) => {
      this.formations=donn.body
    })
  }
  applayformation(id:number):void
  {
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-success',
        cancelButton: 'btn btn-danger'
      },
      buttonsStyling: false
    })

    swalWithBootstrapButtons.fire({
      title: 'vous ete sure de s inscrir?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'oui',
      cancelButtonText: 'Non',
      reverseButtons: true
    }).then((result) => {
      if (result.isConfirmed) {
        this.inscritformationservice.inscritformation(this.storageservice.getId(),id)
          .subscribe(
            (value:HttpResponse<Iinscritformation[]>) =>{

            }
          )
        swalWithBootstrapButtons.fire(
          'ok',
          'inscription au formation se fait avec succé.',
          'success'
        )
      } else if (
        /* Read more about handling dismissals below */
        result.dismiss === Swal.DismissReason.cancel
      ) {
        swalWithBootstrapButtons.fire(
          '',
          'l inscrit ne sera pas fait ',
          'error'
        )
      }
    })
    /*

     */
  }
}
