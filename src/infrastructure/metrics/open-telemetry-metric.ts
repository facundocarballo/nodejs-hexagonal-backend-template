import { Attributes, UpDownCounter } from "@opentelemetry/api";
import { Metric } from "#domain/metrics/metric";

export class OpenTelemetryMetric<Data extends Attributes> implements Metric<Data> {
    constructor(private readonly counter: UpDownCounter<Data>) { }

    public send(data?: Data | undefined): void {
        this.counter.add(1, data);
    }
}