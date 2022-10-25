import { Component, OnInit } from '@angular/core';
import {IPresence} from "../../models/IPresence.model";
import {PresenceService} from "../../services/presence.service";
import {ActivatedRoute, Router} from "@angular/router";
import {StorageService} from "../../services/storage.service";

@Component({
  selector: 'app-presence',
  templateUrl: './presence.component.html',
  styleUrls: ['./presence.component.scss']
})
export class PresenceComponent implements OnInit {
  presences:IPresence[]=[]
  constructor(private presenceservice:PresenceService,
              private path:ActivatedRoute,private router:Router,
              private storageservice:StorageService ) { }
  email;
  ngOnInit(): void {
    //this.afficherpresence()
    this.email=this.storageservice.getEmail()
    this.getpresenceempl()

  }

  /*
  afficherpresence():void
  {
    const id=this.path.snapshot.data.params.id;
    this.presenceservice.getpresencebyuser(id).subscribe((data:any)=>

      {
        this.presences=data.body
      }


    )
  }
   */
  getpresenceempl():void
  {
    this.presenceservice.getpresencebyusermail(this.email).subscribe(value => {
      this.presences=value.body

    })
  }

}
