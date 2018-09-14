import { Cour } from '../models/cour';
import { Programme } from '../models/programme';


export class Session {
	public id: number;
	public nbheures: number;
	public prix: number;
	public libelle: string;
	public cour: Cour;
	public programmes:Array<Programme>=[];

	constructor(  ) { }
}
