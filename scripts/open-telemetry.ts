import { NodeSDK } from '@opentelemetry/sdk-node';
import { PrometheusExporter } from '@opentelemetry/exporter-prometheus';
import { getNodeAutoInstrumentations } from '@opentelemetry/auto-instrumentations-node';

const exporter = new PrometheusExporter({
    port: 9464,
    endpoint: '/metrics',
});

const sdk = new NodeSDK({
    metricReader: exporter,
    instrumentations: [getNodeAutoInstrumentations()],
});

sdk.start();
console.log("OpenTelemetry metrics available at http://localhost:9464/metrics");

// Graceful shutdown
process.on('SIGTERM', () => {
    sdk.shutdown()
        .then(() => console.log('OpenTelemetry SDK shutdown'))
        .catch((error) => console.log('Error shutting down OpenTelemetry SDK', error))
        .finally(() => process.exit(0));
});