import { MetricData } from "./metric-data";

export interface Metric<Data = MetricData> {
    send(data?: Data): void;
}