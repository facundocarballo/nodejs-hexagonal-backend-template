import { Metric } from "#domain/metrics/metric";
import { MetricBuilder } from "#domain/metrics/metric-builder";
import { LocalMetric } from "./local-metric";

export class LocalMetricBuilder implements MetricBuilder {
    public create(name: string, description: string): Metric {
        console.log("LocalMetricBuilder");
        console.log("Name: ", name);
        console.log("Description: ", description);

        return new LocalMetric();
    }
}