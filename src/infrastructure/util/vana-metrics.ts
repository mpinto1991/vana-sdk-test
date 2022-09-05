import { VanaLogger } from "./vana-logger";
import { sendDistributionMetric } from "datadog-lambda-js";
const logger = new VanaLogger();

const metrics = {
  count: "c",
  gauge: "g",
  rate: "r",
  set: "s",
  histogram: "h",
  distribution: "d",
};

export class VanaMetrics {
  metric(name: string, value: number, type: string, meta?: object, ...tags: string[]): void {
    try {
      sendDistributionMetric(name, value, ...tags);
    } catch (ex) {
      logger.warning(
        "Import error, lambda_metric datadog not available. Using normal logger to send metric."
      );
      logger.info(`${name}:${value}|${type}`, meta, tags);
    }
  }

  count(name: string, value: number, meta: object, ...tags: string[]): void {
    return this.metric(name, value, metrics.count, meta, ...tags);
  }

  gauge(name: string, value: number, meta: object, ...tags: string[]): void {
    return this.metric(name, value, metrics.gauge, meta, ...tags);
  }

  rate(name: string, value: number, meta: object, ...tags: string[]): void {
    return this.metric(name, value, metrics.rate, meta, ...tags);
  }

  histogram(name: string, value: number, meta: object, ...tags: string[]): void {
    return this.metric(name, value, metrics.histogram, meta, ...tags);
  }

  set(name: string, value: number, meta: object, ...tags: string[]): void {
    return this.metric(name, value, metrics.set, meta, ...tags);
  }

  distribution(name: string, value: number, meta: object, ...tags: string[]): void {
    return this.metric(name, value, metrics.distribution, meta, ...tags);
  }
}
