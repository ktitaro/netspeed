import { asyncExec } from '../toolbox';
import { jsonToMetrics } from '../parsers';
import { extractTimeline } from '../extractors';
import { extractTimespan } from '../extractors';

/**
 * Collects network metrics using cURL
 * @param url - url of the target website.
 * @param num - total number of iteractions.
 * @returns - the collected network metrics.
 */
export async function collectMetrics(url: string, num: number) {
    const cmd = `curl -L -S -s -o /dev/null -w '%{json}' ${url}`;
    const res = await Promise.all(new Array(num).fill(asyncExec(cmd)));
    return res.map((result) => extractNetworkMetrics(result.stdout));
}

/**
 * Extracts network metrics from the raw data.
 * @param data - raw network metrics from cURL.
 * @returns - the extracted network metrics.
 */
function extractNetworkMetrics(data: string) {
    const metrics = jsonToMetrics(data);
    const timeline = extractTimeline(metrics);
    const timespan = extractTimespan(metrics);
    return { timeline, timespan, };
}
