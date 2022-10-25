import { Component, OnInit } from '@angular/core';
import {TestService} from "../../services/test.service";

@Component({
  selector: 'app-visa',
  templateUrl: './visa.component.html',
  styleUrls: ['./visa.component.scss']
})
export class VisaComponent implements OnInit {

  constructor(private testService: TestService) { }

  ngOnInit(): void {
    this.testService.message().subscribe(res => console.log(res));
  }

}
