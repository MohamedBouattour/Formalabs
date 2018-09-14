import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

	apiUrl:string='http://formalabs.tn/service/UserService/'
  
  constructor(public http: HttpClient) {
      }

      login(user){
      	return new Promise(resolve => {
          this.http.post(this.apiUrl+'login',JSON.stringify(user))
          .subscribe(data => {
            resolve(data);
          }, err => {
            console.log(err);
          });
        });
      }

      register(user){
      	return new Promise(resolve => {
          this.http.post(this.apiUrl+'register',JSON.stringify(user))
          .subscribe(data => {
            resolve(data);
          }, err => {
            console.log(err);
          });
        });
      }
}
