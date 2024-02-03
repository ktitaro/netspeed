import { GetMetricsCommandInput } from '../commands';

export class GetMetricsController {
    constructor(private readonly input: GetMetricsCommandInput) {}

    execute() {
        console.log('[GetMetricsController]', this.input);
    }
}
