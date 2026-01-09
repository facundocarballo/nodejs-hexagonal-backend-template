import { MetricBuilder } from "#domain/metrics/metric-builder";
import { OpenTelemetryMetricBuilder } from "#infrastructure/metrics/open-telemetry-metric-builder";
import { BootstrapMeter } from "./meter";

export class BootstrapMetricBuilder {
    private static instance: MetricBuilder;

    public static get(): MetricBuilder {
        if (!this.instance) {
            const meter = BootstrapMeter.get();
            this.instance = new OpenTelemetryMetricBuilder(
                meter
            )
        }
        return this.instance;
    }

    public static register(builder: MetricBuilder) {
        this.instance = builder;
    }
}