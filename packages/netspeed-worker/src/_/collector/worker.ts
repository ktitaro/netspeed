import { templ } from '../collector';
import { Metrics } from '../metrics';
import { execSync } from 'child_process';
import { convertToMs } from '../toolbox';
import { TimespanExtractor } from '../extractors';
import { TimelineExtractor } from '../extractors';

export interface CollectorInput {
    readonly targetURL: string;
    readonly iterations: number;
}

export class Collector {
    private readonly input: CollectorInput;

    constructor(input: CollectorInput) {
        if (!input.targetURL) throw '"targetURL" is required';
        if (!input.iterations) throw '"iterations" is required';
        this.input = input;
    }

    /**
     * Audits network performance using cURL.
     * @returns - network performance metrics.
     */
    execute() {
        const result = [];
        const { targetURL: url, iterations } = this.input;
        const cmd = `curl -L -S -s -o /dev/null -w '${templ}' ${url}`;
        for (let i = 0; i < iterations; i++) {
            result.push(this.processTarget(cmd));
        }
    }

    private processTarget(cmd: string) {
        const result = execSync(cmd);
    }

    private parseRawMetrics(rawData: string) {
        const rawJson = JSON.parse(rawData);
        Object.keys(rawJson).forEach((key) => {
        });
    }
}


// export function parseRawData(rawData: string): Metrics {
//     const rawJSON = JSON.parse(rawData);
//     Object.keys(rawJSON).forEach((key) => {
//     });

//     // const data = JSON.parse(rawData);
//     // Object.keys(data).forEach((key) => {
//     //     const val = parseFloat(data[key]);
//     //     data[key] = convertToMs(val);
//     // });
//     // return data;
// }

// export class CollectorWorker {
//     /**
//      * Runs network audits using cURL.
//      * @param url - target website URL.
//      * @param num - total iterations num.
//      * @returns processed network metrics.
//      */
//     async run(url: string, num: number) {
//         const cmd = `curl -L -S -s -o /dev/null -w '${schema}' ${url}`
//         const resp = await Promise.all(new Array(num).fill(execSync(cmd)))
//         return resp.map((result) => this.postProcess(result.stdout))
//     }
// }
