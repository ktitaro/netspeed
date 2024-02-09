import { Metrics } from '../metrics';
import { convertToMs } from '../toolbox';

/**
 * Attempts to parse cURL's raw output.
 * @param rawData - cURL string output.
 * @returns parsed cURL data as json.
 */
export function jsonToMetrics(rawData: string): Metrics {
    const data = JSON.parse(rawData);
    Object.keys(data).forEach((key) => {
        const val = parseFloat(data[key]);
        data[key] = convertToMs(val);
      })
    return {
        timeTotal: data['time_total'],
        timeConnect: data['time_connect'],
        timeRedirect: data['time_redirect'],
        timeNamelookup: data['time_namelookup'],
        timeAppconnect: data['time_appconnect'],
        timePretransfer: data['time_pretransfer'],
        timeStarttransfer: data['time_starttransfer'],
    };
}
