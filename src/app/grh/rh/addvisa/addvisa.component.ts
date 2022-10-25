import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-addvisa',
  templateUrl: './addvisa.component.html',
  styleUrls: ['./addvisa.component.scss']
})
export class AddvisaComponent implements OnInit {
  visaform: FormGroup = this.fb.group({
    datedepot: ['', Validators.required],
    daterecu: ['', Validators.required],
    typevisa: ['', Validators.required],
    userid: ['', Validators.required]
  })
  formSubmitted: boolean = false;
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  ajoutervisa(): void {
    this.formSubmitted = true;
    if (this.visaform.valid) {
      console.log(this.visaform.value);
    }

  }

}
