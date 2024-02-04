/**
 * Represents all the raw network metrics
 * that we are collecting using the cURL.
 */
export interface Metrics {
    readonly timeTotal: number;
    readonly timeConnect: number;
    readonly timeRedirect: number;
    readonly timeNamelookup: number;
    readonly timeAppconnect: number;
    readonly timePretransfer: number;
    readonly timeStarttransfer: number;
}
