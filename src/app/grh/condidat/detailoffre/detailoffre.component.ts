import {Component, Input, OnInit} from '@angular/core';
import {OffreemploieService} from "../../services/offreemploie.service";
import {ActivatedRoute, Router} from "@angular/router";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {IOffreemploie} from "../../models/IOffreemploie.model";
import {HttpErrorResponse, HttpResponse} from "@angular/common/http";

@Component({
  selector: 'app-detailoffre',
  templateUrl: './detailoffre.component.html',
  styleUrls: ['./detailoffre.component.scss']
})
export class DetailoffreComponent implements OnInit {
  offresemploie:IOffreemploie = null;


  constructor(private offreemploieservice:OffreemploieService,
              private path:ActivatedRoute
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

}
