const pkg = require('../package.json')
const { Command } = require('commander')

async function main() {
  const cli = new Command(`node ./${pkg.name}`)
    .description('Measures network performance using cURL ✨')
    .option('-o, --out <str>', 'Output file path to save result')
    .option('-n, --num <str>', 'Total number of repetitive runs')
    .requiredOption('-u, --url <str>', 'Target website URL')
    .showHelpAfterError()
    .parse()

  let { url, num, out } = cli.opts()
  out = String(out ?? './net.json')
  num = Number(num ?? '3')

  const run = require('./analyzer')
  await run(url, num)
}

main()