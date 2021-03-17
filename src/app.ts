import { FireAlert } from "./alerts/FireAlerts";
import Queue from "./queues/Queue";

export class App {
	queue: typeof Queue;

	init(): void {
		this.loadQueue();
	}

	loadQueue(): void {
		this.queue = Queue;
	}

	sendMockFireAlarms(volume, interval) {
		while (volume) {
			this.queue.sendMessage(this.queue.createMessage(new FireAlert()));
			volume--;
			setTimeout(() => {}, interval);
		}
	}
}
