import { Metrics } from '../metrics';
import { Timeline } from '../metrics';

/**
 * Extracts HTTP request timeline timings
 * from the raw network metrics from cURL.
 */
export class TimelineExtractor {
    extract(data: Metrics): Timeline {
        const domainLookupAt = data.timeNamelookup
        const tcpHandshakeAt = data.timeConnect
        const sslHandshakeAt = data.timeAppconnect
        const redirectDoneAt = data.timeRedirect
        const requestStartAt = data.timePretransfer
        const responseStartAt = data.timeStarttransfer
        const responseFinishAt = data.timeTotal
        return {
            domainLookupAt,
            tcpHandshakeAt,
            sslHandshakeAt,
            redirectDoneAt,
            requestStartAt,
            responseStartAt,
            responseFinishAt,
        }
    }
}
