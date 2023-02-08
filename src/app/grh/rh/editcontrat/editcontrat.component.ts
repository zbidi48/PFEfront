import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {ContratService} from "../../services/contrat.service";
import {HttpResponse} from "@angular/common/http";
import {IContrat} from "../../models/IContrat.model";
import {IMessageReponse} from "../../models/messageReponse.model";

@Component({
  selector: 'app-editcontrat',
  templateUrl: './editcontrat.component.html',
  styleUrls: ['./editcontrat.component.scss']
})
export class EditcontratComponent implements OnInit {
  macontratform: FormGroup = this.fb.group({

    type:['', Validators.required],
    datedebut:[ Validators.required],



  })
  constructor( private contratservice:ContratService
               ,private fb:FormBuilder,
               private path:ActivatedRoute,
               private router:Router) { }

  ngOnInit(): void {
    this.getcontratdata()
  }
  editcontrat():void
  {

    this.contratservice.updatecontrat(this.macontratform.value,this.path.snapshot.params.id).
    subscribe((data:HttpResponse<IMessageReponse>)=>{
      this.router.navigate(['/rh/contrat'])
    })
  }
  getcontratdata():void
  {

    this.contratservice.getcontratbyid(this.path.snapshot.params.id).
    subscribe((data:HttpResponse<IContrat>)=>{
      this.macontratform.setValue(
        {

          type:data.body.type,
          datedebut:data.body.datedebut

        }

      )
    })
  }
}
