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
  metric(name: string, value: number, type: string, ...tags: string[]): void {
    try {
      sendDistributionMetric(name, value, ...tags);
    } catch (ex) {
      logger.warning(
        "Import error, lambda_metric datadog not available. Using normal logger to send metric."
      );
      logger.setTags(tags);
      logger.info(`${name}:${value}|${type}`);
    }
  }

  count(name: string, value: number, ...tags: string[]): void {
    return this.metric(name, value, metrics.count, ...tags);
  }

  gauge(name: string, value: number, ...tags: string[]): void {
    return this.metric(name, value, metrics.gauge, ...tags);
  }

  rate(name: string, value: number, ...tags: string[]): void {
    return this.metric(name, value, metrics.rate, ...tags);
  }

  histogram(name: string, value: number, ...tags: string[]): void {
    return this.metric(name, value, metrics.histogram, ...tags);
  }

  set(name: string, value: number, ...tags: string[]): void {
    return this.metric(name, value, metrics.set, ...tags);
  }

  distribution(name: string, value: number, ...tags: string[]): void {
    return this.metric(name, value, metrics.distribution, ...tags);
  }
}
