import { Metric } from "#domain/metrics/metric";
import { MetricBuilder } from "#domain/metrics/metric-builder";
import { MetricData } from "#domain/metrics/metric-data";
import { Meter } from "@opentelemetry/api";
import { OpenTelemetryMetric } from "./open-telemetry-metric";
import packageJson from '../../../package.json'

export class OpenTelemetryMetricBuilder implements MetricBuilder {
    constructor(private readonly meter: Meter) { }

    public create<Data extends MetricData>(name: string, description: string): Metric<Data> {
        const counter = this.meter.createUpDownCounter(`${packageJson.name}_${name}.count`, {
            description
        });

        return new OpenTelemetryMetric<Data>(counter);
    }
}