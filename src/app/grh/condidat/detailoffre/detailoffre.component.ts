import {Component, Input, OnInit} from '@angular/core';
import {OffreemploieService} from "../../services/offreemploie.service";
import {ActivatedRoute, Router} from "@angular/router";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {IOffreemploie} from "../../models/IOffreemploie.model";
import {HttpErrorResponse, HttpResponse} from "@angular/common/http";
import {OffreemploiecondidatService} from "../../services/offreemploiecondidat.service";
import {StorageService} from "../../services/storage.service";
import {IMessageReponse} from "../../models/messageReponse.model";
import Swal from 'sweetalert2'

@Component({
  selector: 'app-detailoffre',
  templateUrl: './detailoffre.component.html',
  styleUrls: ['./detailoffre.component.scss']
})
export class DetailoffreComponent implements OnInit {
  offresemploie:IOffreemploie = null;
  msg:string = '';


  constructor(private offreemploieservice:OffreemploieService,
              private path:ActivatedRoute,
              private postuleroffreservice:OffreemploiecondidatService,
              private storageservice:StorageService,
              private  router:Router
               ) { }

  ngOnInit(): void {

    this.offreemploieservice.getodffrebyid(this.path.snapshot.params.id).subscribe(
      {
        next:(res:HttpResponse<IOffreemploie>)=> this.offresemploie = res.body,
        error:(err:HttpErrorResponse) => console.log(err),
        complete:() => console.log("complete")
      }
    )

  }
  //id;
 getdetailoffre()
 {

/*this.offreemploieservice.getodffrebyid(id).subscribe((value:any) => {
  console.log(value.body)

})*/
 }
 applayoffre():void
 {
   Swal.fire({
     title: 'vous ete sure?',
     text: "aprés le clic sur boutton ok l'offre sera postuler!",
     icon: 'warning',
     showCancelButton: true,
     confirmButtonColor: '#3085d6',
     cancelButtonColor: '#d33',
     confirmButtonText: 'ok'
   }).then((result) => {
     if (result.isConfirmed) {
       this.postuleroffreservice.addoffrecondidat(this.path.snapshot.params.id,this.storageservice.getId())
         .subscribe((value:HttpResponse<IMessageReponse>) => {
           this.router.navigateByUrl("/espacecondidat/offreemploie");

           }

         )
       Swal.fire(
         'postuler!',
         'l offre a éte postuler avec succé.',
         'success'
       )
     }
   })
   /*
  this.postuleroffreservice.addoffrecondidat(this.path.snapshot.params.id,this.storageservice.getId())
    .subscribe((value:HttpResponse<IMessageReponse>) => {

    }

  )
  */
 }

}
