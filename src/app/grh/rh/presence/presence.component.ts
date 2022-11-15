import { Component, OnInit } from '@angular/core';
import {PresenceService} from "../../services/presence.service";
import {IPresence} from "../../models/IPresence.model";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {HttpResponse} from "@angular/common/http";
import Swal from "sweetalert2";

@Component({
  selector: 'app-presence',
  templateUrl: './presence.component.html',
  styleUrls: ['./presence.component.scss']
})
export class PresenceComponent implements OnInit {
  presences:IPresence[]=[]
  searchpresence: FormGroup = this.fb.group({

    jobid: ['', Validators.required]

  })
  constructor(private presenceservice:PresenceService,
              private fb: FormBuilder) { }

  ngOnInit(): void {
    this.afficherpresence()
  }
  afficherpresence():void
  {
    this.presenceservice.getpresence().subscribe((data:HttpResponse<IPresence[]>)=>
      {
        this.presences=data.body
      }
      )
  }
  deletepresence(id)
  {
    Swal.fire({
      title: 'vous ete sure de supprimer',
      text: "avant de supprimer faite attention!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'oui, supprimer'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          'su!',
          'suppresion faite avec succé !.',
          'success'
        )
        this.presenceservice.deletepresence(id).subscribe((data:any)=>{
          this.afficherpresence()
        })
      }
    })
  }
  searchpresencebyajobid():void
  {
    this.presenceservice.searchpresence(this.searchpresence.value.jobid).subscribe(
      (value:HttpResponse<IPresence[]>) => {
        this.presences=value.body

      }
    )
  }
}
