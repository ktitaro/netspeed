import { Metrics } from '../metrics';
import { convertToMs } from '../toolbox';

export function parseRawData(rawData: string): Metrics {
    const rawJSON = JSON.parse(rawData);
    Object.keys(rawJSON).forEach((key) => {
    });

    // const data = JSON.parse(rawData);
    // Object.keys(data).forEach((key) => {
    //     const val = parseFloat(data[key]);
    //     data[key] = convertToMs(val);
    // });
    // return data;
}
