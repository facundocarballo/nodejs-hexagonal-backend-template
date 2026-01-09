import { GetUserTracer } from "#infrastructure/controllers/get-user/get-user-tracer";
import { BootstrapMetricBuilder } from "./metric-builder";

export class BootstrapGetUserTracer {
    private static instance: GetUserTracer;

    public static get(): GetUserTracer {
        if (!this.instance) {
            const metricBuilder = BootstrapMetricBuilder.get();
            this.instance = new GetUserTracer(metricBuilder)
        }
        return this.instance;
    }

    public static register(tracer: GetUserTracer) {
        this.instance = tracer;
    }
}