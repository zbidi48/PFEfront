import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {VisaService} from "../../services/visa.service";
import {HttpResponse} from "@angular/common/http";
import {IMessageReponse} from "../../models/messageReponse.model";

@Component({
  selector: 'app-accordvisa',
  templateUrl: './accordvisa.component.html',
  styleUrls: ['./accordvisa.component.scss']
})
export class AccordvisaComponent implements OnInit {
  satusvisaform: FormGroup = this.fb.group({
    status:[Validators.required]
  })
  constructor(private fb:FormBuilder,
              private path:ActivatedRoute,
              private router:Router,
              private visaservice:VisaService) { }

  ngOnInit(): void {

  }
statusvisas():void
{
  //console.log(this.satusvisaform.value)

this.visaservice.statusvisa(this.path.snapshot.params.id,this.satusvisaform.value).subscribe(
  (value:any) => {
    this.router.navigate(['/rh/visa'])


  }


)


}
}
