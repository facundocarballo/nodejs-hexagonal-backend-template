import { Metric } from "#domain/metrics/metric";
import { MetricData } from "#domain/metrics/metric-data";

export class LocalMetric<Data = MetricData> implements Metric<Data> {
    public send(data?: Data | undefined): void { }
}