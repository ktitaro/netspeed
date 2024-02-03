#!/usr/bin/env node

import pkg from '../package.json';
import { Command } from 'commander';
import { AuditCommand } from './commands';
import { GenReportCommand } from './commands';
import { GetMetricsCommand } from './commands';

/**
 * Reads the inputs, executes
 * the corresponding commands.
 */
function runCLI() {
    const cmd = new Command(pkg.name)
        .description(pkg.description)
        .version(pkg.version)
        .showHelpAfterError();

    // Register commands here.
    new AuditCommand().register(cmd);
    new GenReportCommand().register(cmd);
    new GetMetricsCommand().register(cmd);

    // Reads the inputs, executes
    // the corresponding commands.
    cmd.parse();
}

runCLI();
