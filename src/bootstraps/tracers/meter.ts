import { metrics } from '@opentelemetry/api';
import packageJson from '../../../package.json'
export class BootstrapMeter {
    public static get() {
        return metrics.getMeter(packageJson.name);
    }
}