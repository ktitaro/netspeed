const pkg = require('../package.json')
const { Command } = require('commander')

async function runCLI() {
  const cli = new Command(`node ./${pkg.name}`)
    .description('Measures network performance using cURL ✨')
    .option('-n, --num <str>', 'Total number of repetitive runs')
    .requiredOption('-u, --url <str>', 'Target website URL')
    .showHelpAfterError()
    .parse()
  
  let { url, num } = cli.opts()
  num = Number(num ?? '3')

  const runAudir = require('./analyzer')
  const data = await runAudir(url, num)
  const json = JSON.stringify(data, null, 2)
  console.log(json)
}

runCLI()