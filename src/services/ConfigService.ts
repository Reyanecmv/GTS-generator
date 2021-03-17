import { configuration } from '../../config';

export class ConfigService {
	static getRabbitConnectionString(): string {
		return configuration.rabbitConString;
	}

	static getRabbitQueue(): string {
		return configuration.rabbitQueue;
	}

	static getRabbitExchange(): string {
		return configuration.rabbitExchange;
	}

	static getAlertNumber(): number {
		return configuration.alertNumber;
	}

	static getAlertInterval(): number {
		return configuration.alertInterval;
	}
}
