import { FireAlert } from "./alerts/FireAlerts";
import Queue from "./queues/Queue";
import { SensorAlert } from './alerts/SensorAlert';
import { AccessControl } from './alerts/AccessControl';

export class App {
	queue: typeof Queue;

	init(): void {
		this.loadQueue();
	}

	loadQueue(): void {
		this.queue = Queue;
	}

	sendMockFireAlarms(volume, interval) {
		this.sendMockAlarms(volume, interval, new FireAlert())
	}

	sendMockSensorAlert(volume, interval) {
		this.sendMockAlarms(volume, interval, new SensorAlert())
	}

	sendMockAccessControl(volume, interval) {
		this.sendMockAlarms(volume, interval, new AccessControl())
	}


	// IN mod normal as scoate functia asta intr-un serviciu dar tinand cont cat de mica e aplicatia o las aici.
	sendMockAlarms(volume, interval, alert) {
		while (volume) {
			this.queue.sendMessage(this.queue.createMessage(alert));
			volume--;
			setTimeout(() => {
			}, interval);
		}
	}
}
