import { App } from "./app";
import { configuration } from '../config';

const application = new App();

application.init();
application.sendMockFireAlarms(
		configuration.alertNumber,
		configuration.alertInterval
);
application.sendMockSensorAlert(
		configuration.alertNumber,
		configuration.alertInterval
)
application.sendMockAccessControl(
		configuration.alertNumber,
		configuration.alertInterval
)
