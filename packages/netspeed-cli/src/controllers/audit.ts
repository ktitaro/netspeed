import { AuditCommandInput } from '../commands';

export class AuditController {
    constructor(private readonly input: AuditCommandInput) {}

    execute() {
        console.log('[AuditController]', this.input);
    }
}
