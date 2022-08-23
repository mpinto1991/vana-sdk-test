declare class VanaMetrics {
    metric(name: string, value: number, type: string, ...tags: string[]): void;
    count(name: string, value: number, ...tags: string[]): void;
    gauge(name: string, value: number, ...tags: string[]): void;
    rate(name: string, value: number, ...tags: string[]): void;
    histogram(name: string, value: number, ...tags: string[]): void;
    set(name: string, value: number, ...tags: string[]): void;
    distribution(name: string, value: number, ...tags: string[]): void;
}
export default VanaMetrics;
