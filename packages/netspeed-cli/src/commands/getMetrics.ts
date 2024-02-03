import { Command } from 'commander';
import { GetMetricsController } from '../controllers';

export interface GetMetricsCommandInput {
    readonly targetURL: string
    readonly iterations: number
    readonly outputPath: string
}

export class GetMetricsCommand {
    register(cmd: Command) {
        cmd.command('get-metrics')
            .description('Collects the network performance metrics of the web resource')
            .argument('<string>', 'The URL of the web resource that you want to audit for performance')
            .option('-i, --iters <number>', 'Total number of repretitive iterations for better results', '3')
            .option('-o, --output <string>', 'Path to the directory where the result will be saved', 'output')
            .action(this.execute.bind(this));
    }

    private execute(args: string, opts: Record<string, string>) {
        const input = this.parseInput(args, opts);
        new GetMetricsController(input).execute();
    }

    private parseInput(args: string, opts: Record<string, string>) {
        const targetURL = String(args);
        const iterations = Number(opts['iters']);
        const outputPath = String(opts['output']);
        return { targetURL, iterations, outputPath };
    }
}
