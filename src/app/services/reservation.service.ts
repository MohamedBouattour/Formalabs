import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Reservation } from '../models/reservation';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {

  apiUrl:string='http://formalabs.tn/service/SessionService/'
    constructor(public http: HttpClient) {
      }

      save(reservation:Reservation){
        return new Promise(resolve => {
          this.http.post(this.apiUrl+'reserver',JSON.stringify(reservation))
          .subscribe(data => {
            resolve(data);
          }, err => {
            console.log(err);
          });
        });
      }
}
