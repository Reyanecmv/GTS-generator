export class RandomGeneratorService {
	static getRandomInt(max: number): number {
		return Math.floor(Math.random() * Math.floor(max));
	}

	static getRandomBool(): boolean | number {
		return Math.random() < 0.5;
	}

	static getRandomFloat(): number {
		return Math.round(Math.random() * 100) / 100;
	}
}
