import { Metric } from "./metric";
import { MetricData } from "./metric-data";

export interface MetricBuilder {
    create<Data extends MetricData>(name: string, description: string): Metric<Data>;
}