import * as Amqp from "amqp-ts";
import { Message } from 'amqp-ts';
import { ConfigService } from '../services/ConfigService';

class Queue {
	connection: Amqp.Connection;
	exchange: Amqp.Exchange;
	queue: Amqp.Queue;

	constructor() {
		this.connection = new Amqp.Connection(ConfigService.getRabbitConnectionString());
		this.exchange = this.connection.declareExchange(ConfigService.getRabbitExchange());
		this.queue = this.connection.declareQueue(ConfigService.getRabbitQueue());
		this.queue.bind(this.exchange);
	}

	createMessage(item: Object): Amqp.Message{
		return new Amqp.Message(JSON.stringify(item));
	}

	sendMessage(message: Message): void {
		this.queue.send(message);
	}
}

export default new Queue;
