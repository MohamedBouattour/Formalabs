import { Component, OnInit } from '@angular/core';
import { EventServiceService } from '../services/event-service.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor(public ES:EventServiceService) {
    
   }

  ngOnInit() {
    this.ES.changePage(3);
  }

}
