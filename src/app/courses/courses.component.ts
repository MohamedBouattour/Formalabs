import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';
import { EventServiceService } from '../services/event-service.service';
import { SessionService } from '../services/session.service';
import { Session } from'../models/session';

@Component({
	
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {


	sessions : Array<Session> = [];

	constructor(public ES:EventServiceService,public sessionService:SessionService) {
    	this.getSessions();
   }

  ngOnInit() {
    this.ES.changePage(2);
  }

  getSessions(){
  	this.sessionService.getAll()
  	.then((data :Array<Session>)=> {
      this.sessions = data["data"];
      });
  }

  setID(session_id:number){
  	localStorage.setItem("session_id",JSON.stringify(session_id));
  }
}
