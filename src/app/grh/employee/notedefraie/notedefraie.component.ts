import { Component, OnInit } from '@angular/core';
import {StorageService} from "../../services/storage.service";
import {INotedefraie} from "../../models/INotedefraie.model";
import {NotedefraieService} from "../../services/notedefraie.service";

@Component({
  selector: 'app-notedefraie',
  templateUrl: './notedefraie.component.html',
  styleUrls: ['./notedefraie.component.scss']
})
export class NotedefraieComponent implements OnInit {
  notedefraies:INotedefraie[]=[];


  constructor(private storageservice:StorageService,
              private notedefraieservice:NotedefraieService) { }

  ngOnInit(): void {
    this.email=this.storageservice.getEmail()
    this.getnotedefraieemployee()
  }
  email;
  getnotedefraieemployee():void
  {
    this.notedefraieservice.getnoteoffrebyemail(this.email).subscribe((value:any) => {
      this.notedefraies=value.body
    })
  }

}
