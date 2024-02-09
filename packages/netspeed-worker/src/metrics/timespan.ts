/**
 * Represents the generic timeline metrics that
 * we calculate based on the raw network metrics.
 * Shows how long each of the network stages took.
 */
export interface Timespan {
    readonly domainLookupTook: number;
    readonly tcpHandshakeTook: number;
    readonly sslHandshakeTook: number;
    readonly serverHandleTook: number;
}
