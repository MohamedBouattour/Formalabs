import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CourService {
apiUrl:string='http://formalabs.tn/service/CourService/'
  constructor(public http: HttpClient) {
      }

      getAll() {
        return new Promise(resolve => {
          this.http.get(this.apiUrl+'get/0').subscribe(data => {
            resolve(data);
          }, err => {
            console.log(err);
          });
        });
      }
      getOne(id:number) {
        return new Promise(resolve => {
          this.http.get(this.apiUrl+'get/'+id).subscribe(data => {
            resolve(data);
          }, err => {
            console.log(err);
          });
        });
      }
}
