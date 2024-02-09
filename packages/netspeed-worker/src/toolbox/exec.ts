import * as util from 'util';
import * as proc from 'child_process';

// Promisified version of the exec function.
export const asyncExec = util.promisify(proc.exec);
