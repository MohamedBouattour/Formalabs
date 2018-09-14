import { Injectable , Output, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EventServiceService {

	@Output() change: EventEmitter<number> = new EventEmitter();
  
  selectedIndex:number
  constructor() { }

  changePage(id) {
  	this.selectedIndex=id;
  	this.change.emit(id);
  	//console.log(this.notify);
  }

}
