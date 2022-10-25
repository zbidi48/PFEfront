import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {ContratService} from "../../services/contrat.service";

@Component({
  selector: 'app-editcontrat',
  templateUrl: './editcontrat.component.html',
  styleUrls: ['./editcontrat.component.scss']
})
export class EditcontratComponent implements OnInit {
  macontratform: FormGroup = this.fb.group({
    code:['', Validators.required],
    libelle:['', Validators.required],
    datedebut:['', Validators.required],
    datefin:['', Validators.required]


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
    const id=this.path.snapshot.params.id;
    console.log(this.macontratform.value);
    this.contratservice.updatecontrat(this.macontratform.value,id).subscribe((data:any)=>{
      this.router.navigate(['/rh/contrat'])
    })
  }
  getcontratdata():void
  {
    const id=this.path.snapshot.data.params.id;
    this.contratservice.getcontratbyid(id).subscribe((data:any)=>{
      this.macontratform.setValue(
        {
          code:data.code,
          libelle:data.libelle,
          datedebut:data.datedebut,
          datefin:data.datefin
        }

      )
    })
  }
}
