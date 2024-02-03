import { Command } from 'commander';
import { AuditController } from '../controllers';

export interface AuditCommandInput {
    readonly targetURL: string
    readonly iterations: number
    readonly outputPath: string
}

export class AuditCommand {
    register(cmd: Command) {
        cmd.command('audit')
            .description('Audits the network performance metrics of the web resource')
            .argument('<string>', 'The URL of the web resource that you want to audit for performance')
            .option('-i, --iters <number>', 'Total number of repretitive iterations for better results', '3')
            .option('-o, --output <string>', 'Path to the directory where the result will be saved', 'output')
            .action(this.execute.bind(this));
    }

    private execute(args: string, opts: Record<string, string>) {
        const input = this.parseInput(args, opts);
        new AuditController(input).execute();
    }

    private parseInput(args: string, opts: Record<string, string>) {
        const targetURL = String(args);
        const iterations = Number(opts['iters']);
        const outputPath = String(opts['output']);
        return { targetURL, iterations, outputPath };
    }
}
