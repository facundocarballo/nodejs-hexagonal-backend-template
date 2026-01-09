export type MetricValue = string | number | boolean;
export type MetricValues = Array<string> | Array<number> | Array<boolean>;
export type MetricData = Record<string, MetricValue | MetricValues>;