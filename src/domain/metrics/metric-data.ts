export type MetricValue = string | number | boolean;
export type MetricValues = Array<MetricValue>;
export type MetricData = Record<string, MetricValue | MetricValues>;