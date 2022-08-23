"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const vana_logger_1 = __importDefault(require("./vana-logger"));
const datadog_lambda_js_1 = require("datadog-lambda-js");
const logger = new vana_logger_1.default();
const metrics = {
    count: "c",
    gauge: "g",
    rate: "r",
    set: "s",
    histogram: "h",
    distribution: "d",
};
class VanaMetrics {
    metric(name, value, type, ...tags) {
        try {
            (0, datadog_lambda_js_1.sendDistributionMetric)(name, value, ...tags);
        }
        catch (ex) {
            logger.warning("Import error, lambda_metric datadog not available. Using normal logger to send metric.");
            logger.setTags(tags);
            logger.info(`${name}:${value}|${type}`);
        }
    }
    count(name, value, ...tags) {
        return this.metric(name, value, metrics.count, ...tags);
    }
    gauge(name, value, ...tags) {
        return this.metric(name, value, metrics.gauge, ...tags);
    }
    rate(name, value, ...tags) {
        return this.metric(name, value, metrics.rate, ...tags);
    }
    histogram(name, value, ...tags) {
        return this.metric(name, value, metrics.histogram, ...tags);
    }
    set(name, value, ...tags) {
        return this.metric(name, value, metrics.set, ...tags);
    }
    distribution(name, value, ...tags) {
        return this.metric(name, value, metrics.distribution, ...tags);
    }
}
exports.default = VanaMetrics;
