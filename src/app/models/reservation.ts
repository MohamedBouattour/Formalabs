import { User } from '../models/user';
import { Session } from '../models/session';

export class Reservation {
	public id: number;
	public users: User;
	public session: Session;
	public date: any;
	
	constructor(  ) { }
}
