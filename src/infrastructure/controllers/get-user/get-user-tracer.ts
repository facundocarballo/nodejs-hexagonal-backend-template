import { UserNotFound } from "#app/exceptions/user-not-found";
import { Metric } from "#domain/metrics/metric";
import { MetricBuilder } from "#domain/metrics/metric-builder";
import { User } from "#domain/user";
import { exhaustive } from "#utils/exhaustive";
import { GetUserUseCaseOutput } from "../../../app/use-cases/get-user/get-user-output";

enum MetricName {
    OK = 'get_user_ok',
    FAIL = 'get_user_fail'
}

enum EventCode {
    USER_NOT_FOUND = 'USER_NOT_FOUND',
    USER_FOUND = 'USER_FOUND',
    UNEXPECTED_ERROR = 'UNEXPECTED_ERROR'
}

export class GetUserTracer {
    private readonly ok: Metric;
    private readonly fail: Metric;

    constructor(
        private readonly metricBuilder: MetricBuilder
    ) {
        this.ok = this.metricBuilder.create(
            MetricName.OK,
            'Get User Ok'
        );

        this.fail = this.metricBuilder.create(
            MetricName.FAIL,
            'Get User Fail'
        );
    }

    public trace(output: GetUserUseCaseOutput) {
        if (output instanceof UserNotFound) {
            return this.traceUserNotFound();
        }

        if (output instanceof User) {
            return this.traceUserFound();
        }

        exhaustive(output);
    }

    public traceFail(status: number, message: string) {
        this.fail.send({
            eventCode: EventCode.UNEXPECTED_ERROR,
        });

        console.error(`Get User Fail - ${status} - ${message}`);
    }

    private traceUserNotFound() {
        this.ok.send({
            eventCode: EventCode.USER_NOT_FOUND,
        });
    }

    private traceUserFound() {
        this.ok.send({
            eventCode: EventCode.USER_FOUND,
        });
    }
}