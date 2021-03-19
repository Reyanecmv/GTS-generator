import { RandomGeneratorService } from "../services/RandomGeneratorService";

export class FireAlert {
	public temperature: number;
	public co2Lvl: number;
	public smokeDetectorStatus: boolean;
	public sprinklerStatus: boolean;
	public alarmStatus: boolean;
	public date: Date;

	constructor() {
		this.temperature = RandomGeneratorService.getRandomInt(100);
		this.co2Lvl = RandomGeneratorService.getRandomFloat();
		this.smokeDetectorStatus = RandomGeneratorService.getRandomBool() as boolean;
		this.sprinklerStatus = RandomGeneratorService.getRandomBool() as boolean;
		this.alarmStatus = RandomGeneratorService.getRandomBool() as boolean;
		this.date = new Date();
	}
}
