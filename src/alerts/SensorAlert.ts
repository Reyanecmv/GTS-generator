import { AlertType, RandomGeneratorService } from '../services/RandomGeneratorService';

export class SensorAlert {
	public alertType: AlertType
	public status: boolean;
	public currentValue: number;
	public alarmStatus: boolean;
	public batteryLevel: number;
	public date: Date;

	constructor() {
		this.status = RandomGeneratorService.getRandomBool() as boolean;
		this.currentValue = RandomGeneratorService.getRandomInt(100);
		this.alarmStatus = RandomGeneratorService.getRandomBool() as boolean;
		this.batteryLevel = RandomGeneratorService.getRandomFloat() as EquipmentStatus;
		this.date = new Date();
		this.alertType = RandomGeneratorService.getRandomAlertType();
	}
}

export enum EquipmentStatus {
	On,
	Off
}




