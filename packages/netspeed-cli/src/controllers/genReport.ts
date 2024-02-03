import { GenReportCommandInput } from '../commands';

export class GenReportController {
    constructor(private readonly input: GenReportCommandInput) {}

    execute() {
        console.log('[GenReportController]', this.input);
    }
}
