import { Command } from 'commander';
import { GenReportController } from '../controllers';

export interface GenReportCommandInput {
    readonly inputPath: string
    readonly outputPath: string
}

export class GenReportCommand {
    register(cmd: Command) {
        cmd.command('gen-report')
            .description('Generates an HTML-report for the previously collected metrics')
            .argument('<string>', 'Path to the directory where the previously collected are located')
            .option('-o, --output <string>', 'Path to the directory where the result will be saved', 'output')
            .action(this.execute.bind(this));
    }

    private execute(args: string, opts: Record<string, string>) {
        const input = this.parseInput(args, opts);
        new GenReportController(input).execute();
    }

    private parseInput(args: string, opts: Record<string, string>) {
        const outputPath = String(opts['output']);
        return { inputPath: args, outputPath };
    }
}
