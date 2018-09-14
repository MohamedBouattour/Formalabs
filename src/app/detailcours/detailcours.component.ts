import { Component, OnInit , ViewChild, ElementRef } from '@angular/core';
import { Session } from'../models/session';
import { SessionService } from '../services/session.service';

import { Reservation } from '../models/reservation';
import { ReservationService } from'../services/reservation.service';

import { User } from '../models/user';


@Component({
  selector: 'app-detailcours',
  templateUrl: './detailcours.component.html',
  styleUrls: ['./detailcours.component.css']
})
export class DetailcoursComponent implements OnInit {

@ViewChild('now') now: ElementRef;


	session:Session = new Session();
	reservation:Reservation = new Reservation();
	user:User = new User();

  constructor(public sessionService:SessionService,public reservationService:ReservationService) {
  	this.session.id=JSON.parse(localStorage.getItem('session_id'));
    this.user=JSON.parse(localStorage.getItem('user'));
  	this.getSession();
  }

  getSession(){
  	this.sessionService.getOne(this.session)
  	.then((data :Session)=> {
      this.session = data["data"];
      console.log(this.session);
      });
  }

  reserver() {
  	this.reservation.session=this.session;
  	this.reservation.users=this.user;
  	this.reservationService.save(this.reservation)
  }

  ngOnInit() {
  }

}
