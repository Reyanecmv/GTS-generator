export class RandomGeneratorService {

	private static alertTypeValues: AlertType[] =
			[
				'ACCESS',
				'FIRE',
				'SENSOR'
			] as AlertType[];

	static getRandomInt(max: number): number {
		return Math.floor(Math.random() * Math.floor(max));
	}

	static getRandomBool(): boolean | number {
		return Math.random() < 0.5;
	}

	static getRandomFloat(): number {
		return Math.round(Math.random() * 100) / 100;
	}

	static getRandomAlertType(): AlertType {
		return AlertType[Math.floor(Math.random() * this.alertTypeValues.length)];
	}
}

export enum AlertType {
	Access = 'ACCESS',
	Fire = 'FIRE',
	Sensor = 'SENSOR'
}
