import { Metrics } from '../metrics';
import { Timespan } from '../metrics';

/**
 * Extracts HTTP request timespan timings
 * from the raw network metrics from cURL.
 */
export function extractTimespan(data: Metrics): Timespan {
    const tcpHandshakeAt = data.timeConnect
    const sslHandshakeAt = data.timeAppconnect
    const requestStartAt = data.timePretransfer
    const responseStartAt = data.timeStarttransfer
    const domainLookupTook = data.timeNamelookup
    const sslHandshakeTook = (sslHandshakeAt - tcpHandshakeAt)
    const serverHandleTook = (responseStartAt - requestStartAt)
    const tcpHandshakeTook = (tcpHandshakeAt - domainLookupTook)
    return {
        domainLookupTook,
        tcpHandshakeTook,
        sslHandshakeTook,
        serverHandleTook,
    }
}
