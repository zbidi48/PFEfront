import { Component, OnInit } from '@angular/core';
import {PresenceService} from "../../services/presence.service";
import {IPresence} from "../../models/IPresence.model";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {HttpResponse} from "@angular/common/http";

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
    this.presenceservice.getpresence().subscribe((data:any)=>

      {
        this.presences=data.body
      },(error)=>{
        alert(('eurreure'));
      }


    )
  }
  deletepresence(id)
  {
    if (confirm('vous ete sure d efface' + id + '!!'))
    {
      this.presenceservice.deletepresence(id).subscribe((data:any)=>{
        this.afficherpresence()
      })
    }


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
