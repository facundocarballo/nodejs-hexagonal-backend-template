import { metrics } from '@opentelemetry/api';

export class BootstrapMeter {
    public static get() {
        return metrics.getMeter('name_ms');
    }
}