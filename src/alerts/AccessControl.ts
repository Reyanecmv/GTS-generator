import { RandomGeneratorService } from '../services/RandomGeneratorService';

export class AccessControl {
	public doorStatus: boolean;
	public accessAllowed: boolean;
	public doorTooOpen: boolean;

	constructor() {
		this.doorStatus = RandomGeneratorService.getRandomBool() as boolean;
		this.accessAllowed = RandomGeneratorService.getRandomBool() as boolean;
		this.doorTooOpen = RandomGeneratorService.getRandomBool() as boolean;
	}
}