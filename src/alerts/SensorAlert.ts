import { RandomGeneratorService } from '../services/RandomGeneratorService';

export class SensorAlert {
	public status: EquipmentStatus;
	public currentValue: number;
	public alarmStatus: EquipmentStatus;
	public batteryLevel: number;

	constructor() {
		this.status = RandomGeneratorService.getRandomBool() as EquipmentStatus;
		this.currentValue = RandomGeneratorService.getRandomInt(100);
		this.alarmStatus = RandomGeneratorService.getRandomBool() as EquipmentStatus;
		this.batteryLevel = RandomGeneratorService.getRandomFloat() as EquipmentStatus;
	}
}

export enum EquipmentStatus {
	On,
	Off
}