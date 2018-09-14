import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Session } from'../models/session';

@Injectable({
  providedIn: 'root'
})

export class SessionService {

	apiUrl:string='http://formalabs.tn/service/SessionService/';

  constructor(public http: HttpClient) { }

  getAll() {
        return new Promise(resolve => {
          this.http.get(this.apiUrl+'get').subscribe(data => {
            resolve(data);
          }, err => {
            console.log(err);
          });
        });
      }

      getOne(session:Session) {
        return new Promise(resolve => {
          this.http.get(this.apiUrl+'get/'+session.id).subscribe(data => {
            resolve(data);
          }, err => {
            console.log(err);
          });
        });
      }

}
