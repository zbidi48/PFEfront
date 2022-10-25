import { Component, OnInit } from '@angular/core';
import {PresenceService} from "../../services/presence.service";
import {IPresence} from "../../models/IPresence.model";

@Component({
  selector: 'app-presence',
  templateUrl: './presence.component.html',
  styleUrls: ['./presence.component.scss']
})
export class PresenceComponent implements OnInit {
  presences:IPresence[]=[]
  constructor(private presenceservice:PresenceService) { }

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
}
