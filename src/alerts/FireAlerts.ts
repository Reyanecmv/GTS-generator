import { RandomGeneratorService } from "../services/RandomGeneratorService";

export class FireAlert {
	public temperature: number;
	public co2Lvl: number;
	public smokeDetectorStatus: boolean;
	public sprinklerStatus: boolean;
	public alarmStatus: boolean;

	constructor() {
		this.temperature = RandomGeneratorService.getRandomInt(100);
		this.co2Lvl = RandomGeneratorService.getRandomFloat();
		this.smokeDetectorStatus = RandomGeneratorService.getRandomBool();
		this.sprinklerStatus = RandomGeneratorService.getRandomBool();
		this.alarmStatus = RandomGeneratorService.getRandomBool();
	}
}
