/**
 * Represents the generic timeline metrics that
 * we calculate based on the raw network metrics.
 * Highlights the stages of the network request.
 */
export interface Timeline {
    readonly domainLookupAt: number;
    readonly tcpHandshakeAt: number;
    readonly sslHandshakeAt: number;
    readonly redirectDoneAt: number;
    readonly requestStartAt: number;
    readonly responseStartAt: number;
    readonly responseFinishAt: number;
}
