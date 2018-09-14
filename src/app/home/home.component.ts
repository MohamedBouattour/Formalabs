import { Component, OnInit } from '@angular/core';
import { EventServiceService } from '../services/event-service.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {

	 

  constructor(public es:EventServiceService) {
  	
   }

  ngOnInit() {
  	this.es.changePage(1);
  }
  

}
